import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions";
import { Link, Route } from 'react-router-dom';
import '../static/css/topics-detail.css';
class TopicsDetail extends React.Component {
    constructor(props) {
        super(props);

        this.showContent =  this.showContent.bind(this);
        this.showAd =  this.showAd.bind(this);

    }
    componentDidMount() {
        this.props.loadContentDetail(this.props.match.params.name);
    }
    showContent(url) {

        if(window.flutter_inappwebview) {
            window.flutter_inappwebview.callHandler('goto', url);
        }
    }

    showAd() {
        if(window.flutter_inappwebview) {
            window.flutter_inappwebview.callHandler('popAd', {uid: 'emasin'});
        }
    }

    render() {
        const {detailData,loadContentDetail} = this.props;



        return (
            <div className="">
                <div className="MuiGrid-root jss1 MuiGrid-container MuiGrid-spacing-xs-4 MuiGrid-justify-xs-center">
                    <div
                        className="MuiGrid-root jss2 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-5">
                        <div className="btn-all">
                            <Link to="/courses">
                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                     aria-hidden="true" role="presentation">
                                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                </svg>
                                <div className="sc-kAzzGY gNcfYJ">모든 과정</div>
                            </Link>
                        </div>
                        <div>
                    <span className="MuiBadge-root" overlap="circle">
                        <div className="MuiPaper-root MuiPaper-elevation1 MuiCard-root jss116 MuiPaper-rounded">
                            <div className="MuiCardMedia-root" title="커리큘럼 이미지">
                                <img width="100%" height="auto" alt="커리큘럼 이미지"
                                     src={detailData.img}/>
                            </div>
                            <div className="jss117">
                                <div>
                                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                                        <div className="MuiGrid-root MuiGrid-item">
                                            <h4 className="MuiTypography-root MuiTypography-h4 MuiTypography-colorTextPrimary">{detailData.title}</h4>
                                        </div>
                                    </div>
                                    <p className="MuiTypography-root limit-three-lines MuiTypography-body2 MuiTypography-colorTextSecondary">{detailData.cont}</p>
                                </div>
                                <div>
                                    <p className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary"></p>
                                    <div style={{marginBottom:'20px'}}>
                                        <button onClick={this.showAd.bind(this)}
                                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeLarge MuiButton-fullWidth"
                                            tabIndex="0" type="button">
                                            <span className="MuiButton-label">광고 보기</span>
                                            <span className="MuiTouchRipple-root"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="MuiBadge-badge jss119 MuiBadge-colorPrimary MuiBadge-invisible"></span>
                    </span>
                        </div>

                    </div>
                    <div
                        className="MuiGrid-root jss3 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-7">
                        <div className="MuiGrid-root jss187">
                            <h6 className="MuiTypography-root MuiTypography-h6">개요</h6>
                            <div className="MuiBox-root jss237"></div>
                            <div
                                className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column">
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1">이런 과정을 왜 수강해야 하나요?</h6>
                                    <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary">문법과
                                        어휘를 얼마나 배웠든 외국인과 말하는 것은 겁이 날 수 있습니다. 영어에 대한 기본 지식은 있지만, 영어로 말할 기회가 없었다면 이 코스틀 통해
                                        첫 영어 대화를 쉽게 시작할 수 있습니다.</p>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1">수강 후 어떤 능력이 향상되나요?</h6>
                                    <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary">이
                                        코스는 CEFR A2 레벨의 어휘를 다룹니다. 다양한 공통, 일상 주제에 대해 말하는 학습 중에 자신감을 얻게 됩니다. 또한, 강사가 정답을
                                        알려주고 실수를 짚어주면서 절대적인 문법 지식을 얻게 됩니다.</p>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1">경험 레벨/과정 길이</h6>
                                    <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary">{detailData.smtxt}</p>
                                </div>

                                <div className="MuiGrid-root MuiGrid-item">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1">사전요건</h6>
                                    <p className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary">자신에
                                        대한 소개와 어디에서 왔는지, 그리고 간단한 문장을 영어로 말할 수 있게 됩니다. 아직 기본적인 소개에 익숙하지 않은 경우, '영어 대화
                                        101' 코스로 시작해보세요.</p>
                                </div>
                            </div>
                        </div>
                        <div className="MuiBox-root jss189"></div>
                        <div
                            className="MuiGrid-root jss190 MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column">
                            <div className="MuiGrid-root MuiGrid-item">
                                <nav className="MuiList-root jss191 MuiList-padding MuiList-subheader">
                                    <h6 className="MuiTypography-root jss192 MuiTypography-h6">강의 요강</h6>
                                    <div className="MuiBox-root jss242"></div>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">1</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">
                                                <a href="#" onClick={this.showContent.bind(this,'https://www.youtube.com/watch?v=IpGNWFFsjA4&t=792s')}> ES6 문법 액기스(1) - 템플릿 스트링과 전개 연산자 </a>
                                            </h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">2</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">
                                                <a href="#" onClick={this.showContent.bind(this,'https://d2.naver.com/helloworld/9297403')}> React 적용 가이드 - React 작동 방법 </a> </h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">3</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">
                                                <a href="#" onClick={this.showContent.bind(this,'https://d2.naver.com/helloworld/4966453')}>React 적용 가이드 - 네이버 메일 모바일 웹 적용기 </a></h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">4</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">The
                                                Best Pet</h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">5</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">Having
                                                Fun in Your Free Time</h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">6</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">Your
                                                Daily Routine</h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">7</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">Childhood
                                                Memories</h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">8</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">Your
                                                Family Members</h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">9</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">Your
                                                Hometown</h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                    <li className="MuiListItem-root jss193 jss194 MuiListItem-gutters">
                                        <div className="MuiListItemIcon-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">10</h6>
                                        </div>
                                        <div className="MuiListItemText-root">
                                            <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextSecondary">Shopping
                                                Habits</h6>
                                        </div>
                                        <div className="MuiListItemIcon-root"></div>
                                    </li>
                                </nav>
                            </div>
                        </div>
                        <div className="MuiBox-root jss195"></div>

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        detailData: state.topics.detailData || {},
        loadContentDetail : state.topics.loadContentDetail

    };

};

export default connect(mapStateToProps, actionCreators)(TopicsDetail); ;