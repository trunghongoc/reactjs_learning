
import React, { Component } from 'react'
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'Bảng số 1',
      title: 'Kẹo kéo bao nhiêu tiền 1 cân',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Thịt chuột chấm mắm tôm', description: 'Ai đã ăn qua 1 lần món này thì không bao giờ quên được cảm giác tuyệt vời đến như thế nào, ahihi', label: '30 mins'},
	    {id: 'Card2', title: 'Có hay không cuộc tình trong bụi chuối', description: 'Dẫu biết rằng tình yêu thật đẹp nhưng qua câu chuyện duwosi đây, có ai muốn nói tình yêu còn những mảnh ghép khác không', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane3',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane4',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane5',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

export default class ReactTrello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
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

  handleDragStart() {}

  handleDragEnd() {}

  handleLaneDragStart() {}

  handleLaneDragEnd() {}

  onLaneScroll() {}

  onCardClick() {}

  onCardAdd() {}

  onLaneClick() {}

  onCardDelete() {}

  onDataChange() {}

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

  componentDidMount() {
    //this.eventBus.publish({type: 'ADD_CARD', laneId: 'lane1', card: {id: "M1", title: "Buy Milk", label: "15 mins", description: "Also set reminder"}})
  }

	render() {
    return  <Board
              eventBusHandle={this.setEventBus}
              data={this.state.data}
              draggable={true}
              handleDragStart={this.handleDragStart}
              editable={true}/>
	}
}

// https://reactjsexample.com/pluggable-components-to-add-a-trello-like-kanban-board-to-your-application/
