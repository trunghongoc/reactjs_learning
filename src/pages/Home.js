import React, { Component } from 'react'
import DoiMau from './../components/DoiMau'
import ColorResult from './../components/ColorResult'
import InputText from './../components/InputText'
import WrapTmpText from './../components/WrapTmpText'

class Home extends Component {
    render() {
        return (
            <div>
                <p>trang home</p>
                <DoiMau/>
                <ColorResult/>
                <InputText/>
                <WrapTmpText/>
            </div>
        )
    }
}
  
export default Home
