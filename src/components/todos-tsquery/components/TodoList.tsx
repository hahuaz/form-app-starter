import { useIsFetching } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useTodoIds } from "../hooks";
import { CreateTodo } from "./CreateTodo";

import { Button } from "@/components/ui/button";

const GlobalIsFetching = () => {
  const isFetching = useIsFetching();

  return (
    <div>
      <p>Global isFetching count: {isFetching}</p>
    </div>
  );
};

export function TodoList() {
  const { data, isLoading, error, refetch } = useTodoIds();

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return (
    <div>
      <CreateTodo />
      <hr />
      <Button onClick={() => refetch()}>refetch again</Button>
      <GlobalIsFetching />
      <h1>todolist:</h1>
      {data.map((todoId) => (
        <div key={todoId}>
          <Link
            to={`/todos-tsquery/$todoId`}
            params={{
              todoId,
            }}
          >
            {todoId}
          </Link>
        </div>
      ))}
    </div>
  );
}
