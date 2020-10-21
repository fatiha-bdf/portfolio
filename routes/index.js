const express = require('express');
const Router = express.Router();
const db = require('../db')

//init middleware
Router.use(express.json({ extended : false }))

Router.get('/', (req, res) => {
	db.execute('SELECT * FROM users') // this is an I/O async operation
	.then(res=> {
		console.log(res[0])
	})
	.catch(err => {
		console.log(err)
	})
	res.send('welcome to matcha')
})

module.exports = Router
