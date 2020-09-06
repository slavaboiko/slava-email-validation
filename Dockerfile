FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
RUN npm install tldjs --tldjs-update-rules

# Bundle app source
COPY . .

CMD [ "node", "dist/server.js" ]