import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("firstVisit")) {
      sessionStorage.setItem("firstVisit", "true");
      setIsFirstVisit(true);
    }
  }, []);

  if (!isFirstVisit) return null;

  return <div>Loading...</div>;
}
