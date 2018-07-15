import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchDa from './../actions/fetch_data'

function mapStateToProps(state: Object): Object {
    return {
      data: state.fetchDataReducer.data,
      success: state.fetchDataReducer.success
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    fetchD: bindActionCreators(fetchDa, dispatch)
  }
}

class User extends Component {
    constructor(props) {
        super(props)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(userId) {
        this.props.fetchD.actDeleteUser(userId)
    }

    getData() {
        this.props.fetchD.actFetchData({})
    }

    renderTr() {
        let trs = []
        this.props.data.forEach((user, index) => {
            trs.push(
                <tr key={ user.id }>
                    <td>{ index + 1 }</td>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.username }</td>
                    <td>{ user.email }</td>
                    <td>
                        <button onClick={ () => this.handleDeleteClick(user.id) }>xóa</button>
                    </td>
                </tr>
            )
        })
        return trs
    }

    render() {
        return (
            <div>
                <button onClick={ this.getData.bind(this) }>lấy data</button>
                <table cellPadding="5" cellSpacing="5" border="1" className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>name</th>
                        <th>user name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                    </thead>

                    <tbody>{ this.renderTr() }</tbody>
                </table>
            </div>
        );
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(User)
