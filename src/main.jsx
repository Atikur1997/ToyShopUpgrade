import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./Components/Routes/Route";
import AuthProvider from "./Provider/AuthProvider";
import SmoothScrollProvider from "./Provider/SmoothScrollProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrollProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </SmoothScrollProvider>
  </StrictMode>
);
