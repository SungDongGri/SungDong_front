import React, {useState} from 'react';
import './Admin_Mento.css';
import Navbar from '../../component/Admin_Navbar/Admin_Navbar';
import Admin_Wrap from '../../component/Admin_Wrap/Admin_Wrap';
import Admin_Header from '../../component/Admin_Header/Admin_Header';
import Calendar from "../../component/Calendar/Calendar";
import Participant from "../../component/Participant/Participant";
function Admin_Mento() {

    //나중에 백에서 현재 진행중인 멘토링 유무 불러와서 저장
    const [isIng, setIsIng] = useState(false);


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
            {isIng ? <Calendar /> : <div><div id={'placehorder'}>멘토 모집이 시작되지 않았습니다.</div><div id={'placehorder2'}>멘토 모집이 시작되지 않았습니다.</div><button id={'startMentoring'} onClick={() => {setIsIng(!isIng) }}>모집하기</button></div>}
            <div id={'mentoList'}>멘토 신청 현황</div>
            <Participant />
            <button className={'submit'}>결과 저장하기</button>
        </div>
    )
}

export default Admin_Mento;