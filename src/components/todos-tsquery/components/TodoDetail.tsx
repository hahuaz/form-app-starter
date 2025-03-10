import { getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/todos-tsquery/$todoId");

import { useTodo } from "../hooks";

import { TodoDetailForm } from "./TodoDetailForm";

export function TodoDetail() {
  const { todoId } = route.useParams();

  const { data } = useTodo(todoId);

  return (
    <div>
      <h1>todo as json</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* even though, TodoDetailForm is seperate component and calls useTodo seperately, there is no additional network request because of the query cache. you can check network requests. */}
      <TodoDetailForm />
    </div>
  );
}
