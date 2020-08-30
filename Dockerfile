FROM node:12
RUN apt-get update && apt-get install -y procps lsof
WORKDIR /usr/src/app
COPY . .
RUN npm install
WORKDIR /usr/src/app/frontend
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --prod
WORKDIR /usr/src/app
EXPOSE 3000
CMD [ "node", "app.js" ]