import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          home
        </Link>{" "}
        <Link to="/vanilla-counter" className="[&.active]:font-bold">
          vanilla-counter
        </Link>{" "}
        <Link to="/zustand-counter" className="[&.active]:font-bold">
          zustand-counter
        </Link>{" "}
        <Link to="/redux-counter" className="[&.active]:font-bold">
          redux-counter
        </Link>{" "}
        <Link to="/redux-todos" className="[&.active]:font-bold">
          redux-todos
        </Link>{" "}
        <Link to="/todos-tsquery" className="[&.active]:font-bold">
          todos tsquery
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
