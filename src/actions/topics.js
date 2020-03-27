export const FETCH_TOPICS_PENDING = 'FETCH_TOPICS';
export const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS';
export const FETCH_TOPICS_FAILURE = 'FETCH_TOPICS_FAILURE';

export const fetchTopicsPending = () => ({
    type: FETCH_TOPICS_PENDING
});

export const fetchTopicsSuccess = topics => ({
    type: FETCH_TOPICS_SUCCESS,
    payload: { topics }
});

export const fetchTopicsFailure = error => ({
    type: FETCH_TOPICS_FAILURE,
    payload: { error }
});

export const fetchTopics = () => {
    return dispatch => {
        dispatch(fetchTopicsPending());
        fetch('https://5e7c1bd0a917d70016682e1e.mockapi.io/v1/topics')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchTopicsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchTopicsFailure(error));
        })
    }
}