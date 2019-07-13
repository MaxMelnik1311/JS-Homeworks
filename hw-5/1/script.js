const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const note = {
  id: '',
  title: '',
  body: '',
  priority: Priority.LOW,
};

const notepad = {
    notes = [],
    getNotes() {
        return this.notes;
    },

    saveNote(note) {
        this.notes.push(note);
        return this;
    },

    findNoteById(id) {
        return this.notes.find(e => e.id === id);
    },

    deleteNote(id) {
        for (let i = 0; i < this.notes.length; i+= 1) {
           if (arr[i].id === id) {
               this.notes.splice(i, 1);
               break;
           }
        }
    }, 

    updateNoteContent(id, updatedContent) {
        Object.assign(this.findNoteById(id), updatedContent);
    },

    updateNotePriority(id, priority) {
        this.findNoteById(id).priority = priority;
    },

    filterNotesByPriority(priority) {
        return this.notes.filter(e => e.priority === priority);
    },

    filterNotesByQuery(query) {
        this.notes.filter( e => e.body.includes(query) || e => e.title.includes(query));
    },
};


