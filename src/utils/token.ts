export const parse_token = (cookies: string | null) => {
  let token = "";
  try {
    const tokenMatch = cookies ? cookies.match(/token=([^;]+)/) : null;
    if (tokenMatch && tokenMatch[1]) {
      token = tokenMatch[1];
    }
  } catch (error) {
    console.error("Error occurred while parsing token", error);
    return null;
  }
  return token;
};
