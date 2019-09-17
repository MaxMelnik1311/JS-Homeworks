import Micromodal from 'micromodal';
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';
import template from './template.hbs';
import initialNotes from '../assets/notes.json';
import Notepad from './notepad-model';
import {PRIORITY_TYPES, NOTIFICATION_MESSAGES, NOTE_ACTIONS} from './utils/constants';

const local = JSON.parse(localStorage.getItem('notes'));
const init = local ? local : initialNotes;
const notepad = new Notepad(init);


const notyf = new Notyf();

const refs = {
    noteList: document.querySelector('.note-list'),
    addNewNote: document.querySelector('.note-editor'),
    openEditorModalBtn: document.querySelector('button[data-action="open-editor"]'),
}

const createNotesListMarkup = initialNotes => {
    const markup = initialNotes.map(note => template(note)).join('');
    return markup;
}

const markup = createNotesListMarkup(init);

const newListItem = (noteList, savedNote) => {
    const addNewListItem = template(savedNote);
    const markupUpdate = noteList.insertAdjacentHTML('beforeend', addNewListItem);
    notyf.success('Новая заметка успешно добавлена!');
    return markupUpdate;
}

const handleNoteEditorSubmit = event => {
    event.preventDefault();

    const [input, textarea] = event.target.elements;
    const inputValue = input.value;
    const textareaValue = textarea.value;

    if (textareaValue === '' || inputValue === '') {
        return notyf.error('Заполните все поля!')
    }

    notepad.saveNote(inputValue, textareaValue)
    .then( data => newListItem(refs.noteList, data))
    .then(() => notepad.saveLocale());

    Micromodal.close('modal-1');

    event.currentTarget.reset();
}

const handleOpenEditor = () => {
    Micromodal.show('modal-1');
}

const removeListItem = event => {
    
    if (event.target.textContent == 'delete') {
        const parentListItem = event.target.closest('.note-list__item');
        const id = parentListItem.dataset.id;
        notepad.deleteNote(id)
        .then(() => parentListItem.remove())
        .then(() => notepad.removeLocale())
        .then(() => notyf.error('Заметка удалена!'));
    }
}


refs.noteList.insertAdjacentHTML('beforeend', markup);
refs.addNewNote.addEventListener('submit', handleNoteEditorSubmit);
refs.openEditorModalBtn.addEventListener('click', handleOpenEditor);
refs.noteList.addEventListener('click', removeListItem);