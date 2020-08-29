const mongoclient = require('mongodb').MongoClient;
const auth = require('../auth_util');
const assert = require('assert');
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = "737715185635-6r9bbcbsa2d1hm4ok049iugrqjop6odb.apps.googleusercontent.com";
const CLIENT_SECRET = "YaKv-28UErCFuEquC3-lXS1m";
const redirectUri = "http://localhost:3000/google/callback";
const url = process.env.MONGODB_URI || "mongodb://localhost:27017";

async function connect() {
  const client = await mongoclient.connect(url);
  return client.db('contacts');
}

const login = async function(req, res, next) {
  try {
    const idToken = req.body.idToken;
    const accessToken = req.body.accessToken;
    console.log(req.body)
    assert(idToken && accessToken, "invalid token");
    const client = new OAuth2Client(CLIENT_ID)
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: CLIENT_ID
    });
    const payload = ticket.getPayload();
    assert(payload.email, "Email is empty");
    assert(payload.email_verified, "Email is not verified");
    const db = await connect();
    console.log(payload);
    await db.collection('users').updateOne({email: payload.email}, {
      $set: {
        email: payload.email,
        name: payload.name || "",
        accessToken: accessToken,
        expiry: payload.exp,
        googlePictureLink: payload.picture
      }
    }, {upsert: true});
    const user = await db.collection('users').findOne({email: payload.email});
    delete user.accessToken;
    res.json({success: true, user: user, token: auth.createToken(payload.email)});
  } catch(error) {
    res.status(400).json({success: false, error: error.message});
  }
}

// const getAuthUrl = async function(req, res, next) {
//   const oauth2Client = new google.auth.OAuth2(
//     CLIENT_ID, CLIENT_SECRET, redirectUri
//   );
//   const authUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: "profile email https://www.googleapis.com/auth/contacts.readonly"
//   })
//   res.json({url: authUrl});
// }

// const googleCallback = async function(req, res, next) {
//   try {
//     const code = req.query.code;
//     const oauth2Client = new google.auth.OAuth2(
//       CLIENT_ID, CLIENT_SECRET, redirectUri
//     );
//     const resp = await oauth2Client.getToken(code);
//     const tokens = resp.tokens;
//     const accessToken = tokens.access_token
//     const refreshToken = tokens.refresh_token;
//     const expiry = tokens.expiry_date;
//     oauth2Client.setCredentials(tokens);
//     const peopleService = google.people({version: 'v1', auth: oauth2Client}).people
//     const val = await peopleService.get({resourceName: 'people/me', personFields: "names,emailAddresses,coverPhotos"});
//     const data = val.data;
//     const name = data.names[0].displayName;
//     const email = data.emailAddresses[0].value;
//     const coverPhoto = data.coverPhotos[0].url;
//     const db = await connect();
//     await db.collection('users').updateOne({email: email}, {
//       $set: {
//         name: name || "",
//         accessToken: accessToken,
//         refreshToken: refreshToken,
//         expiry: expiry,
//         coverPhoto: coverPhoto || ""
//       }
//     }, {upsert: true});
//     const user = await db.collection('users').findOne({email: email});
//     res.json(user);
//   } catch(e) {
//     console.log(e);
//     res.status(400).send(e);
//   }
// }

module.exports.login = login;
// module.exports.getAuthUrl = getAuthUrl;
// module.exports.googleCallback = googleCallback;