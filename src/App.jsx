import Hero from './components/Hero';
import Projects from './components/Projects';
import './hooks/fetchProjects';

function App() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}
export default App;
