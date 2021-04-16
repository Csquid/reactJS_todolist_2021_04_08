export function getTodoListElement(todoOBJ, deleteListFunc) {
  let checkStr = 'todo-text';
  let deleteDisplay = '';

  if (todoOBJ.check) {
    checkStr += ' check';
    deleteDisplay = 'inline-block';
  }

  return (
    <div key={todoOBJ.id} className="item-container" data-id={todoOBJ.id}>
      <input className="todo-checkbox" type="checkbox" defaultChecked={todoOBJ.check} />
      <input className={checkStr} type="text" defaultValue={todoOBJ.text} readOnly />
      <span className="todo-update">
        <i className="fas fa-pen-fancy" />
      </span>
      <span
        className="todo-delete"
        style={{ display: deleteDisplay }}
        onClick={(e) => {
          console.log(e.target);
          console.log(deleteListFunc);
          // deleteListFunc(1);

          // eslint-disable-next-line no-debugger
          debugger;
        }}
        onKeyDown={() => {}}
        role="button"
        tabIndex="0"
      >
        <i className="far fa-trash-alt" />
      </span>
    </div>
  );
}
export function getListElement(datas) {
  if (datas === null) {
    return null;
  }

  const todosArray = [];

  for (let i = 0; i < datas.todolist.length; i += 1) {
    todosArray.push(getTodoListElement(datas.todolist[i]));
  }

  return todosArray;
}
