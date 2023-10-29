import React from "react";
import './Participant.css';

var testArr = [
    { name: "홍길동", sex: '남', age: 23, part: '진로', document: "홍길동 지원서 입니다.", accept: false },
    { name: "김혜진", sex: '여', age: 24, part: '입시', document: "김혜진 지원서 입니다.", accept: true },
    { name: "전도연", sex: '여', age: 30, part: '과목', document: "전도연 지원서 입니다.", accept: true }
];

var title = ['번호', '이름', '성별', '나이', '지원분야', '지원서', '관리'];

function Participant() {


    return(
        <>
            <div  id={'listWrapper'}>
                <div id={'btnList'}>
                    <span>가나다순</span>
                    <button>신청자 저장하기</button>
                </div>
                <div id={'listTitle'}>
                    <div id={'checkEx'}></div>
                    {title.map((obj, idx) => (
                        <span>{obj}</span>
                    ))}
                    {testArr.map((obj, idx) => (
                        <div id={'participant_List'}>
                            <input type={"checkbox"} id={'checkBox'}></input>
                            <span>{idx+1}</span> <span>{obj.name}</span> <span>{obj.sex}</span> <span>{obj.age}</span><span>{obj.part}</span>
                            <button>상세보기</button> <button>{obj.accept ? "합격" : "불합격"}</button>
                        </div>
                            ))}
                </div>
            </div>
        </>
    )
}

export default Participant;