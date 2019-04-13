import React from 'react'

import NavTop from 'component/navTop/index.jsx'

import './index.scss'

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.title,
            en: this.props.en
        }
    }
    render(){
        return(
            <div>
                <div className="header">
                    <NavTop />
                    <div className="col-md-12 header-box">
                        <img src="/src/component/layout/image/head.png" width="100%" height="50%" />
                        <div className="titleBox">
                            <div className="col-md-2 col-md-offset-5 title">
                                <div className="en-title">
                                    <span>{this.state.en}</span>
                                </div>
                                <div className="cn-title">
                                    <span>{this.state.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Layout;