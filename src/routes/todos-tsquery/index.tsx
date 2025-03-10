import { createFileRoute } from "@tanstack/react-router";

import { TodoList } from "@/components/todos-tsquery";

export const Route = createFileRoute("/todos-tsquery/")({
  component: Index,
});

function Index() {
  return <TodoList />;
}
