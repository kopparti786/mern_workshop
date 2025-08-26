import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RegistrationForm from "./RegistrationForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegistrationForm />
  </StrictMode>
);

