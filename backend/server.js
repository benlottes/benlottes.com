const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const cors = require('cors');

let Note = require('./note.model');

const mongoose = require('mongoose');
const noteRoutes = express.Router();
const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Notes', { dbName: "notes", useNewUrlParser: true });
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

app.use("/",noteRoutes);
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});