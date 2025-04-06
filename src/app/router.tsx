import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}
