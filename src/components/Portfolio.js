import React from "react";

const projects = [
  {
    id: 1,
    title: "A Golden Fortune",
    imageUrl: "",
    link: "https://cptflint-a-golden-fortune-87d0447144e5.herokuapp.com/",
    gitLink: "https://github.com/CaptainFlint1715/Project2-A-Golden-Fortune",
  },
  {
    id: 2,
    title: "Password Geenie",
    imageUrl: "",
    link: "https://julissaortiz.github.io/passwordGeenie/",
    gitLink: "https://github.com/julissaortiz/passwordGeenie",
  },
  {
    id: 3,
    title: "Who is that Pokemon?!",
    imageUrl: "",
    link: "https://2meng.github.io/Whos-that-pokemon/",
    gitLink: "https://github.com/2Meng/Whos-that-pokemon/issues",
  },
  {
    id: 4,
    title: "workDay",
    imageUrl: "",
    link: "https://julissaortiz.github.io/workday1125/Links to an external site. ",
    gitLink: "https://github.com/julissaortiz/workday1125/settings/pages",
  },
];
function Portfolio() {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <div>
            <a href={project.link}>Deployment</a>
            <a href={project.gitHubLink}>GitHub Link</a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Portfolio;
