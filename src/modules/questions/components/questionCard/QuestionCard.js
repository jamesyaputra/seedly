import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Card, Image } from 'semantic-ui-react';

// Styles
import styles from './QuestionCard.module.css';

// Redux
import { fetchQuestions }from '../../app/actions/questions';
import {
  getQuestions,
  getQuestionsError,
  getQuestionsPending
} from '../../app/reducers/questions';

const mapStateToProps = state => ({
  error: getQuestionsError(state),
  questions: getQuestions(state),
  pending: getQuestionsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({fetchQuestions}, dispatch)

class QuestionCard extends Component {
  componentWillMount() {
    const { topic, fetchQuestions } = this.props;
    fetchQuestions(topic);
  };

  render() {
    const { questions } = this.props;
    return (
      <div>
        {questions.map(question => {
          const { content, answer, numAnswer } = question;
          return (
            <Card fluid>
              <Card.Content>
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
              </Card.Content>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionCard);
