import React from "react";

/*
  1. Create a functional component called Header
  2. Return an <h2> with the value of text from props.text
*/

const Header = ({ text }) => <h2>{text}</h2>;

/*
  3. Create a functional component called Button
  4. Return an <input> with the value for onCLick set 
      to props.onClick and the value of the Button text
      set to props.text      
*/

const Button = ({ onClick, text }) => (
  <iput type="button" onClick={onClick} value={text} />
);

class Practice4 extends React.Component {
  /*
    5. Setup state with a count property set to 0
  */
  state = {
    count: 0
  };

  /*
    6. Create an incremenent function that adds one to the value of count in state
    7. Create a decremenent function that subtracts one from the value of count in state
    8. Create a reset function that sets the value of count in state back to 0
  */
  increment() {
    this.setState(previousState => ({ count: previousState.count + 1 }));
  };

  decrement() {
    this.setState(previousState => ({ count: previousState.count - 1 }));
  };

  reset() {
    this.setState({count: 0});
  };


  render() {
    const {counter} = this.state;
    const {decrement, increment, reset} = this
    return (
      <>
        {/*
          9. Call Header and pass in the counter state as the text prop
          10. Call Button with onClick set to decrement and text "-"
          11. Call Button with onClick set to increment and text "+"
          12. Call Button with onClick set to reset and text "Reset"
        */}
        <Header text={counter} />
        <Button onClick={decrement} text="-" />
        <Button onClick={increment} text="+" />
        <Button onClick={reset} text="Reset" />
      </>
    );
  }
}

export default Practice4;
