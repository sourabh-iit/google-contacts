const mongoclient = require('mongodb').MongoClient;
var express = require('express')
var router = express.Router()
const assert = require('assert');
const {google} = require('googleapis');

const CLIENT_ID = "737715185635-6r9bbcbsa2d1hm4ok049iugrqjop6odb.apps.googleusercontent.com";
const CLIENT_SECRET = "YaKv-28UErCFuEquC3-lXS1m";
const redirectUri = "http://localhost:3000/google/callback";
const url = process.env.MONGODB_URI || "mongodb://localhost:27017";

async function connect() {
  const client = await mongoclient.connect(url);
  return client.db('contacts');
}

router.get('/contacts', async function(req, res) {
    try {
        const db = await connect();
        const email = req.username;
        const user = await db.collection('users').findOne({email: email});
        assert(user, 'Invalid request');
        const auth = new google.auth.OAuth2({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            redirectUri: redirectUri
        });
        auth.setCredentials({access_token: user.accessToken});
        const resp = await google.people({version: "v1", auth}).people.connections.list({
            resourceName: 'people/me',
            personFields: 'names,emailAddresses,coverPhotos,phoneNumbers',
            pageSize: 20
        });
        console.log(resp);
        const connections = resp.data.connections;
        const contacts = [];
        if(connections) {
            connections.forEach((person) => {
                contacts.push({
                    name: person.names ? person.names[0].displayName: "",
                    email: person.emailAddresses ? person.emailAddresses[0].value : "",
                    coverPhoto: person.coverPhotos ? person.coverPhotos[0].url : "",
                    phoneNumber: person.phoneNumbers[0].value
                });
            });
        }
        res.json({contacts: contacts});
    } catch(error) {
        res.status(400).json({success: false, error: error.message});
    }
})

module.exports = router