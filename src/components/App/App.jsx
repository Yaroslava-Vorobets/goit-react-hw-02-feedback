import { Component } from 'react';
import React from 'react';
import styled from 'styled-components';
import 'modern-normalize';
import Statistics from '../StatisticsFeedback/Statistics';
import FeedbackOptions from '../FeedbackOptionsFolder/FeedbackOptions';
import Section from '../SectionFolder/Section';
import Notification from '../NotificationFolder/Notification';
import { Wrap } from './App.Styled';




export class App extends Component {

    state = {
        good: 0,
        neutral:0,
        bad: 0
  }
  

  onFeedbackAction = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

    
  countTotalFeedback = () => {
        const values = Object.values(this.state);
        return values.reduce((acc, value) => acc + value, 0);
     }
    
   countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total, good);
    const options = Object.keys(this.state);
    const onLeaveFeedback = this.onFeedbackAction
    return (
      <>
        <Wrap>
          <Section  title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {total ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={positivePercentage} />)
              : (<Notification message="There is no feedback"></Notification>)}            
          </Section>
       </Wrap>
    </>
  );}

 
};
