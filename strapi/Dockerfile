FROM node:20.10.0-alpine

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]

