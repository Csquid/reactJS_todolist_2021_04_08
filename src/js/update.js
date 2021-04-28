import { create, util } from 'js/modules';

// eslint-disable-next-line import/prefer-default-export
export function todos(idx) {
  const tempTodoListDatas = util.clone(util.loadLocalStorageTodoList());
  const tempIDX = util.getListIDX(tempTodoListDatas.todolist, idx);

  if (tempTodoListDatas.todolist[tempIDX].check) {
    tempTodoListDatas.todolist[tempIDX].check = false;
  } else {
    tempTodoListDatas.todolist[tempIDX].check = true;
  }

  create.setLocalStorage(tempTodoListDatas);
  return tempTodoListDatas;
}
