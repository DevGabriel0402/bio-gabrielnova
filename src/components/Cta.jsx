import "boxicons";
import "animate.css";
import "../styles/cta.css";

export const Cta = () => {
  const abriWhatsApp = () => {
    const numero = "31983272409";
    const mensagem = `
    Olá Gabriel, gostaria de fazer um *Link Personalizado*.

    Poderia me fornencer mais informações?`;
    const uriComponent = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numero}?text=${uriComponent}`;

    window.open(url, "_blank");
  };
  return (
    <>
      <div
        className="box-cta animate__animated animate__fadeInUp"
        onClick={abriWhatsApp}
      >
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
