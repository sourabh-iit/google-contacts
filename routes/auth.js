const mongoclient = require('mongodb').MongoClient;
const auth = require('../auth_util');
const assert = require('assert');
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = "737715185635-6r9bbcbsa2d1hm4ok049iugrqjop6odb.apps.googleusercontent.com";
const url = process.env.MONGODB_URI || "mongodb://mongo:27017";

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

module.exports.login = login;