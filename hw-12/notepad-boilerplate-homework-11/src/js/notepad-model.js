import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from './utils/constants';
const shortid = require('shortid');
export default class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  saveLocale() {
    try {
      localStorage.setItem('notes', JSON.stringify(this._notes));
    } catch (error) {
      console.log(error);
    }
  }
  
  get notes() {
    return this._notes;
  }
  findNoteById(id) {
    return this._notes.find(item => item.id === id);
  }

  saveNote(titleText, areaText) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newNote = {
          id: shortid.generate(),
          title: titleText,
          body: areaText,
          priority: PRIORITY_TYPES.LOW,
        }
        this._notes.push(newNote);
        this.saveLocale();
        // return newNote;
        resolve(newNote);
      }, 500);
    })
  }

  deleteNote(id) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        this._notes = this._notes.filter(e => e.id !== id);
        this.saveLocale();
        resolve(this._notes);
      }, 500);
    });
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
