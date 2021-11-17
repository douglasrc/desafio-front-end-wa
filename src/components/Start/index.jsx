import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";
import { styled } from "@material-ui/styles";

import "./style.css";

const ButtonStart = styled(Button)({
  backgroundColor: "#ffba31",
  color: "#1f2833",
  "&:hover": {
    backgroundColor: "#ffba31",
  },
});

export function Start() {
  return (
    <section className="start-container">
      <section className="start-content">
        <div className="start-info">
          <h2>Preparado??</h2>
          <p>
            Para iniciar click no botão Start ou para alterar o número de
            questões click no botão Cancel
          </p>
          <form className="start-form">
            <ButtonStart className="start-button">
              <Link to="/Start" className="start-icon">
                Start <NavigateNextIcon />
              </Link>
            </ButtonStart>
            <ButtonStart className="start-button">
              <Link to="/" className="start-icon">
                Cancel <CloseIcon />
              </Link>
            </ButtonStart>
          </form>
        </div>
      </section>
    </section>
  );
}
