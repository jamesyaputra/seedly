import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import styles from './QuestionCard.module.css';

export class QuestionCard extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>My parents are in debt and I give the bulk of my salary to them. The rest of my salary is used to pay off my own university loans, transport, phone bills, insurance. How do I help my family live more comfortably and reduce our debt?</Card.Header>
          <Card.Meta>4 answers</Card.Meta>
          <Card fluid>
            <Card.Content>
              <Image
                circular
                floated='left'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
              <Card.Header>James Yaputra</Card.Header>
              <Card.Meta className={styles.userStatus} floated='right'>Level 10 Unicorn</Card.Meta>
              <Card.Description>
                You might want to reach out to Family Service Centre in your area to see how they can help or see if you're able to leverage on their network to another organisation that could help.
                CDC has a tie-up with Maybank on a financial literacy workshop to teach about financial knowledge and money management skills. It's offered to low-income families referred by Family Service Centre and 4 other partners.
                https://www.cdc.org.sg/centralsingapore/contentdetails/cashup-family-savers
                I'd think means testing is required. You may want to consider to see the Family Service Centre can offer any insights.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Content>
      </Card>
    )
  }
}

export default QuestionCard;