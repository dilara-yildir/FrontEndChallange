import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { languageData } = useTheme();
  return (
    <section className="project-head py-16">
      <div className="project max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-customBlue dark:text-customTitleSkillDark">
          {languageData.projectsTitle}
        </h2>
        <div className="flex flex-col gap-8">
          {languageData.projects.map((project, index) => (
            // Project Card 1
            <div className="flex flex-col md:flex-row bg-white dark:bg-customCardColorDark rounded-lg shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="md:w-1/3">
                <img
                  src={project.image}
                  alt="Workintech"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Text Section */}
              <div className="p-10 md:w-2/3 flex flex-col justify-center">
                <div>
                  <h3 className="text-3xl font-bold text-customBlue dark:text-customPurpleDark mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-black  dark:text-customCardTextColorDark mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-4 py-2 text-xs font-small bg-customBlue text-gray-300 rounded-full dark:bg-customPurpleDark dark:text-white">
                      react
                    </span>
                    <span className="px-4 py-2 text-xs font-small bg-customBlue text-gray-300 rounded-full  dark:bg-customPurpleDark dark:text-white">
                      redux
                    </span>
                    <span className="px-4 py-2 text-xs font-small bg-customBlue text-gray-300 rounded-full  dark:bg-customPurpleDark dark:text-white">
                      vercel
                    </span>
                  </div>
                </div>
                <div className="flex gap-2  ">
                  {project.links.map((link, index) => (
                    <a
                      href={link.url}
                      className="py-2  text-customLinkColor dark:text-customTitleSkillDark text-s font-small rounded underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
