import { useEffect, useState } from "react";
function useDelay(delay) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true);
    }, delay * 1000);
    return () => clearInterval(timer);
  }, [delay]);
  return render;
}

export default function Custom() {
  const toRender = useDelay(2);
  if (!toRender) {
    return null;
  } else {
    return <div>hello mukesh</div>;
  }
}
