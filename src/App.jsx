import { NavBar, Home, About, Skills, Contact, Copyright } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  );
};

export default App;
