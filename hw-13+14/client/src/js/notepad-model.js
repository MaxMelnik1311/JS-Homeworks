import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from './utils/constants';
import * as api from './api';


export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get() {
    return api.getNotes()
      .then(notes => {
      this._notes = notes;
      return this._notes;
    });
  }

  saveNote(titleText, areaText) {
    const newNote = {
      title: titleText,
      body: areaText,
      priority: PRIORITY_TYPES.LOW,
    };

    return api.savePost(newNote).then(newNote => {
      this._notes.push(newNote);
      return newNote;
    }); 
  }

  deleteNote(id) {
    return api.deletePost(id).then(() => {
      this._notes = this._notes.filter(note => note.id !== id);
    })
  }








// -----------------------------------------

  findNoteById(id) {
    return this._notes.find(item => item.id === id);
  }


  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    return Object.assign(note, updatedContent);
  }
  filterNotesByQuery(query) {
    return this._notes.filter(
      ({ title, body }) =>
        title.toLowerCase().includes(query.toLowerCase()) ||
        body.toLowerCase().includes(query.toLowerCase())
    );
  }
  filterNotesByPriority(priority) {
    return this._notes.filter(e => e.priority === priority);
  }
}
