import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as doiMauAction from './../actions/doi_mau'

function mapStateToProps(state: Object): Object {
    return {
      color: state.color,
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    changeColorAction: bindActionCreators(doiMauAction, dispatch)
  }
}

class DoiMau extends Component {
    constructor(props) {
        super(props)
        this.doiMau = this.doiMau.bind(this)
    }

    doiMau(color) {
        console.log('color:', color)
        // this.setState({ color: color })
        this.props.changeColorAction.actDoiMau({color: color})
    }

    render() {
        window.socket.on('change-color', (color) => {
            console.log('---receive color:', color)
            this.props.changeColorAction.actDoiMau({color: color})
        })

        return (
            <div>
                <button onClick={ () => this.doiMau('green') }>Màu xanh</button>
                <button onClick={ () => this.doiMau('red') }>Màu đỏ</button>
                <button onClick={ () => this.doiMau('yellow') }>Màu vàng</button>
            </div>
        );
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DoiMau)
