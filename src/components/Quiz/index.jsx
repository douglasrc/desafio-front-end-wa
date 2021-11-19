import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { styled } from "@material-ui/styles";

import "./style.css";

const ButtonNext = styled(Button)({
  backgroundColor: "#ffba31",
  color: "#1f2833",
  "&:hover": {
    backgroundColor: "#ffba31",
  },
});

export function Quiz() {
  return (
    <section className="next-container">
      <section className="next-content">
        <div className="next-info">
          <h2>1. Qualquer Coisa</h2>

          <form className="next-form">
            <Link to="/next" className="next-icon">
              <ButtonNext className="next-button">
                Next <NavigateNextIcon />
              </ButtonNext>
            </Link>
          </form>
        </div>
      </section>
    </section>
  );
}
