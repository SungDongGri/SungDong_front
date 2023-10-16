import React from 'react';
import './Admin_Menti.css';
import Navbar from '../../component/Admin_Navbar/Admin_Navbar';
import Admin_Wrap from '../../component/Admin_Wrap/Admin_Wrap';
import Admin_Header from '../../component/Admin_Header/Admin_Header';
function Admin_Menti() {

    return(
        <>
            <div className={"Wrapper"}>
                <Admin_Header />
                <Navbar />
                <Admin_Wrap />
            </div>
        </>
    )
}

export default Admin_Menti;