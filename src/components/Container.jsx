import "../styles/container.css";
import { Header } from "./Header.jsx";
import { Skills } from "./Skills.jsx";
import { Projects } from "./Projects.jsx";
import { Cta } from "./Cta.jsx";
// import { Loading } from "../Loading/Loading.jsx";
export const Container = () => {
  return (
    <>
      <div className="container" id="container">
        <Header />
        <Skills />
        <Projects />
        <Cta />
      </div>
    </>
  );
};
