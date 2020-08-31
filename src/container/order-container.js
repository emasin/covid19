import React from 'react';

import '../static/css/style.css'
import Order from "../page/order";


class HomeContainer extends React.Component {


    render() {
        const {data} = this.props;
        console.log(data);
        return (
            <>
                <Order data={data}></Order>

            </>
        )
    }
}



export default  (HomeContainer);