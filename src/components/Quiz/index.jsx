import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
            <RadioGroup className="radio-group">
              <FormControlLabel className="label" value="1" control={<Radio/>} label="xunei"/>
              <FormControlLabel className="label" value="2" control={<Radio/>} label="ursão"/>
              <FormControlLabel className="label" value="3" control={<Radio/>} label="corno"/>
              <FormControlLabel className="label" value="4" control={<Radio/>} label="gado"/>
            </RadioGroup>
            <div className="next-div">
              <Link to="/next" className="next-icon">
                <ButtonNext className="next-button">
                  Next <NavigateNextIcon />
                </ButtonNext>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}
