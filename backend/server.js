require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = 4000;

let Note = require('./note.model');
const noteRoutes = express.Router();

mongoose.connect('mongodb://localhost:27017/Notes', { dbName: "notes", useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
});
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    //store: new FileStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
    useCredentials: true
}));
require('./passport.js')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.route('/auth/google').get( async (req, res, next) => {
    passport.authenticate('google', {scope: ['profile']})(req, res, next);
});
app.get('/logout', (req, res, next) => {
    req.logout(function(err){
        if(err){
            console.log(err);
        }
        console.log("Logged out");
    });
});


// app.use(function(req, res, next) {
//     console.log('handling request for: ' + req.url);
//     next();
//   });
// GET request for all notes
noteRoutes.get("/Notes/loggedin", async (req, res) => {
    if(req.user){
        console.log("Logged in: \n" + req.user);
        const notes = await Note.find({note_owner: req.user.id});
        res.send(notes);
    } else {
        console.log("User is not logged in");
    }
});
app.get('/auth/google/callback', passport.authenticate('google', ({ failureRedirect: '/Notes' }, { successRedirect: 'http://localhost:3000/Notes/loggedin' })));

// Find note by id
noteRoutes.get("/Notes/:id", async (req,res) => {
    try{
        const note = await Note.findOne({note_owner: req.user.id});
        res.send(note);
    } catch {
        res.status(404).send("Note not found");
    }
});

// Create new note in database
noteRoutes.post("/Notes", async (req, res) => {
    let note = new Note(req.body);
    note.note_owner = req.user.id;
    try{
        await note.save()
        res.send(note);
    } catch (error){
        console.log(error);
        res.status(400).send(error);
    }
});

// Update note by id
noteRoutes.patch("/Notes/:id", async (req, res) => {
    try{
        const note = await Note.findOne({_id: req.params.id});
        if(req.body.note_title != null){
            note.note_title = req.body.note_title;
        }
        if(req.body.note_content != null){
            note.note_content = req.body.note_content;
        }
        if(req.body.note_date != null){
            note.note_date = new Date();
        }
        if(req.body.note_tags != null){
            note.note_tags = req.body.note_tags;
        }

        await note.save();
        res.send(note);
    } catch {
        res.status(404).send("Note not found");
    }
});

// Delete note by id
noteRoutes.delete("/Notes/:id", async (req, res) => {
    try{
        const note = await Note.findOne({_id: req.params.id});
        await note.remove();
        res.send(note);
    } catch {
        res.status(404).send("Note not found");
    }
});

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use("/",noteRoutes);
app.use('/loggedin', async (req, res) => {
    res.send(req.user);
});
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
    //console.log(app._router.stack);
});
