import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    name: "Danler Tech",
    description:
      "It is a growing firm that offer a range of services related to websites, such as designing, developing and maintaining them. Whether you require a fresh website for your business.",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/Danler.png?updatedAt=1723128002657",
    url: "https://danler-tech.vercel.app/",
  },
  {
    name: "Burger Restaurant",
    description:
      "This is a simple responsive buger website. It allows users to go through the menu of the restaurant and be able to choose the type of burger they want. It also includes a search button fuctionality.",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/Burger.png?updatedAt=1715932037865",
    url: "https://spicorn.github.io/burger/",
  },
  {
    name: "Associated Foods Zimbabwe",
    description:
      "Associated Foods Zimbabwe is a leading food manufacturer and distributor of quality Spreads, Canned Products, Preserves and Snack Foods in Zimbabwe.",
    image: "https://ik.imagekit.io/qvdv4r3lk/afz.png?updatedAt=1715932037352",
    url: "https://spicorn.github.io/Associated-Foods-ZImbabwe/",
  },
  {
    name: "My first portfolio",
    description:
      "Developing this website taught me how to build responsive websites and also how to create animated cards and grids. The animations included in this portfolio where made possible through the use of javascript and css.",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/portfolio.png?updatedAt=1715943540727",
    url: "https://spicorn.github.io/dancel-mautsa/",
  },
  {
    name: "Vakani Bricks",
    description:
      "Vakani is a leading building materials company that provides high quality products and reliable services to customers and communities in and around Zimbabwe. ",
    image:
      "https://ik.imagekit.io/qvdv4r3lk/vakani.png?updatedAt=1715932037555",
    url: "https://spicorn.github.io/Vakani/",
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
