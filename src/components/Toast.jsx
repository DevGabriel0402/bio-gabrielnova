import "boxicons";
import "animate.css";

export const Toast = ({ title, id, bg, color, icon, size, iconColor }) => {
  const styles = {
    position: "fixed",
    top: "20px",
    width: "300px",
    backgroundColor: bg,
    padding: "10px",
    borderRadius: "8px",
    color: color,
    textAlign: "start",
    display: "none",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
  };
  return (
    <div
      className="toast animate__animated animate__fadeInDown"
      style={styles}
      id={id}
    >
      <box-icon
        type="logo"
        name={icon}
        size={size}
        color={iconColor}
      ></box-icon>
      {title}
    </div>
  );
};
