import React, { Component } from 'react';
import { Container, Grid, Responsive, Segment } from 'semantic-ui-react';
import { Topics } from './components/topics/Topics';
import { QuestionCard } from './components/questionCard/QuestionCard';
import styles from './Questions.module.css';
 
export class Questions extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Responsive as={Grid.Column} minWidth={1000} width={3}>
            <Grid.Row>
              <Segment className={styles.allQuestions}>
                All Questions
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Topics />
            </Grid.Row>
          </Responsive>

          <Responsive as={Grid.Column} minWidth={1000} width={13}>
            <QuestionCard />
          </Responsive>

          <Responsive as={Grid.Column} maxWidth={999} width={16}>
            <QuestionCard />
          </Responsive>
        </Grid>
      </Container>
    );
  }
}

export default Questions;