const projects = [
  {
    title: "2023 Programming Major Assignment",
    image: "../assets/project1.jpg",
    description: "One of my greatest joy was creating a program that was interactable for the final project. \n The final lessons were about GUI and so, I was tasked in my group to create an agenda where the user can add/edit/delete task and mark it as either in progress or in work. The outcome of it was the program being interactable and working.",
  },
   {
    title: "Game Creation of 2020",
    image: "../assets/project1.jpg",
    description: "I taught myself Unreal Engine through the help of online platforms and did small things such as animation of objects and world building which took 4 months all for a final class project. \n This was an individual project based on what I have learned in that programming class and as result, I have received a mark worth working on it for so long.",
  },
   {
    title: "2024 Web Design",
    image: "../assets/project1.jpg",
    description: "Further building upon my knowledge on web designing, making more improvements each time. As a result, I created a website worth it in the end.",
  },

];

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={{ margin: '20px', padding: '10px', border: '1px solid #ddd' }}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} width="200" />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}