require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
require('./passport')(passport);
const cors = require('cors');
const mongoose = require('mongoose');


const PORT = 4000;

let Note = require('./note.model');
const noteRoutes = express.Router();

mongoose.connect('mongodb://localhost:27017/Notes', { dbName: "notes", useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
});

// GET request for all notes
noteRoutes.get("/Notes", async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

// Find note by id
noteRoutes.get("/Notes/:id", async (req,res) => {
    try{
        const note = await Note.findOne({_id: req.params.id});
        res.send(note);
    } catch {
        res.status(404).send("Note not found");
    }
});

// Create new note in database
noteRoutes.post("/Notes", async (req, res) => {
    const note = new Note(req.body);
    console.log("Saving note (in post body)...");
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

app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use("/",noteRoutes);

app.post("/auth/google", function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(302).json({ redirectUrl: "/register" });
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        //If Successful
        return res.status(302).json({ redirectUrl: "/" });
      });
    })(req, res, next);
  });
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});