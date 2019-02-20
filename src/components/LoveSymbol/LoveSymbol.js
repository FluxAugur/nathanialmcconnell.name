import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = theme => ({
  loveSymbol: {
    [`@font-face`]: {
      fontDamily: `PrincePlain`,
      src: `url(https://s3.amazonaws.com/nathanialmcconnell-name-fonts/ttf/PrincePlain.ttf) format(truetype)`
    }
  }
});

const LoveSymbol = props => {
  const { text } = props;

  return (
    <love-symbol className={text}>
      <LoveSymbol content={text} />
    </love-symbol>
  );
};

LoveSymbol.propTypes = {
  text: PropTypes.object
};

export default injectSheet(styles)(LoveSymbol);
