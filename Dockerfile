FROM node:12
RUN apt-get update && apt-get install -y procps lsof
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]