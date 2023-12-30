FROM node:20

WORKDIR /usr/src/app
RUN npm install -g @angular/cli

COPY package.json .
RUN npm install

CMD ["npm", "run", "start"]
