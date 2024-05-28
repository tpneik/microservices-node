require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port_main = process.env.PORT_MAIN
const port_nodemongodb = process.env.PORT_NODE_MONGODB
const host_nodemongodb=process.env.HOST_NODE_MONGODB
const port_nodemysql = process.env.PORT_NODE_MYSQL
const host_nodemysql = process.env.HOST_NODE_MYSQL
const app = express();


// Route to Service 1 (localhost:3001)
app.use('/svc1', createProxyMiddleware(
	{ 
		target: `http://${host_nodemongodb}:${port_nodemongodb}/`, 
		changeOrigin: true 
	}
));
console.log('\x1b[36m%s\x1b[0m', `link------http://${host_nodemongodb}:${port_nodemongodb}/`)
// Route to Service 2 (localhost:3002)
app.use('/svc2', createProxyMiddleware({ target: `http://${host_nodemysql}:${port_nodemysql}/`, changeOrigin: true }));
//proxy("/api/", { target: "http://localhost:6000" })
// app.use(createProxyMiddleware ('/svc1/',{ target: `http://localhost:${port_nodemongodb}/`}));

// // Route to Service 2 (localhost:3002)
// app.use(createProxyMiddleware ('/svc1/',{ target: `http://localhost:${port_nodemysql}/`}));

app.get('/', (req, res) => {
	console.log('\x1b[36m%s\x1b[0m', 'Main server START!')
	res.send('[3000] Main server START!')
})
app.listen(port_main, () => {
	console.log('\x1b[32m%s\x1b[0m', `API Gateway listening on port ${port_main}\nWith svc1,svc2 [${port_nodemongodb},${port_nodemysql}]`);
});