FROM node:alpine

WORKDIR /usr/src

COPY ./package.json ./


#install client
RUN npm install

RUN npm run-script build

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000