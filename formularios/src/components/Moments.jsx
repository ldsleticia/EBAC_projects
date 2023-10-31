import React, { Component } from "react";
import moment from "moment";
import { Rate } from "antd";

export default class Moments extends Component {
  constructor() {
    super();
    this.currentDate = this.currentDate.bind(this);
    this.currentWeekDay = this.currentWeekDay.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);

    this.state = {
      showRate: false,
      selectedStars: 0,
    };
  }

  currentDate() {
    console.log("Current weekday is:", moment().weekday());

    if (moment().weekday() === 1) {
      console.log("segunda");
      this.setState({ showRate: true });
    } else {
      console.log("outro dia da semana");
      this.setState({ showRate: false });
    }
  }

  handleRateChange(value) {
    this.setState({ selectedStars: value }, () => {
      console.log(this.state.selectedStars);
    });
  }

  currentWeekDay() {
    let thisWeekTuesday = moment().weekday(2);
    console.log("This week's Tuesday is:", thisWeekTuesday.toString());
  }

  render() {
    return (
      <>
        {this.state.showRate && <Rate onChange={this.handleRateChange} />}
        <button onClick={this.currentDate}>Show Current Date</button>
        <button onClick={this.currentWeekDay}>Show Current Weekday</button>
      </>
    );
  }
}
