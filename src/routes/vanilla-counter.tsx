import { createFileRoute } from "@tanstack/react-router";

import { VanillaCounter } from "@/components/vanilla-counter";

export const Route = createFileRoute("/vanilla-counter")({
  component: RouteComponent,
});

function RouteComponent() {
  return <VanillaCounter></VanillaCounter>;
}
