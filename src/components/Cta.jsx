import "boxicons";
import "animate.css";
import "../styles/cta.css";

export const Cta = () => {
  return (
    <>
      <div className="box-cta animate__animated animate__fadeInUp">
        <box-icon
          id="icon"
          type="solid"
          name="mobile-vibration"
          color="#fafafa"
          size="38px"
        ></box-icon>
        <h2>Quero um Link Personalizado</h2>
      </div>
    </>
  );
};
