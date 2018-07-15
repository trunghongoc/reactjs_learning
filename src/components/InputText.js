import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as doiChuAction from './../actions/doi_chu'

function mapStateToProps(state: Object): Object {
    return {
      text: state.doiChuReducer.text
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    changeTextAction: bindActionCreators(doiChuAction, dispatch)
  }
}

class InputText extends Component {
    constructor(props) {
        super(props)
        this.onChangeAttribute = this.onChangeAttribute.bind(this)
    }

    onChangeAttribute(event) {
        let text = event.target.value
        this.props.changeTextAction.actDoiChu({text: text})
    }

    render() {
        return (
            <input
              type="text"
              value={ this.props.text }
              onChange={ this.onChangeAttribute }
            />
        )
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(InputText)
