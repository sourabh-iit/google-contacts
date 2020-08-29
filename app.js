const express = require('express');
const auth_util = require('./auth_util');
const auth = require('./routes/auth');
const googleRouter = require('./routes/google')
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const temp_path = path.join(__dirname, 'public', 'index.html');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', function(req, res) {
  res.sendFile(temp_path);
});
app.use('/api/v1/login', auth.login);
// app.get('/api/v1/authurl', auth.getAuthUrl);
// app.get('/google/callback', auth.googleCallback);
app.get('/', function(req, res, next) {
  res.sendFile(temp_path);
});
app.get('/contacts', function(req, res, next) {
  res.sendFile(temp_path);
});

app.use(async function(req, res, next) {
  const bearerToken = (req.headers.authorization || "").split(" ")[1] || "";
  const username = await auth_util.verifyAccesstoken(bearerToken);
  if(username != null) {
    req.username = username;
    next();
  } else {
    return res.sendStatus(401);
  }
});

app.use('/api/v1/google', googleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send("Not found", status=404)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error(err);
  res.status(err.status || 500);
  res.send('error');
});

server.listen(port);