import React, { Component } from 'react'
import GanttCom from './../components/Gantt'

var data = {
  data: [
    {id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
    {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
  ],
  links: [
    {id: 1, source: 1, target: 2, type: '0'}
  ]
};

export default class Gantt extends Component {
  constructor() {
    super()
    this.state = {
      timeType: 'day',
      tasks: data
    }
    this.changeConfigTimeType = this.changeConfigTimeType.bind(this)
  }

  changeConfigTimeType() {
    let newType = this.state.timeType === 'day' ? 'week' : this.state.timeType === 'week' ? 'hour' : 'day'
    this.setState({timeType: newType})
  }

  render() {
    let { tasks, timeType } = this.state
    return (
      <div className="gantt-container">
        <button onClick={this.changeConfigTimeType}>toggle ngay - tuan</button>
        <GanttCom tasks={tasks} timeType={timeType} />
      </div>
    );
  }
}
