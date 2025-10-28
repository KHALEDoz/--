// frontend/src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import RiskExplorer from "./pages/RiskExplorer";
import ModelPerformance from "./pages/ModelPerformance";
import Fairness from "./pages/Fairness";
import Ingest from "./pages/Ingest";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* مصادقة */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>

          {/* النظام */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/risk-explorer" element={<RiskExplorer />} />
            <Route path="/model-performance" element={<ModelPerformance />} />
            <Route path="/fairness" element={<Fairness />} />
            <Route path="/ingest" element={<Ingest />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
