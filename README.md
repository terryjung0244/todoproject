# Todo Project

질문

1. action에서 return {}, ()의 차이
2. <input
    type="checkbox"
    value={todo.id}
    checked={true}
    onChange={selectedIdCheckBox}
   />
3. Reducer에 selectedIdList을 따로 만든 이유?
4. draft.selectedIdList.splice(indexResult, 1); splice(start, deleteCount)인데 start자리에 왜 indexResult -1이 들어가야하는지 모르겠다.

질문

1.  createTodoAction({
    ...inputCreateTodo,
    id: getNanoid(),
    isDone: false,
    })
    여기에서, isDone: false을 왜 만들었는지 모르겠다.

질문

1. {something && <></>} or {something ? true : false} 차이
