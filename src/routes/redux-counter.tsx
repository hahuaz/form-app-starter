import { createFileRoute } from "@tanstack/react-router";

import { Counter } from "@/components/counter-and-todos-redux";

export const Route = createFileRoute("/redux-counter")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Counter />;
}
