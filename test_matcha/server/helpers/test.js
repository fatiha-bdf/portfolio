module.exports = {
    sayHello: () => {
        console.log("hello");
    },   
    sayGoodBye: () => {
        console.log("goodbye");
    },
}

// module.exports = function (req, res) {
//     res.send('The views directory is ' + req.app.get('views'));
//   };