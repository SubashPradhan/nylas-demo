import { User } from "@/types/user";

export const getUserDetails = async (): Promise<User | null> => {
  try {
    const response = await fetch("/api/authentication/user");
    if (response.ok) {
      const data = await response.json();
      console.log("What is coming in", data);
      return data["data"];
    } else {
      console.error("Failed to connect mailbox", response.text());
    }
    return null
  } catch (error) {
    console.error("An error occurred while connecting mailbox", error);
  }
  return null
};
