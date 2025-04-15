import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold">Annie</h1>
      <div className="space-x-4">
        <Link
          href="/"
          className="transition duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="transition duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="transition duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="transition duration-300 transform hover:scale-110 hover:text-orange-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
