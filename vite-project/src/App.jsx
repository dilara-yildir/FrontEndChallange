import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}
