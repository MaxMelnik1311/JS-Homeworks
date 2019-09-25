import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from './utils/constants';
import {getPosts, savePost, deletePost} from './api';


// export default class Notepad {
//   constructor(notes) {
//     this._notes = notes;
//   }
  
//   get() {
//     return getPosts().then(notes => {
//       this.items = notes,
//       return this.items,
//     }
//   }

//   findNoteById(id) {
//     return this._notes.find(item => item.id === id);
//   }

//   saveNote(titleText, areaText) {
//     const newNote = {
//       title: titleText,
//       body: areaText,
//       priority: PRIORITY_TYPES.LOW,
//     },

//     savePost(newNote).then(newNote => {
//       this._notes.push(newNote);
//       console.log(this._notes);
//     }),  

//     return newNote;
//   }

//   deleteNote(id) {
//     return deletePost(id).then(() => {
//       this._notes = this._notes.filter(e => e.id !== id);
//     })
//   }












//   // -----------------------------------------
//   updateNoteContent(id, updatedContent) {
//     const note = this.findNoteById(id);
//     if (!note) return;
//     return Object.assign(note, updatedContent);
//   }
//   filterNotesByQuery(query) {
//     return this._notes.filter(
//       ({ title, body }) =>
//         title.toLowerCase().includes(query.toLowerCase()) ||
//         body.toLowerCase().includes(query.toLowerCase())
//     );
//   }
//   filterNotesByPriority(priority) {
//     return this._notes.filter(e => e.priority === priority);
//   }
// }
