import React, { Component } from 'react';

// Components
import { Container, Grid, Responsive } from 'semantic-ui-react';
import { Banner } from './components/banner/Banner';
import { Topics } from './components/topics/Topics';
import { QuestionCard } from './components/questionCard/QuestionCard';

class Questions extends Component {
  state = {
    selectedTopic: 1,
  }

  handleSelectedTopic = id => {
    this.setState({selectedTopic: id});
  }

  render() {
    return (
      <>
        <Banner />
        <Container>
          <Grid>
            <Responsive as={Grid.Column} minWidth={1000} width={3}>
              <Grid.Row>
                <Topics onSelectTopic={this.handleSelectedTopic}/>
              </Grid.Row>
            </Responsive>

            <Responsive as={Grid.Column} minWidth={1000} width={13}>
              <QuestionCard topic={this.state.selectedTopic}/>
            </Responsive>

            <Responsive as={Grid.Column} maxWidth={999} width={16}>
              <QuestionCard topic={this.state.selectedTopic}/>
            </Responsive>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Questions;