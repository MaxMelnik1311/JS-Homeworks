class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  static generateUniqueId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

  get notes() {
    return this._notes;
  }
  findNoteById(id) {
    return this._notes.find(item => item.id === id);
  }

  saveNote(titleText, areaText) {
    const newNote = {
      id: Notepad.generateUniqueId(),
      title: titleText,
      body: areaText,
      priority: PRIORITY_TYPES.LOW,
    };

    this._notes.push(newNote);
    return newNote;
  }

  deleteNote(id) {
    this._notes = this._notes.filter(e => e.id !== id);
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
