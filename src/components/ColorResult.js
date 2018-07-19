import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as doiMauAction from './../actions/doi_mau'

function mapStateToProps(state: Object): Object {
    return {
      color: state.doiMauReducer.color,
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    changeColorAction: bindActionCreators(doiMauAction, dispatch)
  }
}

class ColorResult extends Component {
    componentWillReceiveProps(nextProps) {
        // window.socket.emit('change-color', nextProps.color)
    }

    render() {
        return (
            <div className={ 'color-result ' + this.props.color }/>
        )
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ColorResult)
