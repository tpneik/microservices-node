
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# ENV PORT_NODE_MYSQL=3002
# ENV PORT_NODE_MONGODB=3001
# ENV MYSQL_USERNAME=mysqldata
# ENV MYSQL_PASSWORD=mysqlpasswd
# ENV MYSQL_DATABASE=credential_and_orderservice
# v1 // docker run --rm --name node_mysql -p 3002:3002 --network host node_mysql:v1
# Success
# ENV MYSQL_HOST=172.18.0.2

# v2
# Fail
# ENV MYSQL_HOST=localhost:3456

RUN npm ci --only=production  # Use ci for faster, more reliable builds

COPY . .

EXPOSE ${PORT_NODE_MYSQL}

CMD [ "npm", "start" ]