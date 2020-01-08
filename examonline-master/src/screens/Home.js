import React,{Component} from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../App.css';
import Test from '../components/Test';
import Timer from '../components/Timer';
import Button from '@material-ui/core/Button';
import Question from '../components/Question';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';
import QuestionCrumbs from '../components/QuestionCrumbs';
import { chapterQuestion } from '../Api/action';
import {questions} from '../data.json';

const EXAM_TIME = 60;

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			charterQuestions: [],
			currentQuestion: 0, 
			chapterChoosen: false,
			timer:{
				hours:'00',
				minutes:'00', 
				seconds:'00'
			},
			remainingTime:EXAM_TIME
		}
	}

	componentDidMount(){
		this.counter = setInterval(() => this.timer(),1000)
		if (this.state.chapterChoosen === false) {
			this.props.getChapterQuestion()
			this.setState({
				chapterChoosen: true
			})
		}
	}

	timer = () => {
		const {remainingTime} = this.state;
		let hours=Math.floor(remainingTime/3600);
		let minutes=String(Math.floor((remainingTime/((hours ? hours : 1)*60))%60)).padStart(2,'0');
		let seconds=String(remainingTime%60).padStart(2,'0');
		hours = String(hours).padStart(2,'0');
		this.setState({timer:{hours, minutes, seconds}, remainingTime:remainingTime - 1 });
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.remainingTime == 0) {
			clearInterval(this.counter);

		}
		
	}

	changeQuestion = (operation) => {
		console.log('onclick')
		const {currentQuestion} = this.state;
		if(operation === 'next' && (currentQuestion !== questions.length - 1)){
			this.setState({currentQuestion: currentQuestion + 1});
		} else if(operation === 'prev') {
			this.setState({currentQuestion: currentQuestion - 1});
		}
	}

	render(){
		const {currentQuestion, timer, remainingTime} = this.state;
		const { charterQuestions } = this.props
		// console.log('currentQuestion', charterQuestions, currentQuestion)
		return (
			<div style={{padding:'5%'}}>
				{/* <Timer /> */}
				<Header />
				<TitleBar timer={timer} remainingTime={remainingTime} />
				<div style={{display:'flex', flexDirection:'row'}}>
					<div style={{flex:8,display:'flex', flexDirection:'row', padding:20}}>
		<h4 style={{marginRight: 20}}>{`Q${currentQuestion + 1}`}</h4>
						<div>
							<Question currentQuestion={currentQuestion} surveyQuestion={charterQuestions[currentQuestion]} data={questions[currentQuestion]} changeQuestion={this.changeQuestion}/>
							<div style={{display:'flex', flexDirection:'row', marginTop: 20}}>
								<div style={{flex:8}}>
									<Button variant="contained" color="primary">
										DESELECT
									</Button>
								</div>
								<Button variant="contained" className="mr-3" color="secondary" onClick={() => this.changeQuestion('next')}>
									SKIP
								</Button>
								<Button variant="contained" color="primary" onClick={() => this.changeQuestion('next')}>
									SAVE & NEXT
								</Button>
							</div>					
						</div>
					</div>
					<div style={{flex:2}}>
						<QuestionCrumbs />
					</div>
				</div>
			</div>
		  );
	}  	
}


const mapStateToProps = (state) => {
	return {
		charterQuestions: {...state.chapterReducer.charterQuestion},
	};
};


const mapDispatchToProps = dispatch => {
  return {
    getChapterQuestion: () => {
        dispatch(chapterQuestion());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

