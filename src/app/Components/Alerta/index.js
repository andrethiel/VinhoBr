import { useEffect, useState } from "react";

export default function Alerta({ children, type }) {
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setCor("");
    }, 4000);
  }, []);
  const [cor, setCor] = useState("");
  const [message, setMessage] = useState(children);
  useEffect(() => {
    if (type == "error") {
      setCor("bg-red-500");
    } else {
      setCor("bg-teal-400");
    }
  }, []);
  return (
    <div className={`p-4 mb-4 rounded-lg text-sm ${cor}`} role="alert">
      {message}
    </div>
  );
}
