import React from 'react'
import { NavLink }    from 'react-router-dom';

import Layout from 'component/layout/index.jsx'

import './index.scss'

class News extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="showPage">
                <Layout title="新闻" en="NEWS" />
                <div className="col-md-8 col-md-offset-2 news-main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default News;