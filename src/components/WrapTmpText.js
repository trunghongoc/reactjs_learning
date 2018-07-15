import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state: Object): Object {
    return {
      text: state.doiChuReducer.text
    }
}

class WrapTmpText extends Component {
    render() {
        return (
            <p>{ this.props.text }</p>
        )
    }
}
  
export default connect(mapStateToProps)(WrapTmpText)
