import React, {Component} from 'react';

import SVGPieTimer from '../components/SVGPieTimer';

export default class TitleBar extends Component {
    render(){
        const {timer, remainingTime} = this.props;
        return(
            <div style={{backgroundColor:'#cfe7ec', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <div style={{flex:5, display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'0px 50px 0px 50px', alignItems:'center' }}>
                    <div>
                        <div style={{padding:'10px 25px 10px 25px', borderRadius: 5, backgroundColor:'#46cce8', fontWeight:'bold', fontSize:15}}>Chemistry</div>
                    </div>
                    <div style={{color:'white', backgroundColor:'#ff722d', padding:'10px 25px 10px 25px', borderRadius: 5}}>
                        <span style={{fontSize:15, fontWeight:'bold'}}>END TEST</span>
                    </div>                                        
                </div>              
                <div style={{flex:1, textAlign:'center', display:'flex', flexDirection:'row',alignItems:'center'}}>
                <SVGPieTimer
                    height={50}
                    width={50}
                    duration={remainingTime * 1000}
                    loops={1}
                    reverse={false}
                    inverse={true}
                />
                    <div>
                        <h6>Time Left</h6>
        <h2>{`${timer.hours}:${timer.minutes}:${timer.seconds}`}</h2>
                    </div>
                </div>
            </div>
        )
    }
}