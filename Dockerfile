
FROM node:20

WORKDIR /client

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=

EXPOSE 

CMD [ "npm", "run", "dev" ]

