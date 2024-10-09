import { getUserDetails } from "@/services/userServices"
import { User } from "@/types/user"
import { createContext, useEffect, useState, useContext, ReactNode } from "react"
interface AuthContextType {
  user: User | null
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async() => {
      const fetchedUser = await getUserDetails()
      if (fetchedUser) {
        setUser(fetchedUser)
      }
    }
    fetchUser()
  }, [])

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};