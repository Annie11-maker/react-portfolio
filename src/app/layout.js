import Navbar from "../components/Navbar";
import "./globals.css"; // Ensures Tailwind works

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-5">{children}</main>
      </body>
    </html>
  );
}
