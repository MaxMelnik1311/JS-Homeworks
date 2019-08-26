import Notepad from './notepad-model';
import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from './utils/constants';
import {createElem, createButton, createListItem} from './view/createListItem';
import renderNoteList from './view/renderNoteList';
const listRef = document.querySelector('.note-list');
const initialNotes = require('./notes');
const notepad = new Notepad(initialNotes);
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
    renderNoteList(listRef, filteredNotes);

    console.log(filteredNotes);
}

const removeListItem = event => {
    
    if (event.target.textContent === ICON_TYPES.DELETE) {
        const parentListItem = event.target.closest('.note-list__item');
        const id = parentListItem.dataset.id;
        notepad.deleteNote(id);
        parentListItem.remove();
    }
}

refs.addNewNote.addEventListener('submit', handleNoteEditorSubmit);
refs.noteFilter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', removeListItem);