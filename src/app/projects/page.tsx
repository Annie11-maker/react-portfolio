import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    { title: "Portfolio Website", description: "Built with Next.js and Tailwind CSS.", link: "#" },
    { title: "E-Commerce App", description: "A full-stack online store using React.", link: "#" },
  ];

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
