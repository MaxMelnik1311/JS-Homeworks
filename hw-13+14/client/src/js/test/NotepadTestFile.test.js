const Notepad = required('./notepadNotAsync');
const initialNotes = required('./db');

//  ==================== save ========================  //
test(' saveNote ', () => {
  const notepad = new Notepad(initialNotes);

  notepad.saveNote('newNoteTitle', 'newNoteBody');

  expect(notepad._notes[3].title).toBe('newNoteTitle');
});

// //  ===================== delete =======================  //
// test(' deleteNote ', () => {
//   const notepad = new Notepad(initialNotes);

//   notepad.deleteNote('id-5');

//   expect(notepad._notes[4].body).toBe('newNoteBody');
// });