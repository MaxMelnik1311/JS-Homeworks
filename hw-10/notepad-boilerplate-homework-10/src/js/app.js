import Notepad from './notepad-model';
import './events';
import renderNoteList from './view/renderNoteList';

const initialNotes = require('./notes');
const notepad = new Notepad(initialNotes);
const listRef = document.querySelector('.note-list');
renderNoteList(listRef, notepad.notes);
