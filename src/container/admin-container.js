import React from 'react';

import '../static/css/style.css'
import AdminPage from "../page/admin/index";


class AdminContainer extends React.Component {


    render() {
        const {data} = this.props;

        return (
            <>
                <AdminPage data={data}></AdminPage>

            </>
        )
    }
}



export default  (AdminContainer);