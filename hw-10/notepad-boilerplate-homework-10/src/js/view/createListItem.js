import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from '../utils/constants';
export function createElem(tag, className, text = null, id = null) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e))
  if (id) {
    element.setAttribute('data-id', id);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

export function createButton(action, text) {
  const button = createElem('button', 'action');
  button.setAttribute('data-action', action,);
  const i = createElem('i', 'material-icons action__icon', text);
  button.append(i)
  return button;
}

export function createListItem({id, title, body, priority}) {
  const li = createElem('li','note-list__item', null, id);
  const note = createElem('div','note');
  li.append(note);
  const noteContent = createElem('div','note__content');
  noteContent.append(createElem('h2','note__title', title));
  noteContent.append(createElem('p','note__body', body));
  note.append(noteContent);
  const noteFooter = createElem('footer','note__footer');
  const noteSectionL = createElem('section','note__section');
  const noteSectionR = createElem('section','note__section');

  noteSectionL.append(createButton(
    NOTE_ACTIONS.DECREASE_PRIORITY,
    ICON_TYPES.ARROW_DOWN
    )
  );
  noteSectionL.append(createButton(
    NOTE_ACTIONS.INCREASE_PRIORITY,
    ICON_TYPES.ARROW_UP
    )
  );
  noteSectionL.append(createElem(
    'span',
    'note__priority',
    `Priority: ${priority}`
    )
  );
  noteSectionR.append(createButton(
    NOTE_ACTIONS.EDIT,
    ICON_TYPES.EDIT
    )
  );
  noteSectionR.append(createButton(
    NOTE_ACTIONS.DELETE,
    ICON_TYPES.DELETE
    )
  );

  noteFooter.append(noteSectionL);
  noteFooter.append(noteSectionR);
  note.append(noteFooter);
  return li;
}
