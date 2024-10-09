import { useEffect, useState } from "react";
import { getUserDetails } from "@/services/userServices";
import { User } from "@/types/user";

export const useAuth = (): { user: User | null } => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const currentUser = await getUserDetails();
        if (currentUser) {
          setUser(currentUser); 
        } else {
          console.error("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Failed to get the user details:", error);
      }
    };
    fetchUserDetails();
  }, []); 

  return { user };
};
