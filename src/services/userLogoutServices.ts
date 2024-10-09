export const handleUserLogout = async () => {
  try {
    const response = await fetch("/api/authentication/logout", {
      method: "POST",
    });
    if (response.ok) {
      return response;
    } else {
      console.error("An error occured while logging out the user");
    }
  } catch (error) {
    console.error("An error occured while logging out the user", error);
  }
};
