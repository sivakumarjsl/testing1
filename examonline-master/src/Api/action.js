import axios from 'axios';
import { 
    GET_CHAPTER_QUESTION_REQUEST,
    GET_CHAPTER_QUESTION_SUCCESS,
    GET_CHAPTER_QUESTION_FAILED
} from  './actionTypes';

export const chapterQuestion = () => {
	return dispatch => {
		dispatch(getChapterQuestion());
		axios
		.get(`http://103.93.17.158:8888/MockTest/models/api.cfc?method=getQuestions&chapterid=12`, {
		})
		.then(res => {
			dispatch(getChapterQuestionSuccess(res.data));
		})
		.catch(err => {
			dispatch(getChapterQuestionFailure(err));
		});
	};
};



const getChapterQuestionSuccess = data => ({
  	type: GET_CHAPTER_QUESTION_SUCCESS,
	payload: {
		data,
		msg:'get surevey questions success'
	}
});

const getChapterQuestion = () => ({
  	type: GET_CHAPTER_QUESTION_REQUEST
});

const getChapterQuestionFailure = error => ({
	type: GET_CHAPTER_QUESTION_FAILED,
	payload: {
		error
	}
});



