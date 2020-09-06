FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm install tldjs --tldjs-update-rules
RUN npm run build

CMD [ "node", "dist/server.js" ]