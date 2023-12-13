const express = require('express');
const { addNote, deleteNote, getNote } = require('../controller/note');

const router = express.Router();


router.post('/create', addNote);
router.get('/get',getNote)
router.delete('/delete/:id',deleteNote)

module.exports = router;