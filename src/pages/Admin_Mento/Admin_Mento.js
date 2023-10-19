import React, {useState} from 'react';
import './Admin_Mento.css';
import Navbar from '../../component/Admin_Navbar/Admin_Navbar';
import Admin_Wrap from '../../component/Admin_Wrap/Admin_Wrap';
import Admin_Header from '../../component/Admin_Header/Admin_Header';
import Calendar from "../../component/Calendar/Calendar";
function Admin_Mento() {

    //나중에 백에서 현재 진행중인 멘토링 유무 불러와서 저장
    const [isIng, setIsIng] = useState(true);


    return(
        <div id={"Wrapper"}>
            <Admin_Header />
            <Navbar />
            <Admin_Wrap><div>멘토링 관리</div></Admin_Wrap>
            <div id={'mento-Menagement'}>멘토 관리</div>
            <div id={'present-Mentoring'}>진행중인 멘토링</div>
            <div id={'mento-DeadLine'}>멘토 지원 기간</div>
            <div id={'data-Mentoring'}>2023년 멘토링 3기</div>
            <div id={'mento-Max'}>지원 최대 인원</div>
            {isIng ? <Calendar /> : <div>없음</div>}
        </div>
    )
}

export default Admin_Mento;