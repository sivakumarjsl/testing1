const initial_state = {
    error: false,
    charterQuestion:[],
    msg: ''
}


const chapterReducer = (state=initial_state, action) => {
    switch (action.type) {
        case 'GET_CHAPTER_QUESTION_REQUEST':
            return {
            ...state,
                charterQuestion: [],
                error: false
            }
        case 'GET_CHAPTER_QUESTION_SUCCESS':
            return {
                ...state,
                    charterQuestion: action.payload.data.Questions,
                    error: false
            }
        case 'GET_CHAPTER_QUESTION_FAILED':
            return {
                ...state,
                msg: action.payload.msg,
                error: true
            }
      default:
        return state
    }
  }
  
  export default chapterReducer
  