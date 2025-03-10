import { createFileRoute } from "@tanstack/react-router";

import { Todos } from "@/components/counter-and-todos-redux";

export const Route = createFileRoute("/redux-todos")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Todos />;
}
