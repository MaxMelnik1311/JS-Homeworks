import {createElem, createButton, createListItem} from './createListItem';
export default function renderNoteList(listRef, notes) {
    listRef.innerHTML = '';
    listRef.append(...notes.map(e => createListItem(e)));
}