import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/login";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
