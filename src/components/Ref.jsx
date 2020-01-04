import React from "react";

// ref mechanism demo

class Ref extends React.Component {
  focusTextInput = () => {
    this.textInput.focus();
  };

  render() {
    return (
      <div>
        <hr />
        <span>Ref mechanism demo: </span>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
        />
        <input
          type="button"
          value="focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default Ref;
