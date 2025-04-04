import { ApplicationProvider } from "./provider";
import { Router } from "./router";

export function App() {
  return (
    <ApplicationProvider>
      <Router />
    </ApplicationProvider>
  );
}
