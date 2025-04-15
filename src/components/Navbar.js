import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold"></h1>
      <div className="space-x-4">
        <Link
          href="/"
          className="text-orange-500 transition font-bold duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-orange-500 font-bold transition duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-orange-500 font-bold transition duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-orange-500 font-bold transition duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
