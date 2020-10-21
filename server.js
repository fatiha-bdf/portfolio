let express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
let app = express();
var cors = require('cors')

app.use(cors())

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/portfolio', require('./routes'));
app.use('/portfolio/sendForm', require('./routes/sendForm'));

let port = process.env.PORT ||'8081'
app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
