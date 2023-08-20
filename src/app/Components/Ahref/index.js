import Link from "next/link";

export default function Ahref({ link, children }) {
  return (
    <Link
      href={link}
      className={
        "text-white font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center border-gray-600 bg-gray-600"
      }
    >
      {children}
    </Link>
  );
}
