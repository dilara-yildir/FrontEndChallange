import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleData, toggleTheme, languageData, selectedLanguage } =
    useTheme();
  const { hero } = languageData;
  const { buttons } = hero;
  const switchStatus = localStorage.getItem("darkMode") === "true";

  return (
    <header className="headerss  flex flex-col items-center w-full h-auto">
      <div className="max-w-5xl ">
        {/* Üst Menü */}
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="logo text-2xl font-bold  text-customTitleSkillDark">
            {hero.title}
          </h1>
          <div className="flex items-center font-bold gap-12">
            <button
              onClick={() =>
                toggleData(selectedLanguage === "en" ? "tr" : "en")
              }
              className="language-button px-4 py-2 rounded transition"
            >
              <span className="text-purple-300 font-bold">
                {selectedLanguage === "en" ? "TÜRKÇE" : "İNGİLİZCE"}
              </span>
              <span className="text-gray-400 font-semibold">’YE GEÇ</span>
            </button>
            <div className="switch">
              <input
                onClick={() => toggleTheme(darkMode ? "light" : "dark")}
                type="checkbox"
                className="switch__input"
                id="Switch"
                defaultChecked={!switchStatus}
              />
              <label className="switch__label" htmlFor="Switch">
                <span className="switch__indicator"></span>
                <span className="switch__decoration"></span>
              </label>
            </div>
            <span className="theme-label  text-sm   text-customBlue dark:text-white">
              {!darkMode ? "DARK MODE" : "LIGHT MODE"}
            </span>
          </div>
        </div>

        {/* İçerik */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-12 px-4 ">
          {/* Sol Taraf */}
          <div className="content flex-1 text-center md:text-left ">
            <h2 className="title text-3xl sm:text-4xl md:text-5xl font-bold mb-10  text-customTitleSkillDark">
              {hero.name}
            </h2>
            <p className="description text-sm sm:text-base md:text-lg mb-8 ">
              {hero.description}
            </p>
            <div className="button-group flex justify-center md:justify-start gap-4">
              <a
                href={buttons[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    darkMode
                      ? "src/assets/Github-button-2.png"
                      : "src/assets/Github-button.png"
                  }
                  alt="GitHub"
                  className="w-50 h-50 mr-2"
                />
              </a>

              <a
                href={buttons[1].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    darkMode
                      ? "src/assets/Linkedin-button-2.png"
                      : "src/assets/Linkedin-button.png"
                  }
                  alt="LinkedIn"
                  className="w-50 h-50 mr-2"
                />
              </a>
            </div>
          </div>

          {/* Sağ Taraf */}
          <div className="image-container flex-1 flex justify-center">
            <img
              src="src/assets/hero-right.png"
              alt="Developer"
              className="developer-image w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
