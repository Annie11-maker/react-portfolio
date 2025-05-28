import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    { title: "PitchPerfect", description: "Pitch Perfect is an AI-powered web app that generates stunning presentation slides from just an idea and description. Users can create, customize with multiple formatting templates, favorite, share, and even download slides in PPT format—all in a seamless and intuitive interface.", link: "https://www.perfect-pitch.co.uk/" },
    { title: "VogueFrame-Studios", description: "Built with HTML5, CSS3, JavaScript, and Bootstrap 5, VogueFrame Studios is a fully responsive fashion photography website optimized for mobile and desktop. It features a dynamic landing page with a background video, interactive navigation, and showcases services like fashion shoots and portfolio creation. The site includes image sliders, smooth animations, and a contact form with social media links, providing an engaging user experience across devices.", link: "https://github.com/Annie11-maker/VogueFrame-Studios" },
    { title: "SurfEasy", description: "Built with Ruby on Rails, HTML, CSS, Bootstrap, JavaScript, Stimulus, and Active Storage, this web app allows users to rent and list surfboards. Developed in under a week, it features user authentication, booking management, and image uploads, offering a seamless and user-friendly experience. Created collaboratively in a team. ", link: "https://github.com/Annie11-maker/SurfEasy" },
    { title: "RecipeBox", description: "Built with Ruby on Rails, PostgresSQL, Bootstrap, JavaScript, Active Storage and SCSS/HTML. API integration to fetch and display recipes dynamically. Recipe Box is a web app where users can explore, create, and manage recipes. It includes features like category browsing, recipe creation with image uploads, and a user-friendly interface.", link: "https://github.com/Annie11-maker/RecipeBox-Rails" },

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
