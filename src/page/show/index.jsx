import React from 'react'
import { NavLink }    from 'react-router-dom';

import Layout from 'component/layout/index.jsx'

import './index.scss'

class Show extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="showPage">
                <Layout title="展示" en="DSIPLAY" />
                <div className="col-md-8 col-md-offset-2 show-main">
                    <div className="menuBox">
                    <NavLink to="/show/mentor" className="linkBox" activeClassName="active-menu mentor-active">
                        <div className="itemBox mentorBox">
                            <div className="imgBox"></div>
                            <div className="en-title">MENTOR</div>
                            <div className="title">导师</div>
                        </div>
                    </NavLink>
                    <NavLink to="/show/group" className="linkBox" activeClassName="active-menu group-active">
                        <div className="itemBox groupBox">
                            <div className="imgBox"></div>
                            <div className="en-title">GROUP</div>
                            <div className="title">团队</div>
                        </div>
                    </NavLink>
                    <NavLink to="/show/project" className="linkBox" activeClassName="active-menu project-active">
                        <div className="itemBox projectBox">
                            <div className="imgBox"></div>
                            <div className="en-title">PROJECT</div>
                            <div className="title">项目</div>
                        </div>
                    </NavLink>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Show;