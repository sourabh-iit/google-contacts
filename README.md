# My Google Contacts App

A simple website to show contacts from one's google account. Google's sign is used for authentication and access tokens to get user's contacts. And JWT is used for further authorization and authentication. It is a knolskape coding assignment.

link: https://realtime-messaging-app.herokuapp.com

## Tech stack used:
Docker
Node.js 12
Express.js 4.16
Mongodb 3.6
Angular 10
Ngx-scrollbar 7.3
Jquery 3.5.1
Bootstrap 4
Font awesome 4.7

## How to run:
Docker and npm should to be pre-installed
1. Fill .env variables like: google secret and other variables.
2. Run docker-compose up --build -d (This will create static files from angular production to public folder and run nodejs server)


## Features:
1. Responsiveness across screen
2. Dockerized application
