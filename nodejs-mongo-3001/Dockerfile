
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# ENV PORT_NODE_MONGODB=3001
# ENV PORT_NODE_MYSQL=3002
# ENV MONGO_HOST=mongodb
# ENV MONGO_PORT=27017
# ENV MONGO_USERNAME=root
# ENV MONGO_PASSWORD=example
# ENV MONGO_DATABASE=mydata
# ENV MONGO_SOURCE=admin

RUN npm ci --only=production  # Use ci for faster, more reliable builds

COPY . .

EXPOSE ${PORT_NODE_MONGODB}

CMD [ "npm", "start" ]