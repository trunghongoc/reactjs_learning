import React, { Component } from 'react'
import Board from 'react-trello'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as trelloAction from './../actions/trello'

function mapStateToProps(state: Object): Object {
  return {
    data: state.trelloReducer.data,
  }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    trelloAction: bindActionCreators(trelloAction, dispatch)
  }
}

class CustomTrello extends Component {
  constructor(props) {
    super(props)

    this.eventBus = undefined
    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDragEnd = this.handleDragEnd.bind(this)
    this.handleLaneDragStart = this.handleLaneDragStart.bind(this)
    this.handleLaneDragEnd = this.handleLaneDragEnd.bind(this)
    this.onLaneScroll = this.onLaneScroll.bind(this)
    this.onCardClick = this.onCardClick.bind(this)
    this.onCardAdd = this.onCardAdd.bind(this)
    this.onLaneClick = this.onLaneClick.bind(this)
    this.onCardDelete = this.onCardDelete.bind(this)
    this.laneSortFunction = this.laneSortFunction.bind(this)
    this.eventBusHandle = this.eventBusHandle.bind(this)
    this.onDataChange = this.onDataChange.bind(this)
    this.addCardLink = this.addCardLink.bind(this)
    this.newCardTemplate = this.newCardTemplate.bind(this)
    this.customCardLayout = this.customCardLayout.bind(this)
    this.setEventBus = this.setEventBus.bind(this)
  }

  handleDragStart(cardId, laneId) {}

  handleDragEnd(cardId, sourceLaneId, targetLaneId, position, cardDetails) {}

  handleLaneDragStart(laneId) {}

  handleLaneDragEnd(laneId, newPosition) {}

  onLaneScroll(requestedPage, laneId) {}

  onCardClick(cardId, metadata, laneId) {}

  onCardAdd(cardInfo, laneId) {}

  onLaneClick(laneId) {}

  onCardDelete(cardId, laneId) {}

  onDataChange(newData) {
    this.props.trelloAction.actUpdateTrelloData(newData)
  }

  // laneSortFunction(card1, card2)
  laneSortFunction() {}

  eventBusHandle() {}

  // node
  addCardLink() {}

  // node
  newCardTemplate() {}

  customCardLayout() {}

  setEventBus(handle) {
    this.eventBus = handle
  }

  render() {
    return (
      <div className="board-height">
        <Board
          onDataChange={this.onDataChange}
          eventBusHandle={this.setEventBus}
          data={this.props.data}
          draggable={true}
          handleDragStart={this.handleDragStart}
          editable={true}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTrello)
