// import {PRIORITY_TYPES} from './constants';

export default class Notepad {
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
          // priority: PRIORITY_TYPES.LOW,
        };
    
        this._notes.push(newNote);
        return newNote;
    }
    
    deleteNote(id) {
        this._notes = this._notes.filter(e => e.id !== id);
        
        return this._notes;
    }
}
  