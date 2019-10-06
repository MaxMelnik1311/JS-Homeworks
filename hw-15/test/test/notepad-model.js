const PRIORITY_TYPES = require('./constants');
const { getNotes, savePost, deletePost }  = require('./api');


class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  saveNote(titleText, areaText) {
    const newNote = {
      title: titleText,
      body: areaText,
      priority: PRIORITY_TYPES.LOW,
    };

    return savePost(newNote).then(newNote => {
      this._notes.push(newNote);
      return newNote;
    }); 
  }

  deleteNote(id) {
    return deletePost(id).then(() => {
      this._notes = this._notes.filter(note => note.id !== id);
    })
  }
}

module.exports = Notepad;

