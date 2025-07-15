import { useWixClient } from "../wix/useWixClient";



export const useIsLoggedIn = () => {
  const wixClient = useWixClient();

  if (!wixClient) return { loading: true, isLoggedIn: false };

  return { loading: false, isLoggedIn: wixClient.auth.loggedIn() };
};