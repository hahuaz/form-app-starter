import { Count, TodoList, TodoDetail, Home } from "../components";

import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
  Link,
} from "react-router-dom";

const Links = () => (
  <>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/count">Count</Link>
      <Link to="/todos">TodoList</Link>
    </div>
  </>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="layout">
    <Links />
    {children}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/count",
    element: (
      <Layout>
        <Count />
      </Layout>
    ),
  },
  {
    path: "/todos",
    element: (
      <Layout>
        <TodoList />
      </Layout>
    ),
  },
  {
    path: "/todos/:todoId",
    element: (
      <Layout>
        <TodoDetail />
      </Layout>
    ),
  },
]);

export function RouterProvider() {
  return (
    <>
      <ReactRouterProvider router={router} />
    </>
  );
}
