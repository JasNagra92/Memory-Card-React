import React from "react";

const Header = (props) => {
  const { counterProp, highScoreProp } = props;
  return (
    <div>
      <h4>score - {counterProp}</h4>
      <h4>high score - {highScoreProp}</h4>
    </div>
  );
};
export default Header;
