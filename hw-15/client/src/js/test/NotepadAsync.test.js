const Notepad = require('./notepad-model');
// const saveNote = require('./notepad-model');
// const deleteNote = require('./notepad-model');


const notepad = new Notepad(); 
//  =================== save =========================  //
describe('save note', () => {
  beforeAll(() => {
    console.log('test save note start ');
  });

  test(' save note', () => {
    expect(
      notepad.saveNote('newNoteTitle', 'newNoteBody')
      .then(() => notepad._notes[5].title).resolves.toBe("newNoteTitle"));
  });

  afterAll(() => {
    getNotes().then(data => {
      if (data.length > 0) {
        const { id } = data[data.length - 1];
        delNotes(id);
      }
    });
  });
});
//  =================== delete =========================  //
describe('delete note', () => {
    beforeAll(() => {
      console.log('test delete note start ');
    });
    test(' delete note', () => {
      expect(
        notepad.deleteNote('id-5')
        .then(() => notepad._notes[4].body).resolves.toBe('newNoteBody'));
    });
    afterAll(() => { });
  });
