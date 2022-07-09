import { createContext,useRef,useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentUser, setCurrentUser] = useState([])
  const [posts, setPosts] = useState([])
  const [product, setProduct] = useState([])


  return (
    <AppContext.Provider value={{userState:[currentUser,setCurrentUser], postsState:[posts, setPosts],productState:[product,setProduct]}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext