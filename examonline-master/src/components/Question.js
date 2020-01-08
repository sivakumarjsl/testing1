import React, {Component} from 'react';
import {Radio} from 'antd';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

export default class Question extends Component {
    constructor(props){
        super(props);
        this.state={
            value:null
        }
    }

    onChange = (e) => {
        this.setState({value:e.target.value});
    }

    deSelect = () => {
        this.setState({value:null});
    }
    
    componentDidUpdate(prevProps) {
        console.log('componentDidUPdate', prevProps, this.props);
        if(prevProps.data.question !== this.props.data.question) {
            this.setState({value:null});
        }
    }
    render(){
        console.log('surveyQuestion',  this.props.surveyQuestion)
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
          const {data, surveyQuestion} = this.props;
        var htmlInput = surveyQuestion ? surveyQuestion.QUESTION: '';
        var htmlToReactParser = new HtmlToReactParser();
        var reactElement = htmlToReactParser.parse(htmlInput);
        var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
        return(   
             surveyQuestion  ?   
            <div style={{backgroundColor:'white', padding:30}}>
                <h6>{reactElement}</h6>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    {
                        surveyQuestion.OPTIONS.map(option => {
                        return <Radio style={radioStyle} value={option}>
                        <span style={{color:'black', fontSize:'15px'}}>{option}</span>
                    </Radio>
                        })
                    }
                </Radio.Group>
            </div> : ''
        )
    }
}