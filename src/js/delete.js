import { create, util } from 'js/modules';

export const dummy = true;

export function todos(idx) {
  const tempTodoListDatas = util.clone(util.loadLocalStorageTodoList());
  const tempIDX = util.getListIDX(tempTodoListDatas.todolist, idx);

  // eslint-disable-next-line no-unused-vars
  const remove = tempTodoListDatas.todolist.splice(tempIDX, 1);

  console.log('tempTodoListDatas', tempTodoListDatas);
  console.log('remove', remove);
  create.setLocalStorage(tempTodoListDatas);

  return tempTodoListDatas;
}
