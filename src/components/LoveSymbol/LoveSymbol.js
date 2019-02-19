import React from "react"

const loveSymbolStyle = {
  @font-face {
    font-family: `PrincePlain`;
    src: url(`https://s3.amazonaws.com/nathanialmcconnell-name-fonts/ttf/PrincePlain.ttf`) format(`truetype`);
  }
}

export default class LoveSymbol extends React.Component {
  static defaultProps = {
    initialText: 'S'
  }

  state = {
    text: String(this.props.initialText)
  }

  render() {
    return {
      <span style={loveSymbolStyle}>
        {this.state.value}
      </span>
    }
  }
}
