import { createFileRoute } from "@tanstack/react-router";

import { TodoDetail } from "@/components/todos-tsquery";

export const Route = createFileRoute("/todos-tsquery/$todoId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <TodoDetail />;
}
