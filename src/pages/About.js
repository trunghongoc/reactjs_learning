import React, { Component } from 'react'
import ColorResult from './../components/ColorResult'

class About extends Component {
    constructor(props) {
        super(props)
        console.log('about:', props)
    }

    render() {
        return (
            <div>
                <p>trang about</p>
                <ColorResult/>
            </div>
        );
    }
}
  
export default About