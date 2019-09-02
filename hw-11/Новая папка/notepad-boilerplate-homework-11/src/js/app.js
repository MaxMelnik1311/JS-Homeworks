import template from './template.hbs';
import initialNotes from '../assets/notes.json';

const refs = {
    noteList: document.querySelector('.note-list')
}

const createNotesListMarkup = initialNotes => {
    const markup = initialNotes.map(note => template(note)).join('');
    return markup;
}

const markup = createNotesListMarkup(initialNotes);

refs.noteList.insertAdjacentHTML('beforeend', markup);
