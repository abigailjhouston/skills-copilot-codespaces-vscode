//Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//Set up database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {useNewUrlParser: true, useUnifiedTopology: true});

//Set up schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

//Set up model
const Comment = mongoose.model('Comment', commentSchema);


//Set up body parser
app.use(bodyParser.urlencoded({extended: true}));

//Set up static files
app.use(express.static(path.join(__dirname, 'public')));

//Set up ejs
app.set('view engine', 'ejs');

//Set up routes
app.get('/', (req, res) => {
    res.render('index');
}
);

app.get('/comments', (req, res) => {



    Comment.find({}, (err, comments) => {
        if(err){
            console.log(err);
        } else {
            res.render('comments', {comments: comments});
        }
    });
}
);

app.post('/comments', (req, res) => {



    Comment.create(req.body.comment, (err, newComment) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/comments');
        }
    });
}
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);












