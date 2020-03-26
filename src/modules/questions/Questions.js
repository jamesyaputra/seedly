import React, { Component } from 'react';

// Components
import { Container, Grid, Responsive } from 'semantic-ui-react';
import { Banner } from './components/banner/Banner';
import QuestionCard from './components/questionCard/QuestionCard';
import Topics from './components/topics/Topics';

class Questions extends Component {
  state = {
    selectedTopic: 1,
    title: '',
    description: ''
  }

  handleSelectedTopic = (id, title, description) => {
    this.setState({selectedTopic: id, title: title, description: description});
  }

  render() {
    const { title, description, selectedTopic } = this.state;
    return (
      <>
        <Banner title={title} description={description}/>
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
              <QuestionCard topic={selectedTopic}/>
            </Responsive>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Questions;