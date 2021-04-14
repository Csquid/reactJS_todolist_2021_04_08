import { util } from 'js/modules';

function setCreate(addedTodoLsOBJ) {
  localStorage.setItem(util.TodoLS, JSON.stringify(addedTodoLsOBJ));
  // read.getTodoListElement
}
function todos(todoText) { // 만약 Local Storage todolist 가 비었을 경우
  if (!util.hasLsTodos()) {
    const tempTodoList = {
      id: 1,
      text: todoText,
      check: false,
    };

    const todoObjectBeAdd = {
      todolistLastIDX: 1,
      todolist: [tempTodoList],
    };

    setCreate(todoObjectBeAdd);
    return todoObjectBeAdd;
  }

  return null;
}

export default todos;
