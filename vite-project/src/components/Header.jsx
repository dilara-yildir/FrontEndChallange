import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <>
            <div className="headerss flex flex-col items-center  w-full h-[671px]">
                {/* Üst Menü */}
                <div className="w-[1440px] flex justify-between items-center p-6">
                    <h1 className="text-white text-2xl font-bold">almila</h1>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-white text-purple-900 rounded hover:bg-gray-200 transition">
                            Türkçeye Geç
                        </button>
                        <div class="switch">
                            <input onClick={() => toggleTheme(!darkMode ? 'dark' : 'light')} type="checkbox" class="switch__input" id="Switch" />
                            <label class="switch__label" for="Switch">
                                <span class="switch__indicator"></span>
                                <span class="switch__decoration"></span>
                            </label>

                        </div>
                        {!darkMode ? 'Dark Mode' : 'Light Mode'}
                    </div>
                </div>

                {/* İçerik */}
                <div className="w-[1440px] flex items-center gap-8 mt-16">
                    {/* Sol Taraf */}
                    <div className="flex-1 text-white">
                        <h2 className="text-5xl font-bold mb-4">I am a Frontend Developer...</h2>
                        <p className="text-lg mb-6">
                            ...who likes to craft solid and scalable frontend products with great user experiences.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 bg-white text-purple-900 rounded hover:bg-gray-200 transition">
                                Github
                            </button>
                            <button className="px-4 py-2 bg-white text-purple-900 rounded hover:bg-gray-200 transition">
                                LinkedIn
                            </button>
                        </div>
                    </div>

                    {/* Sağ Taraf */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="src\assets\hero-right.png"
                            alt="Developer"
                        />
                    </div>
                </div>
            </div>
        </>


    );
}
