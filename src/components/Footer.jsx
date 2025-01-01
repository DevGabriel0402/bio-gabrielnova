export const Footer = () => {
  const anoAtual = new Date().getFullYear();
  console.log(anoAtual);
  return (
    <div
      className="animate__animated animate__fadeInUp"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animationDelay: "3s",
      }}
    >
      <p style={{ color: "#fafafa", fontSize: "12px" }}>
        Gabriel © <span>{anoAtual}</span> Todos os direitos reservados.
      </p>
    </div>
  );
};
