import { util } from 'js/modules';

function setCreate(addedTodoLsOBJ) {
  localStorage.setItem(util.TodoLS, JSON.stringify(addedTodoLsOBJ));
  // read.getTodoListElement
}
export function todos(todoText) { // 만약 Local Storage todolist 가 비었을 경우
  if (!util.hasLsTodos()) {
    const tempTodoList = {
      id: 1,
      text: todoText,
      check: false,
    };

    const todoLSBeAdd = {
      todolistLastIDX: 1,
      todolist: [tempTodoList],
    };

    setCreate(todoLSBeAdd);
    return todoLSBeAdd;
  }

  const tempTodoListDatas = util.clone(util.loadLocalStorageTodoList());
  const addedTodoLastIDX = tempTodoListDatas.todolistLastIDX + 1;
  const todoLSBeAdd = {
    id: addedTodoLastIDX,
    text: todoText,
    check: false,
  };

  tempTodoListDatas.todolistLastIDX = addedTodoLastIDX;
  tempTodoListDatas.todolist.push(todoLSBeAdd);

  setCreate(tempTodoListDatas);
  return null;
}

export default todos;
