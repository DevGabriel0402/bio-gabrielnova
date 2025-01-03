import "../../styles/projects.css";
import "boxicons";
import "animate.css";

export const Box = (props) => {
  const handleClick = () => {
    window.open(props.link, "_blank");
  };
  return (
    <div
      className="box animate__animated animate__fadeInUp"
      style={{ animationDuration: "2", animationDelay: props.delay }}
      onClick={handleClick}
    >
      <div className="shadow">
        <h2 className="title-box">
          {props.title}
          <box-icon
            size="10px"
            color="#fafafa"
            name="link-external"
            style={{ transform: "translateY(-4px)" }}
          ></box-icon>
        </h2>
      </div>
      <img
        id={props.id}
        width={"100%"}
        src={props.src}
        alt="imagem do trabalho"
      />
    </div>
  );
};
