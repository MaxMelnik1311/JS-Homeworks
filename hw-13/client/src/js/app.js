import Micromodal from 'micromodal';
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';
import template from './template.hbs';
import Notepad from './notepad-model';
import {PRIORITY_TYPES, NOTIFICATION_MESSAGES, NOTE_ACTIONS} from './utils/constants';
// import initialNotes from '../assets/notes.json';
const refs = {
    noteList: document.querySelector('.note-list'),
    addNewNote: document.querySelector('.note-editor'),
    openEditorModalBtn: document.querySelector('button[data-action="open-editor"]'),
}

// const init = local ? local : initialNotes;

const notepad = new Notepad();
const notyf = new Notyf();

const getMarkup = () => {
    notepad.get().then(notes => {
    const markup = notes.map(note => template(note)).join('');
    return markup;
})
}

// const createNotesListMarkup = init => {
//     const markup = init.map(note => template(note)).join('');
//     return markup;
// }

// const markup = createNotesListMarkup(init);

const handleNoteEditorSubmit = event => {
    event.preventDefault();

    const [input, textarea] = event.target.elements;
    const inputValue = input.value;
    const textareaValue = textarea.value;

    if (textareaValue === '' || inputValue === '') {
        return notyf.error('Заполните все поля!')
    }

    const newListItem = (noteList, savedNote) => {
    const addNewListItem = template(savedNote);
    const markupUpdate = noteList.insertAdjacentHTML('beforeend', addNewListItem);
    notyf.success('Новая заметка успешно добавлена!');
    return markupUpdate;
    }

    notepad.saveNote({title: inputValue, body: textareaValue})
    .then( data => newListItem(refs.noteList, data))
    .catch(error => notyf.error('Ошибка при добавлении заметки'));

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
        .then(() => notyf.error('Заметка удалена!'))
        .catch(error => notyf.error('Ошибка при удалении заметки!'));
    }
}


refs.noteList.insertAdjacentHTML('beforeend', getMarkup);
refs.addNewNote.addEventListener('submit', handleNoteEditorSubmit);
refs.openEditorModalBtn.addEventListener('click', handleOpenEditor);
refs.noteList.addEventListener('click', removeListItem);