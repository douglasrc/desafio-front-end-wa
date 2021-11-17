import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { styled } from "@material-ui/styles";

import "./style.css";

const ButtonHome = styled(Button)({
  backgroundColor: "#ffba31",
  color: "#1f2833",
  float: "right",
  "&:hover": {
    backgroundColor: "#ffba31",
  },
});

export function Home() {
  return (
    <section className="home-container">
      <section className="home-content">
        <div className="home-info">
          <h1>Questionario de Conhecimentos Gerais</h1>
          <p>
            Antes de iniciar, coloque seu nome e o número de questões que deseja
            responder.
          </p>
        </div>
        <div className="home-form">
          <form>
            <label>Nome</label>
            <input type="text" />

            <label>Número de Questões</label>
            <input type="number" />
            <ButtonHome>
              <Link to="/Start" className="home-button">
                Proximo <NavigateNextIcon />
              </Link>
            </ButtonHome>
          </form>
        </div>
      </section>
    </section>
  );
}
