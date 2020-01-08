import React, {Component} from 'react';
import {questions} from '../data.json';
export default class QuestionCrumbs extends Component {
    render(){
        return(
            <div>
                <h6 style={{margin: 10}}>Chemistry</h6>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {
                    questions.map((item, index) => {
                        return <Crumb key={index} value={index+1}/>
                    })
                }
                </div>
                
            </div>
        )
    }
}

const Crumb = (props) => <span style={{backgroundColor:'white', padding:10, borderRadius: 3, border:'1px solid black', margin:5, width:'2.8vw', textAlign:'center'}}>{`Q${props.value}`}</span>