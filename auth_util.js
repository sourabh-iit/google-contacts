let jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || "secret";
const validity = 60*60*24*30;

const createToken = function(username) {
    const token = jwt.sign({
        'sub': username
    }, secret, {
        expiresIn: validity
    });
    return token;
}

function verifyAccesstoken(token) {
    try {
        const jwt_payload  = jwt.verify(token, secret);
        return jwt_payload.sub;
    } catch(e) {
        return null;
    }
}

function getAccessToken(refreshToken) {

}

module.exports.createToken = createToken;
module.exports.verifyAccesstoken = verifyAccesstoken;
module.exports.getAccessToken = getAccessToken;