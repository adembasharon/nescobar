import { createContext,useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentUser, setCurrentUser] = useState([])

  return (
    <AppContext.Provider value={[currentUser,setCurrentUser]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext