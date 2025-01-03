import "../../styles/container.css";
import { Header } from "../Header/";
import { Skills } from "../Skills/";
import { Projects } from "../Projects/";
import { Cta } from "../Cta/";
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
