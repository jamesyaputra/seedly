export const FETCH_QUESTIONS_PENDING = 'FETCH_QUESTIONS';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

export const fetchQuestionsPending = () => ({
    type: FETCH_QUESTIONS_PENDING
});

export const fetchQuestionsSuccess = topics => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: { topics }
});

export const fetchQuestionsFailure = error => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload: { error }
});

export const fetchQuestions = id => {
    return dispatch => {
        dispatch(fetchQuestionsPending());
        fetch('https://5e7c1bd0a917d70016682e1e.mockapi.io/v1/topics/:id/questions'.replace(':id', id))
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchQuestionsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchQuestionsFailure(error));
        })
    }
}