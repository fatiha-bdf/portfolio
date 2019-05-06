const express = require('express')
const app = express()
const members = require('./routes/api/members/members')
const parser = require('body-parser')
// const logger = require('./middleware/logger')
const neo4j = require('neo4j-driver').v1
 
//init middlware 
app.use(parser.json())

var driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'matcha'));
var session = driver.session();

app.get('/', (req, res) => { 
    session
        .run('MATCH (n) RETURN n LIMIT 25')
          .then((result) => {
            result.records.forEach((record) => {
                console.log(record._fields[0].properties);})
        })
        .catch((err) => {console.log(err);})
        res.send('it works')
})

app.post('/person/add', (req, res) => {
    console.log(req);
    res.send('weeeeeech')
    var name = req.body.name;
    var age = req.body.age;

    session
        .run('CREATE (n:person {name:{nameparam}, age:{ageparam}}) RETURN n.name', {nameparap:name, ageparam:age})
        .then((result) => {
            res.redirect('/')
            session.close()
        })
        .catch((err) => {console.log(err);})        
})

// chemin de routage respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hello World')
})

//construction function inside a class (object oriented programming with is5)
class person {
    constructor(id, name, dob, email, status) {
        this.id = id;
        this.name = name;
        this.dob = new Date(dob);
        this.email = email;
        this.status = status;
        this.Birthyear = () => {return this.dob.getFullYear();}
        this.namestatus = () => {return `${name} ${this.status}`}
}
}

// person.prototype.Birthyear = () => {return this.dob.getFullYear()} ????not working
// person.prototype.namestatus = () => {return `${name} ${status}`}

//insantiate object
const person3 = new person('3', 'fatiha boudyaf', '08-28-1993', 'bdf@gmail.com', 'active');
// console.log(person3.Birthyear());
console.log(person3.namestatus());



members.forEach(toto => console.log(toto))
const totos = members.filter(toto => {return toto.id === 1}).map(toto => {return toto.email})
console.log(totos);

//get members
app.get('/api/members', (req, res) => res.json(members))

// get single member based on prameter put on bar de navigation http://localhost:5000/api/members/1
//filter filter out an array based on a condition 
app.get('/api/members/:id', (req, res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id));
//some retuns true or false if condition following is true or false
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}` })
    }

// filter the member whose id is equal to id put in parameters and print this id
// need to parseInt(req.params.id) cz req.params.id is read as a string ans member.id is an int
})

// Middleware
app.use(express.json())

// create route 
// app.use('/api/members', require('./routes/api/members/members'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))