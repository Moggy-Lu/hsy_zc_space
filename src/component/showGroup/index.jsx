
import React from 'react'

import './index.scss'

class ShowGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            infoList: [
                {
                    name: 'CODING工作室',
                    img: '/src/component/showGroup/image/G_S.png',
                    number: 6,
                    type: '编程',
                    introduce: '如果需要点击某一个项目，使其靠到左边或者右边，剩余的space-between对齐可以构建一个div作为容器的第一个项目，这个项目中定义1、2、3、4这么四个子元素，他们的display设置为none。当点击外面相应数字的div时，将被点击的div的display设为none，将我们构建的div内的相应数字的div的display设为block即可。',
                    mentor: '王帆',
                    team:['卢山', '卢山', '卢山', '卢山', '卢山']
                },
                {
                    name: 'CODING工作室',
                    img: '/src/component/showGroup/image/G_S.png',
                    number: 6,
                    type: '编程',
                    introduce: '这是Coding工作室',
                    mentor: '王帆',
                    team:['卢山', '卢山', '卢山', '卢山', '卢山']
                },
                {
                    name: 'CODING工作室',
                    img: '/src/component/showGroup/image/G_S.png',
                    number: 6,
                    type: '编程',
                    introduce: '这是Coding工作室',
                    mentor: '王帆',
                    team:['卢山', '卢山', '卢山', '卢山', '卢山']
                },
                {
                    name: 'CODING工作室',
                    img: '/src/component/showGroup/image/G_S.png',
                    number: 6,
                    type: '编程',
                    introduce: '这是Coding工作室',
                    mentor: '王帆',
                    team:['卢山', '卢山', '卢山', '卢山', '卢山']
                }
            ],
            show: null,
        }
    }
    changeHidden(index){
        if(index == this.state.show){
            this.setState({
                show: null
            })
        }
        else{
            this.setState({
                show: index
            })
        }
    }
    render(){
        return(
            <div className="group-main">
                {
                    this.state.infoList.map((item, index) => (
                        <div key={index} className="groupBox" onClick = {() => {this.changeHidden(index)}} >
                            <div className="teamImg">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="infoBox">
                                <div className="teamName">{item.name}</div>
                                <div className="baseInfo">
                                    <div className="baseItem">
                                        <img src="/src/component/showGroup/image/icon_1.png" alt=""/>
                                        <span>{item.number}人</span>
                                    </div>
                                    <div className="baseItem">
                                        <img src="/src/component/showGroup/image/icon_2.png" alt=""/>
                                        <span>{item.type}</span>
                                    </div>
                                </div>
                                <div className={this.state.show == index?"showIntroduce":"teamIntroduce"}>{item.introduce}</div>
                                <div className="moreBtn">
                                    <span>{this.state.show == index?"BACK":"MORE"}</span>
                                    <img src={this.state.show == index?"/src/component/showGroup/image/back.png":"/src/component/showGroup/image/more.png"} alt=""/>
                                </div>
                                <div className={this.state.show == index?"showMoreBox":"hiddenMoreBox"}>
                                    <div className="mentorInfo">
                                        <div className="title">指导老师</div>
                                        <div className="text">{item.mentor}</div>
                                    </div>
                                    <div className="teamPeople">
                                        <div className="title">团队成员</div>
                                        <div className="text">
                                            {
                                                item.team.map((name, teamIndex) => (
                                                    <span key={teamIndex}>{name}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ShowGroup;