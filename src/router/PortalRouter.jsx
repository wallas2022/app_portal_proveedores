import { Route, Routes } from "react-router-dom";
import { RootLayout } from "../pages/layouts/RootLayout";
import { PagePerfil,Dashboard, PageEmpresa, PageUsuarios, PageRoles, PageOrdenes, PageFacturas } from "../pages";


 
export const PortalRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="perfil" element={<PagePerfil />} />
        <Route path="empresas" element={<PageEmpresa />} />
        <Route path="usuarios" element={<PageUsuarios />} />
        <Route path="roles" element={<PageRoles />} />
        <Route path="ordenes" element={<PageOrdenes />} />
        <Route path="facturas" element={<PageFacturas />} />
        {/* Más rutas anidadas si es necesario */}
      </Route>
    </Routes>
  );
}