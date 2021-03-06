import { useState, createContext } from "react";

export const SideMenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <SideMenuContext.Provider value={[showMenu, setShowMenu]}>
      {children}
    </SideMenuContext.Provider>
  );
};

export const SideMenuContext = createContext(SideMenuProvider);
