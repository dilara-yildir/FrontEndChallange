import { useTheme } from "../context/ThemeContext";

export default function Profile() {
  const { languageData } = useTheme();
  
  const { profile } = languageData;
  return (
    <section className="profile py-32 px-8 ">
      <div className="max-w-5xl mx-auto">
        {/* Profile Başlığı */}
        <h2 className="text-5xl font-bold mb-7 text-customTitleSkillDark">
          {languageData.profileTitle}
        </h2>

        {/* İçerik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Basic Information */}
          <div className="h-full">
            <h3 className="text-3xl font-small mb-7">
              {languageData.profileTitleBasic}
            </h3>
            <ul className="mt-4 space-y-7">
              {profile.info.map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[1.1fr_1.9fr] gap-x-4"
                >
                  {/* Sol sütun: Anahtar */}
                  <strong className="text-customTitleSkillDark">
                    {item.key}:
                  </strong>
                  {/* Sağ sütun: Değer */}
                  <span className="text-gray-300">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Orta: Görsel */}
          <div className="flex w-50 h-50 justify-center">
            <img
              src="public/assets/profile.png"
              alt="Profile"
              className="rounded-lg  shadow-lg"
            />
          </div>

          {/* About Me */}
          <div className="h-full">
            <h3 className="text-3xl font-small">{profile.aboutTitle}</h3>
            <p className="mt-4">{profile.about}</p>
            <p className="mt-4">{profile.about2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
