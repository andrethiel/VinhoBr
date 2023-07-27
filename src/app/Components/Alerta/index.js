import { useEffect, useState } from "react";

export default function Alerta({ children, type }) {
  const [cor, setCor] = useState("");
  useEffect(() => {
    if (type == "error") {
      setCor("bg-red-500");
    } else {
      setCor("bg-teal-400");
    }
  }, []);
  return (
    <div className={`p-4 mb-4 rounded-lg text-sm ${cor}`} role="alert">
      {children}
    </div>
  );
}
