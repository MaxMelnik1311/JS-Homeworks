class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  static get Priority() {
    return {
        LOW: 0,
        NORMAL: 1,
        HIGH: 2
      };
  }
}

const note = {
  id: '',
  title: '',
  body: '',
  priority: Notepad.Priority.LOW,
};


Notepad.prototype.filterNotesByQuery = function (query) {
  this.notes.filter(e => e.body.includes(query) || e.title.includes(query));
};
Notepad.prototype.saveNote = function (note) {
  this.notes.push(note);
  return note;
};
Notepad.prototype.findNoteById = function (id) {
  return this.notes.find(e => e.id === id);
};
Notepad.prototype.deleteNote = function (id) {
  this.notes.splice(this.notes.findIndex(e => e.id === id), 1);
};
Notepad.prototype.updateNoteContent = function (id, updatedContent) {
  Object.assign(this.findNoteById(id), updatedContent);
};
Notepad.prototype.updateNotePriority = function (id, priority) {
  this.findNoteById(id).priority = priority;
};
Notepad.prototype.filterNotesByPriority = function (priority) {
  return this.notes.filter(e => e.priority === priority);
};

const initialNotes = [
    {
      id: 'id-1',
      title: 'JavaScript essentials',
      body:
        'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
      priority: Notepad.Priority.HIGH,
    },
    {
      id: 'id-2',
      title: 'Refresh HTML and CSS',
      body:
        'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
      priority: Notepad.Priority.NORMAL,
    },
  ];
  
  const notepad = new Notepad(initialNotes);
  
  /*
    Смотрю что у меня в заметках после инициализации
  */
  console.log('Все текущие заметки: ', notepad.notes);
