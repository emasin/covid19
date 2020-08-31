import React from 'react';

import '../static/css/style.css'
import Home from "../page/home";


class HomeContainer extends React.Component {


    render() {
        const {data} = this.props;
        console.log(data);
        return (
            <>
                <Home data={data}></Home>

            </>
        )
    }
}



export default  (HomeContainer);