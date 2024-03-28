import { useTodo } from "../../hooks";

import { useParams } from "react-router-dom";

import { TodoDetailForm } from ".";

export function TodoDetail() {
  const { todoId } = useParams<{ todoId: string }>();
  const { data } = useTodo(Number(todoId));

  return (
    <div>
      <h1>Todo Detail</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* even though, TodoDetailForm is seperate component and calls useTodo seperately, there is no additional network request because of the query cache */}
      <TodoDetailForm />
    </div>
  );
}
