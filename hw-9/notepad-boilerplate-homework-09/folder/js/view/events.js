const refs = {
    addNewNote: document.querySelector('.note-editor'),
    newNoteInput: document.querySelector('.note-editor > input'),
    noteFilter: document.querySelector('.search-form__input'),
    list: document.querySelector('.note-list'),
}

const newListItem = (listRef, savedNote) => {
    const addNewListItem = createListItem(savedNote);
    listRef.appendChild(addNewListItem);
}

const handleNoteEditorSubmit = event => {
    event.preventDefault();

    const [input, textarea] = event.target.elements;
    const inputValue = input.value;
    const textareaValue = textarea.value;

    if (textareaValue === '' || inputValue === '') {
        return alert('Заполните все поля!')
    }

    const savedNote = notepad.saveNote(inputValue, textareaValue);

    newListItem(refs.list, savedNote);

    event.currentTarget.reset();
}

const handleFilterChange = event => {
    const filteredNotes = notepad.filterNotesByQuery(event.target.value);
    console.log(filteredNotes);

    renderNoteList(listRef, filteredNotes);
}

const handleListClick = ({target}) => {
    
    if(target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action;

    switch(action) {
        case NOTE_ACTIONS.DELETE: 
        const parentListItem = target.closest('.note-list__item');
        const id = parentListItem.dataset.id;
        notepad.deleteNote(id);
        parentListItem.remove();
        break;

        default:
            console.log('its not a delete-button!');
    }
    
}

refs.addNewNote.addEventListener('submit', handleNoteEditorSubmit);
refs.noteFilter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);