import { useTheme } from "../context/ThemeContext";
export default function Skills() {
  const { languageData } = useTheme();
  return (
    <section className="p-20 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Normal Durum */}
        <div className="hidden md:grid grid-cols-3 ">
          {/* Skills Başlığı */}
          <div className="col-span-1">
            <h3
              className="text-5xl font-bold 
             text-customBlue dark:text-customTitleSkillDark"
            >
              {languageData.skillstitle}
            </h3>
          </div>

          {/* Skill Kartları */}
          <div className="col-span-2 grid grid-cols-2 gap-y-4 gap-x-6">
            {/* JavaScript */}
            {languageData.skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <img src={skill.src} alt="JavaScript" className="w-28 h-28" />
                <p className="ml-4 text-2xl font-small text-customGray dark:text-customGrayDark">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Durum */}
        <div className="block md:hidden">
          {/* Skills Başlığı */}
          <h3 className="text-4xl font-bold text-purple-900 text-center mb-6">
            Skills
          </h3>

          {/* Skill Resimleri */}
          <div className="grid grid-cols-2 gap-6">
            {/* JavaScript */}
            <div className="flex justify-center">
              <img
                src="assets/js-logo-1-1.png"
                alt="JavaScript"
                className="w-24 h-24"
              />
            </div>

            {/* Node.js */}
            <div className="flex justify-center">
              <img
                src="assets/node-logo-1.png"
                alt="Node.js"
                className="w-24 h-24"
              />
            </div>

            {/* React */}
            <div className="flex justify-center">
              <img
                src="assets/Rectangle-35.png"
                alt="React"
                className="w-24 h-24"
              />
            </div>

            {/* Redux */}
            <div className="flex justify-center">
              <img
                src="assets/Group-101.png"
                alt="Redux"
                className="w-24 h-24"
              />
            </div>

            {/* VS Code */}
            <div className="flex justify-center">
              <img
                src="assets/Rectangle-34.png"
                alt="VS Code"
                className="w-24 h-24"
              />
            </div>

            {/* Figma */}
            <div className="flex justify-center">
              <img
                src="assets/figma-logo-1.png"
                alt="Figma"
                className="w-24 h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
