import React from "react";
import CatSprite from "./CatSprite";


class PreviewArea extends React.Component {
  
  constructor(props) {  
    super(props);
    this.state = {
      x: 0,
      y: 0,
      rotation: 0
    }
    //this.rotate = this.rotate.bind(this);
    //this.rotateleft = this.rotateleft.bind(this);
  }

  moveXBy10() {
    this.setState({ x: this.state.x + 10 });
  }

  moveYBy10() {
    this.setState({ y: this.state.y + 10 });
  }

  rotate(){
    let newRotation = this.state.rotation + 15;
    if(newRotation >= 360){
      newRotation =- 360;
    }
    this.setState({
      rotation: newRotation,
    })
  }
  
  rotateleft(){
    let newRotation = this.state.rotation - 15;
    if(newRotation >= 360){
      newRotation =- 360;
    }
    this.setState({
      rotation: newRotation,
    })
  }
  

  render() {

    const { rotation } =  this.state;

    let styles = { 
      width: '100px',
      height: '100px',
      position: 'absolute',
      transform: `translate(${this.state.x}px, ${this.state.y}px) rotate(${rotation}deg)`
    };

   
    

    return (
      <div className="flex-none h-full overflow-y-auto p-2">
        <button onClick={ this.moveXBy10.bind(this) }>Move In X</button>
        <br/>
        <button onClick={ this.moveYBy10.bind(this) }>Move In Y</button>
        <br/>
        <button onClick={ this.rotateleft.bind(this)}>RotateLeft</button><br/>
        <button onClick={ this.rotate.bind(this)}>RotateRight</button>
        <div
          style={ styles }
          >
            
          <CatSprite/>
        </div>
      </div>
    );
  }
}

export default PreviewArea
