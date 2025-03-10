import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <pre>
      {`
TanStack Query vs. React Context API

TanStack Query (Best for Server State)
- Fetches and caches API data
- Handles asynchronous state, refetching, and background synchronization

Not ideal for: UI state, local state management  
Example: Fetching a todos from an API

React Context API (Best for Client State)
- Manages global UI state (theme, preferences)
- Lightweight and simple

Not ideal for: Async state, caching, background synchronization  
Example: Managing dark mode or syncing user preferences with local storage
      `}
    </pre>
  );
}
