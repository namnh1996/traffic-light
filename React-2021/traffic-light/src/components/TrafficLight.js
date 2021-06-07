import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const Red = 0;
const Orange = 1;
const Green = 2;

class TrafficLight extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         currentColor: Red
    //     };
    //     setInterval(() => {
    //         this.setState({
    //                 currentColor: this.getNextColor(this.state.currentColor)
    //             });
    //     }, 1000);
    // }

    // getNextColor(color){
    //     switch(color){
    //         case Red: 
    //             return Orange;
    //         case Orange: 
    //             return Green;
    //         default: 
    //             return Red;
    //     }
    // }

    render(){
        const {currentColor} = this.props;
        console.log('Rendering ', currentColor);
        return <div className = "TrafficLight">
            <div className={classNames('bulb', 'red', {
                active: currentColor === Red
            })}/>
            <div className={classNames('bulb', 'orange', {
                active: currentColor === Orange
            })}/>
            <div className={classNames('bulb', 'green', {
                active: currentColor === Green
            })}/>
            
        </div>
    }
}

export default TrafficLight;