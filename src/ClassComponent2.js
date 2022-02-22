import React, { Component } from "react";
import ThirdComponent from "./ClassComponent3";
class SecondComponent extends Component {
  // render is a method
  render() {
    return (
      <div>
        <h3>This is Child Component 2</h3>
         {/* Nested Component */}
        <ThirdComponent />
      </div>
    );
  }
}

export default SecondComponent;
