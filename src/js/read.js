// import { deleteF } from 'js/modules';
export const dummy = true;

export function getListElement(datas, funcOBJ) {
  if (datas === null) {
    return null;
  }

  const todosArray = [];
  for (let i = 0; i < datas.todolist.length; i += 1) {
    const todoOBJ = datas.todolist[i];
    let checkStr = 'todo-text';
    let deleteDisplay = '';

    if (todoOBJ.check) {
      checkStr += ' check';
      deleteDisplay = 'inline-block';
    }

    todosArray.push(
      <div key={todoOBJ.id} className="item-container" data-id={todoOBJ.id}>
        <input
          className="todo-checkbox"
          type="checkbox"
          defaultChecked={todoOBJ.check}
          onClick={() => {
            funcOBJ.update(todoOBJ.id);
          }}
        />
        <input className={checkStr} type="text" defaultValue={todoOBJ.text} readOnly />
        <span className="todo-update">
          <i className="fas fa-pen-fancy" />
        </span>
        <span
          className="todo-delete"
          style={{ display: deleteDisplay }}
          onClick={() => {
            funcOBJ.delete(todoOBJ.id);
          }}
          onKeyDown={() => {}}
          role="button"
          tabIndex="0"
        >
          <i className="far fa-trash-alt" />
        </span>
      </div>,
    );
  }

  return todosArray;
}
