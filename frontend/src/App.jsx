import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgot-password";
import Users from "./pages/usuarios/usuario-wizard";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/*" element={<Layout />}>
          <Route path="inicio" element={<Dashboard />} />
          <Route path="usuario" element={<Users />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
