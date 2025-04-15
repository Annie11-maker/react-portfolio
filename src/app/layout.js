import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className="container mx-auto p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
