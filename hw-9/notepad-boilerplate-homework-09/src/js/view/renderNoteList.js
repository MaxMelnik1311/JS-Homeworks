function renderNoteList(listRef, notes) {
    // const elem = listRef.cloneNode(false);
    // elem.append(...notes.map(e => createListItem(e)));
    // listRef.replaceWith(elem);
    listRef.innerHTML = '';
    listRef.append(...notes.map(e => createListItem(e)));
}