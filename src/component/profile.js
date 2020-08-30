
import React, { useState, useEffect, user } from 'react';
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import styles from "../static/css/style.module.css";

const userList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' },
  ];

const Profile = (props) => {
    const _user = useSelector(state => state.topics.user, []) || {};
    const { email, password, name } = user || {}

    
    return (
        <>
            <Container style={{marginTop:'50px', marginBottom:'50px'}}>
                <h1 className={styles.title}>Profile</h1>
                <div className={styles.profilelist}>
                    <dl>
                        <dt>Email</dt>
                        <dd>wntmddjs0@naver.com</dd>
                    </dl>
                    <hr/>
                    <dl>
                        <dt>Name</dt>
                        <dd>{_user.username}</dd>
                    </dl>
                </div>
            </Container>
        </>
    )

}

export default Profile;