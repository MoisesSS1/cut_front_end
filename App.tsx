import Router from "./src/router/Router";
import { AuthProvider } from "./src/contexts/Auth";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
