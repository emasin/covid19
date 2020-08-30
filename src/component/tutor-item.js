import React from "react";
import '../static/css/tutor.css';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from '@material-ui/lab/Rating';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ReactPlayer from 'react-player';
import TopicsListItem from "./topics-list-item";
import { Link, Route } from 'react-router-dom';

class TutorItem extends React.Component {
        state = { show: false };
        handleShow = () => {
            this.setState({ show: true });
        }
        handleClose = () => {
            this.setState({ show: false });
        }
    render() {
        const data = this.props.data;
        
        return (
            <>
            <a key={this.props.index} onClick={this.handleShow} href="#none" style={{display:'inline-block', textDecoration:'none', color:'#444'}}>
                <div className="card" style={{ width:'100%', padding:'16px', borderRadius:'8px', border:'none'}}>
                    <Figure style={{display:'flex'}}>
                        <Figure.Image style={{ marginRight:'16px', borderRadius:'8px'}} width={100} height={100} alt="100x100" src="https://camblyavatars.s3.amazonaws.com/5e79c033b65004aa26b6080es200"/>
                        <span className="icon on"></span>{/* class on 초록, off 빨강, 기본값 회색 */}
                        <Figure.Caption>
                            <span className="tutor-name">{data.name}</span>
                            <span className="checkicon">
                                <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH"/>}/>
                            </span>
                            <div className="tutor-wrab">
                            <div className="stars">
                                <Rating name="size-small" defaultValue={4.5} precision={0.5} size="small" readOnly/>
                                <span className="eval">4.85</span><span className="eval">&bull; 강사추천</span>
                            </div>
                            <div className="country">
                                <img id="badge" alt="flag of Great Britain" src="https://www.cambly.com/static/images/country-flag-icons/GB.png" />
                                <span>{data.nation}</span>
                            </div>
                            <div className="classbox">
                                {data.tag}
                            </div>
                            </div>
                        </Figure.Caption>
                    </Figure>
                    <p className="tutor-txt">{data.title}</p>
                    <div className="card-button">
                        <Button type="submit" style={{ backgroundColor:'#eee', color:'#000', border:'none', fontSize:'12px', padding:'8px 20px' }}>프로필</Button> <Button href="#" style={{ backgroundColor:'#228891', border:'none', fontSize:'12px', padding:'8px 20px', margin: '0 3px'}}>통화</Button>
                    </div>
                </div>
            </a>
            <Modal className="modal" show={this.state.show} onHide={this.handleClose} animation={false}>
                <Modal.Header style={{display:'block'}} closeButton>
                    <span className="checkicon">
                        <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH"/>}/>
                    </span>
                    <div className="header-cont">
                        <Figure style={{display:'flex'}}>
                            <Figure.Image style={{ marginRight:'16px', borderRadius:'100%'}} width={100} height={100} alt="100x100" src="https://camblyavatars.s3.amazonaws.com/5e79c033b65004aa26b6080es200"/>
                            <span className="icon on"></span>{/* class on 초록, off 빨강, 기본값 회색 */}
                            <Figure.Caption style={{margin:'20px'}}>
                                <span className="tutor-name">{data.name}</span>
                                <div className="tutor-wrab">
                                    <div className="country">
                                        <img id="badge" alt="flag of Great Britain" src="https://www.cambly.com/static/images/country-flag-icons/GB.png" />
                                        <span>London, England</span>
                                    </div>
                                </div>
                            </Figure.Caption>
                        </Figure>
                        <Button href="#" style={{ backgroundColor:'#228891',  width:'100%', border:'none', fontSize:'12px', padding:'8px 20px', margin: '0 3px'}}>지금 수업하기</Button>
                    </div>
                </Modal.Header>
                <Modal.Body style={{overflowY:'scroll', padding:'0 20px 35px'}}>
                    <div className="cont-box" style={{marginTop:'20px'}}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=7C2z4GqqS5E' playing controls width="100%" height="300px"/>
                    </div>
                    <div className="cont-box flex">
                        <div className="stars">
                            <Rating name="size-small" defaultValue={4.5} precision={0.5} size="small" readOnly/>
                            <span className="eval">4.89</span>
                        </div>
                        <div className="classbox">
                            <span>1,000회+ 수업</span>
                        </div>
                        <div className="classbox">
                            <span>교사 자격증</span>
                        </div>
                    </div>
                    <div className="cont-box" style={{paddingBottom:'20px'}}>
                        <div style={{fontSize:'1.6rem', lineHeight:'1.5', textAlign:'center', marginBottom:'20px'}}>{data.title}</div>
                        <Button>한국어(으)로 번역</Button>
                    </div>
                    <div className="cont-box" style={{borderTop:'1px solid #dee2e6'}}>
                        <h6 style={{fontSize:'2rem', lineHeight:'1.6', marginBottom:'20px'}}>자기소개</h6>
                        <div className="detail-box">
                            <p style={{fontSize:'1.8rem', lineHeight:'1.5', marginBottom:'10px'}}>언어</p>
                            <span>영어 (원어민: 미국 억양)</span><span>터키어 (유창함)</span><span>아랍어 (기초 수준)</span><span>스페인어 기초수준</span>
                        </div>
                        <div className="detail-box">
                            <p style={{fontSize:'1.8rem', lineHeight:'1.5', marginBottom:'10px'}}>전문분야</p>
                            <span>연설지도</span><span>억양지도</span><span>문화</span><span>편안한 대화</span>
                        </div>
                        <div className="detail-box">
                            <p style={{fontSize:'1.8rem', lineHeight:'1.5', marginBottom:'10px'}}>관심분야</p>
                            <p>Travel, reading, writing, blogging, bicycling, going to concerts and music festivals (all kinds of music), cats, learning to play the accordion! I also enjoy exchanging postcards with other people all over the world!</p>
                            <Button>한국어(으)로 번역</Button>
                        </div>
                    </div>
                    <div className="cont-box" style={{borderTop:'1px solid #dee2e6'}}>
                        <h6 style={{fontSize:'2rem', lineHeight:'1.6', marginBottom:'20px'}}>이력서</h6>
                        <div className="detail-box">
                            <p style={{fontSize:'1.8rem', lineHeight:'1.5', marginBottom:'10px'}}>학력</p>
                            <p>University of Minnesota, Cultural Studies (B.A.) and Second Languages and Cultures (MEd.)</p>
                            <Button>한국어(으)로 번역</Button>
                        </div>
                    </div>
                    <div className="cont-box" style={{borderTop:'1px solid #dee2e6'}}>
                        <h6 style={{fontSize:'2rem', lineHeight:'1.6', marginBottom:'20px'}}>커리큘럼</h6>
                        <div className="detail-box">
                            <div style={{overflow:'hidden',overflowX:'auto', marginTop:'10px'}}>
                                <div className="card-list" >
                                    ..list
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cont-box" style={{borderTop:'1px solid #dee2e6'}}>
                        <h6 style={{fontSize:'2rem', lineHeight:'1.6', marginBottom:'20px'}}>일정</h6>
                        <p style={{fontSize:'1.8rem', lineHeight:'1.5', marginBottom:'10px'}}>요일을 선택하세요</p>
                        <div className="detail-box">
                            ..calender
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            </>
        )
    }
}

export default TutorItem;