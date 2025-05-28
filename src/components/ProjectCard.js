export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border p-5 rounded-lg shadow-md bg-orange-100">
      <h2 className="text-2xl text-orange font-bold">{title}</h2>
      <p className="text-orange-800">{description}</p>
      <a href={link} className="text-orange-500 mt-2 inline-block" target="_blank">View Project →</a>
    </div>
  );
}
