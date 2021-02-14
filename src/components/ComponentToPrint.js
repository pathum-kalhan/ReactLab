import React from "react";
import Background from '../images/menu.jpg'

const styles ={
    backgroundImage: `url(${Background})`,
    // display:'flex',
    height:'100vh',
    backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat'
}
export class ComponentToPrint extends React.PureComponent {
    
  render() {
    return (
      <div style={styles}>
        <h1>Menu</h1>
      </div>
    );
  }
}
