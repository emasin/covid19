import React from "react";
import TutorItem from "./tutor-item";

class Tutor extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <>
                <div className="tutor-container gray">
                    <h3 style={{ fontSize:'18px', padding:'30px 10px 0', color:'#999'}}>수업 가능한 튜터</h3>
                    <div className="tutor-list">
                            {data.map((contact, i) => {
                            return (
                                <TutorItem index={i} data={contact}></TutorItem>
                                )
                            })}
                    </div>
                </div>
            </>
        )
    }
}

export default Tutor;