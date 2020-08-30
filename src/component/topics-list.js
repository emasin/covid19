import React from "react";
import TopicsListItem from "./topics-list-item";
class TopicsList extends React.Component {
    render() {
        const data = this.props.data;
        const lists = [
            {
                id: 1,
                bigtext: '프론트엔드 개발의 기본요소',
                smtext: '간단한 웹 개발로 자신감을 키워보세요. 간단한 웹 화면 부터 복잡한 웹 프로그래밍 까지, 다양한 예제와 강의를 통해 배울 수 있습니다.'
            },
            {
                id: 2,
                bigtext: "Let's start React!",
                smtext: '여러분을 조금 더 멋진 프론트엔드 개발자로 안내 합니다. '
            },
            {
                id: 3,
                bigtext: '자신을 표현해보세요',
                smtext: '영어를 배우면 전 세계 사람들과 더 쉽게 교류할 수 있습니다. 요즘 화두가 되는 다양한 주제를 탐색하면서 특정 분야 어휘를 확장하고, 다른 문화와 관점에 대해 배워보세요!'
            }
        ];
        return (
            <>
            <div style={{paddingTop:'30px'}}>
                <div style={{margin:'0 10px'}}>
                    <h4 className="subtit">{lists[0].bigtext}</h4>
                    <p className="subtxt">{lists[0].smtext}</p>
                </div>
                <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                    <div className="card-list" >
                        {data.map((topic, i) => {
                        return (
                        <TopicsListItem index={i} data={topic}></TopicsListItem>
                            )
                        })}
                    </div>
                </div>
            </div>

                <div style={{paddingTop:'30px'}}>
                    <div style={{margin:'0 10px'}}>
                        <h4 className="subtit">{lists[1].bigtext}</h4>
                        <p className="subtxt">{lists[1].smtext}</p>
                    </div>
                    <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                        <div className="card-list" >
                            {data.map((topic, i) => {
                                return (
                                    <TopicsListItem index={i} data={topic}></TopicsListItem>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default TopicsList;