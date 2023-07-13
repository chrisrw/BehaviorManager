// import React, { createContext, useState } from 'react';

// interface User {
//   name: string;
//   email: string;
// }

// interface UserContextValue {
//   user: User | null;
//   setUser: (user: User | null) => void;
// }

// export const UserContext = createContext<UserContextValue>({
//   user: null,
//   setUser: () => {},
// });

// export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);
  
//     return (
//       <UserContext.Provider value={{ user, setUser }}>
//         {children}
//       </UserContext.Provider>
//     );
//   };
  
  import React, { createContext, useState } from 'react';

  interface User {
    email: string;
    password: string;
  }
  
  interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
  }
  
  export const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => {},
  });
  
 export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };