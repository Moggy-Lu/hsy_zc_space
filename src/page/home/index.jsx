

import React from 'react'

import NavTop from 'component/navTop/index.jsx'

import './index.scss'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      /**模拟数据 */
      projectList: [
        {
          time: '2018.01.01',
          name: '众创空间官网',
          introduce: '由创业学院的coding工作室独立完成，包括网站上传和维护',
          logoUrl: '/src/page/home/image/team-logo.png'
        },
        {
          time: '2018.01.01',
          name: '众创空间官网',
          introduce: '由创业学院的coding工作室独立完成，包括网站上传和维护',
          logoUrl: '/src/page/home/image/team-logo.png'
        },
        {
          time: '2018.01.01',
          name: '众创空间官网',
          introduce: '由创业学院的coding工作室独立完成，包括网站上传和维护',
          logoUrl: '/src/page/home/image/team-logo.png'
        },
        {
          time: '2018.01.01',
          name: '众创空间官网',
          introduce: '由创业学院的coding工作室独立完成，包括网站上传和维护',
          logoUrl: '/src/page/home/image/team-logo.png'
        }
      ],
      teamList: [
        {
          photo: '/src/page/home/image/img_club_1.png',
          time: '2018.01.01',
          name: 'CODING 工作室',
          trade: '软件开发'
        },
        {
          photo: '/src/page/home/image/img_club_2.png',
          time: '2018.01.01',
          name: 'CODING 工作室',
          trade: '软件开发'
        },
        {
          photo: '/src/page/home/image/img_club_3.png',
          time: '2018.01.01',
          name: 'CODING 工作室',
          trade: '软件开发'
        }
      ],
      cooperateList: [
        {
          url: '/src/page/home/image/LOGO_1.png'
        },
        {
          url: '/src/page/home/image/LOGO_2.png'
        },
        {
          url: '/src/page/home/image/LOGO_3.png'
        },
        {
          url: '/src/page/home/image/LOGO_4.png'
        },
        {
          url: '/src/page/home/image/LOGO_5.png'
        }
      ]
    }
  }
    render(){
      return (
        <div className="main">
          <div className="header">
            <NavTop />
            <div className="col-md-12 header-box">
              <img src="/src/page/home/image/img_head.png" width="100%" />
            </div>
          </div>
          <div className="col-md-12 newsBox">
            <div className="col-md-2 item-title col-md-offset-5">
              <span>新闻</span>
            </div>
            <div className="news-main col-md-8 col-md-offset-2">
              <table>
                <tbody>
                  <tr>
                    <td className="news-last">LAST NEWS</td>
                    <td className="item-time">2019.01.01</td>
                    <td className="item-text"> 浙江工商大学杭州商学院创业学院俱乐部2017年度创新创业项目训练计划结果公示</td>
                  </tr>
                  <tr>
                    <td className="news-last">LAST NEWS</td>
                    <td className="item-time">2019.01.01</td>
                    <td className="item-text"> 浙江工商大学杭州商学院创业学院俱乐部2017年度创新创业项目训练计划结果公示</td>
                  </tr>
                  <tr>
                    <td className="news-last">LAST NEWS</td>
                    <td className="item-time">2019.01.01</td>
                    <td className="item-text"> 浙江工商大学杭州商学院创业学院俱乐部2017年度创新创业项目训练计划结果公示</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-2 col-md-offset-8 more-btns">
                <div className="more">READ MORE</div>
              </div>
          </div>
          <div className="col-md-12 projectBox">
            <div className="col-md-2 item-title col-md-offset-5">
              <span>项目</span>
            </div>
            <div className="project-main col-md-8 col-md-offset-2">
              {
                this.state.projectList.map((item, index) => (
                  <div key={index} className="projectItem">
                    <div className="item-time">{item.time}</div>
                    <div className="item-name">{item.name}</div>
                    <div className="item-introduce">{item.introduce}</div>
                    <div className="logoImg">
                      <img src={item.logoUrl} />
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="col-md-8 col-md-offset-1 backImg">
              <img width="100%" src="/src/page/home/image/img_project.png" />
            </div>
            <div className="col-md-2 col-md-offset-8 more-btns">
                <div className="more">READ MORE</div>
              </div>
          </div>
          <div className="col-md-12 teamBox">
            <div className="col-md-2 item-title col-md-offset-5">
                <span>团队</span>
            </div>
            <div className="col-md-6 team-main col-md-offset-3">
              <div className="leftBox">
                <div className="teamPhoto">
                  <img src={this.state.teamList[0].photo} />
                </div>
                <div className="teamInfo">
                  <div className="teamTime">{this.state.teamList[1].time}成立</div>
                  <div className="teamName">{this.state.teamList[1].name}</div>
                  <div className="team-btn">
                    <div className="teamTrade">方向 / {this.state.teamList[1].trade}</div>
                    <div className="team-bt">了解团队</div>
                  </div>
                </div>
                <div className="teamPhoto">
                  <img src={this.state.teamList[2].photo} />
                </div>
              </div>
              <div className="rightBox">
                <div className="teamInfo">
                  <div className="teamTime">{this.state.teamList[0].time}成立</div>
                  <div className="teamName">{this.state.teamList[0].name}</div>
                  <div className="team-btn">
                    <div className="teamTrade">方向 / {this.state.teamList[0].trade}</div>
                    <div className="team-bt">了解团队</div>
                  </div>
                </div>
                <div className="teamPhoto">
                  <img src={this.state.teamList[1].photo} />
                </div>
                <div className="teamInfo">
                <div className="teamTime">{this.state.teamList[2].time}成立</div>
                  <div className="teamName">{this.state.teamList[2].name}</div>
                  <div className="team-btn">
                    <div className="teamTrade">方向 / {this.state.teamList[2].trade}</div>
                    <div className="team-bt">了解团队</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-md-offset-5 more-btns">
              <div className="more">READ MORE</div>
            </div>
          </div>
          <div className="col-md-12 spaceBox">
            <div className="col-md-2 item-title col-md-offset-5">
                <span>场地</span>
            </div>
            <div className="col-md-8 col-md-offset-2 space-main">
              <div className="leftItem photo-item">
                <img src="/src/page/home/image/img_place_1.png" />
              </div>
                <div className="rightItem">
                <div className="topItem">
                  <div className="photo-item">
                    <img src="/src/page/home/image/img_place_2.png" alt=""/>
                  </div>
                  <div className="photo-item">
                    <img src="/src/page/home/image/img_place_3.png" alt=""/>
                  </div>
                </div>
                <div className="bottomItem">
                  <div className="photo-item">
                    <img src="/src/page/home/image/img_place_4.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 cooperateBox">
            <div className="col-md-2 item-title col-md-offset-5">
              <span>合作</span>
            </div>
            <div className="col-md-8 col-md-offset-2 cooperate-main">
              {
                this.state.cooperateList.map((item, index) => (
                  <div key={index} className="logoItem">
                    <img src={item.url} alt=""/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mart-footer">
              <div className="footer-first">
                <div className="col-md-8 col-md-offset-2 firstBox">
                </div>
              </div>
          </div>
        </div>
      )
    }
  }

  export default Home; 