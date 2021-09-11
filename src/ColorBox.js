import React, {Component} from 'react';

export default class ColorBox extends Component {

//If the opacity value is greater than or equal to 0.2:
//the ColorBox component should render another ColorBox inside itself (recursive components!)
//an opacity prop should be passed to the child
//he passed opacity prop should be reduced by 0.1
render() {
    if(this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      //If the opacity value is less than 0.2:
      //do not render another ColorBox 
      //instead, the render method should return null
      return null
    }
}
}
