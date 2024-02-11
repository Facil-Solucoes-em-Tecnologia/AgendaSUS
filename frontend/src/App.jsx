import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgot-password";
import Profile from "./pages/usuarios";
import Agendamento from "./pages/agendamento"
import EstabelecimentoPage from "./pages/estabelecimento";
import EstabelecimentoAddEdit from "./pages/estabelecimento/common/estabelecimento-add";
import EstabelcimentoView from "./pages/estabelecimento/common/estabelecimento-view";
import ServicosPage from "./pages/servicos";
import ServicosAddEdit from "./pages/servicos/common/adicionar-servicos";
import ServicosView from "./pages/servicos/common/visualizar-servicos";
import GerenciarAgenda from "./pages/gerenciar-agenda";

function App() {
  return (
    <main className="App relative">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/*" element={<Layout />}>
          <Route path="inicio" element={<Dashboard />} />
          <Route path="usuario" element={<Profile />} />
          <Route path="agendamento" element={<Agendamento />} />
          <Route path="estabelecimentos" element={<EstabelecimentoPage />} />
          <Route path="estabelecimentos/adicionar" element={<EstabelecimentoAddEdit />} />
          <Route path="estabelecimentos/visualizar/:id" element={<EstabelcimentoView />} />
          <Route path="estabelecimentos/editar/:id" element={<EstabelecimentoAddEdit />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="servicos/adicionar" element={<ServicosAddEdit />} />
          <Route path="servicos/editar/:id" element={<ServicosAddEdit />} />
          <Route path="servicos/visualizar/:id" element={<ServicosView />} />
          <Route path="gerenciar" element={<GerenciarAgenda />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
