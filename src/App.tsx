import projects from "./data/store.json";

interface Project {
    Title: string;
    Image: string;
    Tags: string[];
    Description: string;
    Links: string[];
}

const tagColors: { [key: string]: string } = {
    HTML: "text-orange-500",
    CSS: "text-blue-500",
    JavaScript: "text-yellow-500",
    React: "text-teal-500",
};

const defaultColor = "bg-gray-200";

function App() {
    return (
        <div className="flex flex-col gap-28 justify-center content-center xl:m-20 lg:m-10 md:mx-10 my-10 sm:mx-7 xs:mx-5 2xs:mx-2:">
            <Header />
            <Main projects={projects} />
        </div>
    );
}

const Header = () => (
    <header>
        <p className="uppercase text-2xl">Projects from</p>
        <h1 className="text-5xl font-medium">Frontend Mentor Challenges</h1>
    </header>
);

const Main = ({ projects }: { projects: Project[] }) => (
    <main className="grid gap-8 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
        ))}
    </main>
);

const ProjectCard = ({ project }: { project: Project }) => (
    <article className="bg-slate-50 flex flex-col rounded-2xl 2xl:max-w-[357px] max-h-[585px] md:max-w-full md:h-auto">
        <a href={project.Links[1]} target="_blank" rel="noopener noreferrer">
            <img
                className="object-cover w-full h-64 rounded-t-2xl"
                src={project.Image}
                alt={`${project.Title} Preview`}
            />
        </a>
        <div className="py-6 px-5 flex flex-col gap-7">
            <ProjectDetails project={project} />
            <ProjectLinks links={project.Links} />
        </div>
    </article>
);

const ProjectDetails = ({ project }: { project: Project }) => (
    <div className="flex flex-col gap-3">
        <a
            href={project.Links[1]}
            className="text-[#1A202C] text-2xl font-medium"
            target="_blank"
            rel="noopener noreferrer"
        >
            {project.Title}
        </a>
        <ul className="flex gap-3">
            {project.Tags.map((tag, index) => (
                <li
                    key={`tag-${index}`}
                    className={`font-bold text-base rounded ${
                        tagColors[tag] || defaultColor
                    }`}
                >
                    {tag}
                </li>
            ))}
        </ul>
        <p className="text-[#90A3BF] text-base">{project.Description}</p>
    </div>
);

const ProjectLinks = ({ links }: { links: string[] }) => (
    <div className="flex justify-around items-center rounded-[32px] bg-[#3563E9] w-full">
        <a
            className="btn"
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
        >
            Idea
        </a>
        <a
            className="btn bg-slate-50 border border-[#90A3BF] text-[#596780]"
            href={links[1]}
            target="_blank"
            rel="noopener noreferrer"
        >
            Demo
        </a>
        <a
            className="btn"
            href={links[2]}
            target="_blank"
            rel="noopener noreferrer"
        >
            Code
        </a>
    </div>
);

export default App;
