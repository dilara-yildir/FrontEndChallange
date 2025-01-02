import { useTheme } from "../context/ThemeContext";

export default function Footer() {
    const { languageData } = useTheme();
    const { footer } = languageData;
  return (
    <footer className="footer p-20 text-center bg-white dark:bg-gray-900">
      {/* Başlık */}
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-5xl font-bold text-customBlue  dark:text-customDark mb-4">
          {footer.title}
        </h2>
        <p className="max-w-md mt-4 p-3 text-lg sm:text-xl text-customLinkColor dark:text-customGrayDark text-center mx-auto">
          {footer.description}
        </p>
        <p className="mt-4 text-sm sm:text-base font-medium md:text-lg text-customBlue  dark:text-customDark underline">
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
        </p>
      </div>

      {/* Sosyal Medya Linkleri */}
      <div className="mt-4 flex justify-center items-center gap-4">
        {footer.links.map((links, index) => (
          <a
            key={index}
            href={links.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? links.src2
                  : links.src
              }
              className="w-6 h-6  "
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
