import {
  ZustandCounter,
  ReduxCounter,
  TodoList,
  TodoDetail,
  Home,
  Quotes,
} from "../components";

import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
  Link,
} from "react-router-dom";

const Links = () => (
  <>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/zustand-counter">Zustand Counter</Link>
      <Link to="/redux-counter">Redux Counter</Link>
      <Link to="/todos">TodoList</Link>
      <Link to="/quotes">Quotes</Link>
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
    path: "/zustand-counter",
    element: (
      <Layout>
        <ZustandCounter />
      </Layout>
    ),
  },
  {
    path: "/redux-counter",
    element: (
      <Layout>
        <ReduxCounter />
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
  {
    path: "/quotes",
    element: (
      <Layout>
        <Quotes />
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
