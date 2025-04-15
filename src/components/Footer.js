
export default function Footer() {
  return (
    <footer className="text-gray-400 text-sm py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Annie. All rights reserved.</p>
      <p className="mt-1">
        Made with <span className="text-white font-medium">React</span>,{" "}
        <span className="text-white font-medium">Next.js</span>, and{" "}
        <span className="text-white font-medium">Tailwind CSS</span>
      </p>
    </footer>
  );
}
