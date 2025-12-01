import { createContext, useContext, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface AdminModeContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const AdminModeContext = createContext<AdminModeContextType | undefined>(undefined);

const ADMIN_ROUTES = ["/analytics", "/insights", "/performance"];

export function AdminModeProvider({ children }: { children: ReactNode }) {
  return (
    <AdminModeContext.Provider value={{ isAdminMode: false, toggleAdminMode: () => {} }}>
      {children}
    </AdminModeContext.Provider>
  );
}

export function useAdminMode() {
  const context = useContext(AdminModeContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  if (context === undefined) {
    throw new Error("useAdminMode must be used within an AdminModeProvider");
  }

  const isAdminMode = ADMIN_ROUTES.includes(location.pathname);

  const toggleAdminMode = () => {
    if (isAdminMode) {
      navigate("/");
    } else {
      navigate("/analytics");
    }
  };

  return { isAdminMode, toggleAdminMode };
}
