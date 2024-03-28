import { useTodosId } from "../../hooks";
import { CreateTodo } from ".";

import { Link } from "react-router-dom";

export function TodoList() {
  const { data, isLoading, error, refetch } = useTodosId();
  console.log(data);

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return (
    <div>
      <CreateTodo />
      <hr />
      <button onClick={() => refetch()}>Manual Refetch</button>
      {data.map((todoId) => (
        <div key={todoId}>
          <Link to={`/todos/${todoId}`}>{todoId}</Link>
        </div>
      ))}
    </div>
  );
}
