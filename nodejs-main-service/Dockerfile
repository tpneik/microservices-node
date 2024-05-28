
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# ENV PORT_NODE_MONGODB=3001
# ENV PORT_NODE_MYSQL=3002
# ENV PORT_MAIN=3000

RUN npm ci --only=production  # Use ci for faster, more reliable builds

COPY . .

EXPOSE ${PORT_MAIN}

CMD [ "npm", "start" ]