import DatePicker from 'react-datepicker';
import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './Calendar.css';
const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className={'calendarWrapper'}>
                <div className={'startDate'}>
                    <DatePicker
                        dateFormat='yyyy.MM.dd' // 날짜 형태
                        // shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsEnd
                        minDate = {new Date()}
                        startDate = {startDate}
                        endDate = {endDate}
                    />

                </div>
                <span id={'startSpan'}>부터</span>
                <div className={'endDate'}>
                    <DatePicker
                        dateFormat='yyyy.MM.dd' // 날짜 형태
                        // shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate = {startDate}
                        endDate = {endDate}
                        minDate = {startDate}
                    />

                </div>
                <span id={'endSpan'}> 까지</span>
                <div>
                    <input id={'maximum'}/>
                    <span id={'maxSpan'}> 명까지</span>
                </div>

            </div>




        </>

    );
};

export default Calendar;