/*global gantt*/
import React, { Component } from 'react'
import 'dhtmlx-gantt'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'

export default class Gantt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.tasks,
      windowWidth: window.innerWidth
    }
    this.setWindowSize = this.setWindowSize.bind(this)
    this.changeConfigTimeType = this.changeConfigTimeType.bind(this)
    this.setGanttConfig = this.setGanttConfig.bind(this)

    this.setGanttConfig(props.timeType)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps
  }

  componentDidMount() {
    gantt.init(this.ganttContainer)
    gantt.parse(this.props.tasks)
    window.addEventListener("resize", this.setWindowSize)
    console.log('state.data:', {props: this.props, state: this.state})

    gantt.attachEvent("onBeforeGanttRender", function() {
      console.log('gantt', gantt.$data)
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    gantt.init(this.ganttContainer)
    gantt.parse(prevProps.tasks)
    this.setGanttConfig(prevProps.timeType)
    console.log('prevProps:', prevProps)
  }

  setGanttConfig(timeType) {
    gantt.config.scale_unit = timeType
    let format = ''
    if(timeType === "day") {
      format = " $%d"
    } else if(timeType === "week") {
      format = " $%W"
    } else {
      format = " $%h"
    }
    gantt.config.date_scale = timeType + format
  }

  changeConfigTimeType() {
    gantt.config.scale_unit = "week"
    gantt.config.date_scale = "week #%W"
  }

  setWindowSize() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setWindowSize)
  }

  render() {
    let { windowWidth } = this.state
    return (
      <div className="gantt-container">
        <div
            ref={(input) => { this.ganttContainer = input }}
            style={{width: windowWidth + 'px', minHeight: '500px'}}
        ></div>
      </div>
    );
  }
}
