
import React from 'react'

import './index.scss'

class ShowMentor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            infoList: [
                {
                    name: '王帆',
                    img: '/src/component/showMentor/image/M_S.png',
                    type: 1, //0代表教师， 1代表创业
                    introduce: '如果需要点击某一个项目，使其靠到左边或者右边，剩余的space-between对齐可以构建一个div作为容器的第一个项目，这个项目中定义1、2、3、4这么四个子元素，他们的display设置为none。当点击外面相应数字的div时，将被点击的div的display设为none，将我们构建的div内的相应数字的div的display设为block即可。',
                    team:['Coding工作室', '冰山文创', '亦谷科技']
                },
                {
                    name: '王帆',
                    img: '/src/component/showMentor/image/M_S.png',
                    type: 0, //0代表教师， 1代表创业
                    introduce: '如果需要点击某一个项目，使其靠到左边或者右边，剩余的space-between对齐可以构建一个div作为容器的第一个项目，这个项目中定义1、2、3、4这么四个子元素，他们的display设置为none。当点击外面相应数字的div时，将被点击的div的display设为none，将我们构建的div内的相应数字的div的display设为block即可。',
                    team:['Coding工作室', '冰山文创', '亦谷科技']
                },
                {
                    name: '王帆',
                    img: '/src/component/showMentor/image/M_S.png',
                    type: 1, //0代表教师， 1代表创业
                    introduce: '如果需要点击某一个项目，使其靠到左边或者右边，剩余的space-between对齐可以构建一个div作为容器的第一个项目，这个项目中定义1、2、3、4这么四个子元素，他们的display设置为none。当点击外面相应数字的div时，将被点击的div的display设为none，将我们构建的div内的相应数字的div的display设为block即可。',
                    team:['Coding工作室', '冰山文创', '亦谷科技']
                },
                {
                    name: '王帆',
                    img: '/src/component/showMentor/image/M_S.png',
                    type: 0, //0代表教师， 1代表创业
                    introduce: '如果需要点击某一个项目，使其靠到左边或者右边，剩余的space-between对齐可以构建一个div作为容器的第一个项目，这个项目中定义1、2、3、4这么四个子元素，他们的display设置为none。当点击外面相应数字的div时，将被点击的div的display设为none，将我们构建的div内的相应数字的div的display设为block即可。',
                    team:['Coding工作室', '冰山文创', '亦谷科技']
                },
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
            <div className="mentor-main">
                {
                    this.state.infoList.map((item, index) => (
                        <div key={index} className="mentorBox" onClick = {() => {this.changeHidden(index)}} >
                            <div className="mentorImg">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="infoBox">
                                <div className="mentorName">{item.name}</div>
                                <div className="baseInfo">
                                    <div className="baseItem">
                                        <img src={item.type==0?"/src/component/showMentor/image/icon_3.png":"/src/component/showMentor/image/icon_2.png"} alt=""/>
                                        <span>{item.type==0?"教师":"创业"}</span>
                                    </div>
                                </div>
                                <div className={this.state.show == index?"showIntroduce":"mentorIntroduce"}>{item.introduce}</div>
                                <div className="moreBtn">
                                    <span>{this.state.show == index?"BACK":"MORE"}</span>
                                    <img src={this.state.show == index?"/src/component/showGroup/image/back.png":"/src/component/showGroup/image/more.png"} alt=""/>
                                </div>
                                <div className={this.state.show == index?"showMoreBox":"hiddenMoreBox"}>
                                    <div className="teamInfo">
                                        <div className="title">指导团队</div>
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

export default ShowMentor;