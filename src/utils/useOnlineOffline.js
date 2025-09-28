import { useEffect, useState } from "react";
const useOnlineOffline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("online");
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      console.log("offline");
      setIsOnline(false);
    });
  }, []);
  return isOnline;
};
export default useOnlineOffline;
