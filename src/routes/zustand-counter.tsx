import { createFileRoute } from "@tanstack/react-router";

import { ZustandCounter } from "@/components/zustand-counter";

export const Route = createFileRoute("/zustand-counter")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ZustandCounter />;
}
