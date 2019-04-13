

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './index.scss'

class NavTop extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="nav">
                <div className="left-box">
                    <div className="logo-box">
                        <NavLink to="/">
                            <img src="/src/component/navTop/image/logo.png" alt=""/>
                    </NavLink>
                    </div>
                    <ul className="nav-box">
                        <li className="nav-item">
                            <NavLink to="/news">
                                <span>新闻</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/show">
                                <span>展示</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product">
                                <span>项目</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/">
                                <span>加入我们</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="login">
                    <NavLink to="/">
                        <span>登陆</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default NavTop