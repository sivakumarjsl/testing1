import React, {Component} from 'react';

export default class Timer extends Component{
    state={
        time: "00:00"
    }

   convertTime = (inputSeconds) => {
        let hrs = Math.floor(inputSeconds/3600);
        let mins = Math.floor((inputSeconds % 3600)/60)
        let secs = Math.floor(inputSeconds %60);
        console.log('hrs', hrs,'mins',mins,'secs',secs)
        }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        }, 1000)
    }
    render(){
    return  <h1>{this.state.time}</h1>
    }
}