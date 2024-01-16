import "@/globals.css";

import { useLocation, Outlet } from "react-router-dom";

import Dashboard from "@/components/Dashboard/Dashboard";

import SidebarNav from "./components/Dashboard/sidebar/SidebarNav";
import { navItems } from "./data/navItems";

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");
  return (
    <Dashboard>
      <SidebarNav navItems={navItems} role={role || undefined} />
      <Outlet />
    </Dashboard>
  );
}

export default App;
