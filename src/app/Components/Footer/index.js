export default function Footer() {
  const data = new Date();
  return (
    <footer className="max-w-screen mx-auto rounded-lg shadow mb-5 mt-10 bg-gray-600">
      <div className="flex items-center justify-center p-4">
        <span className="text-sm text-gray-500 sm:text-cent">
          © {data.getFullYear()} VinhoBr™ City Center Outlet . All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
}
