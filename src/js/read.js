export function getListElement(datas, props) {
  console.log(props);
  const todosArray = [];
  
  for(let i = 0; i < datas.length; i++) {
    todosArray.push (getTodoListElement(datas[i]));
  }

  return todosArray;
}

export function getTodoListElement(todoOBJ) {
  let checkStr = 'todo-text';
  let deleteDisplay = '';
  if(todoOBJ.check) {
    checkStr += ' check';
    deleteDisplay = 'inline-block';
  }
  return (
    <div key={todoOBJ.id} className="item-container" data-id={todoOBJ.id}>
      <input className="todo-checkbox" type="checkbox" defaultChecked={todoOBJ.check}/>
      <input className={checkStr} type="text" defaultValue={todoOBJ.text} readOnly/>
      <span className="todo-update"> 
        <i className="fas fa-pen-fancy"></i> 
      </span>
      <span className="todo-delete" style={{display: deleteDisplay}}>
        <i className="far fa-trash-alt"></i>
      </span>
    </div>
  );
}