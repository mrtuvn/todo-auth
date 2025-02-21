import "@/styles/globals.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
const URL_PROD = "https://todo-auth-mu.vercel.app/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="63c04592e2e84f30a5d2db8a74221755"
      domain="https://tumobileshop.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "production"
          ? URL_PROD
          : "http://localhost:5173"
      }
      logoutUri={
        process.env.NODE_ENV === "production"
          ? URL_PROD
          : "http://localhost:5173"
      }
      isDangerouslyUseLocalStorage={true}
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>,
);
