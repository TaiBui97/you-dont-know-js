// npm init
// npm install express --save
// npm install -g nodemon -> reload sever -> nodemon index.js
const express = require('express'); // import package
//tung module se export nhu vay:
const CalClass = require('./utils/Calcu');
//tung thanh phan se export nhu vay:
const { POSTS } = require('./utils/data');
const { GET_LIST_WITH_USER_ID, GET_INFO_POST_WITH_POST_ID } = require("./utils/handle-func");

const PORT = 3900;
const app = express();
app.get('/', (req, res) => {
    res.json({
        message: 'hello home'
    })
})
app.get('/hello-world', (req, res) => {
    res.json({
        message: 'hello world'
    })
})
app.get('/user/:username/:age', (req, res) => {
    //  const userName = req.params.username;
    // const userAge = req.params.age;
    //es6 destructor
    const { username, age } = req.params;
    console.log({ username, age })


})

app.get('/cal/:cal/:numA/:numB', (req, res) => {
        const { cal, numA, numB } = req.params;
        if (isNaN(numA) || isNaN(numB)) {
            res.json({ message: `not a number` });
        }
        let cal1 = new CalClass(cal, numA, numB);
        let resultCal = cal1._getResultCal();
        res.json({ resultCal })

    })
    //list post user
app.get('/posts', (req, res) => res.json({ POSTS }))

// get list with userID
app.get('/posts/:userId', (req, res) => {
    const { userId } = req.params;
    let postWithId = GET_LIST_WITH_USER_ID(POSTS, userId);
    res.json({ posts: postWithId })
})

app.get('/post/:postID', (req, res) => {
    const { postID } = req.params;
    let postWithId = GET_INFO_POST_WITH_POST_ID(POSTS, postID);
    res.json({ posts: postWithId })
})
app.listen(PORT, () => console.log(`sever started at port : ${PORT}`))