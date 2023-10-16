import React from 'react';
import './Admin_Header.css';


function Admin_Header() {

    return(
        <div className={'wrapper'}>
            <span id={'title'}>Smart 성동 교육 파트너</span>
            <span id={'admin_name'}>관리자 페이지</span>
        </div>
    )
}

export  default Admin_Header;