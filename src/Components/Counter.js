import React from "react";
import '../styles/App.css'

const Header = (props) => {
  const { counterProp, highScoreProp } = props;
  return (
    <div>
        <div className="scores">
            <h4>score - {counterProp}</h4><h4>high score - {highScoreProp}</h4>
        </div>
    </div>
  );
};
export default Header;
