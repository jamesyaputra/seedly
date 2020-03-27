import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Card, Image, Loader } from 'semantic-ui-react';

// Styles
import styles from './QuestionCard.module.css';

// Redux
import { fetchQuestions }from '../../../../actions/questions';
import {
  getQuestions,
  getQuestionsError,
  getQuestionsPending
} from '../../../../reducers/questions';

const mapStateToProps = state => ({
  error: getQuestionsError(state),
  questions: getQuestions(state),
  pending: getQuestionsPending(state)
})

class QuestionCard extends Component {
  componentWillMount() {
    const { topic, fetchQuestions } = this.props;
    fetchQuestions(topic);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      const { topic, fetchQuestions } = this.props;
      fetchQuestions(topic);
    }
  }

  render() {
    const { questions, pending } = this.props;
    return (
      <>
        {questions.topics?.map(question => {
          const { content, answer, numAnswer } = question;
          return (
            <Card key={question.id} fluid>
              <Card.Content>
                {
                  pending ? 
                  <div className={styles.loader}>
                    <Loader size='big' active />
                  </div> :
                  <>
                    <Card.Header>{content}</Card.Header>
                    <Card.Meta>{numAnswer} answers</Card.Meta>
                    <Card fluid>
                      <Card.Content>
                        <Image
                          circular
                          floated='left'
                          size='mini'
                          src={answer.user.picUrl}
                        />
                        <Card.Header>{answer.user.name}</Card.Header>
                        <Card.Meta className={styles.userStatus} floated='right'>Level {answer.user.level}</Card.Meta>
                        <Card.Description>{answer.content}</Card.Description>
                      </Card.Content>
                    </Card>
                  </>
                }
              </Card.Content>
            </Card>
          )
        })}
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(QuestionCard);
