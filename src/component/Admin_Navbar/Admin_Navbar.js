import React from "react";
import './Admin_Navbar.css';
import { Link, useLocation } from 'react-router-dom';


function Admin_Navbar() {
    const location = useLocation();

    return(
        <div id={'NavWrapper'}>
            <span id={'admin'}>
                <p>관리자님</p>
            </span>
            <span>
                <nav>
                    <ul >
                        <li id={'Big_list'}>
                            멘토링
                            <ul id={'small_list'}>
                                <li>멘토링 관리</li>
                                <li>
                                    <Link to="/Admin_Mento" className={`navigation_link ${location.pathname === '/Admin_Mento' ? 'active' : ''}`}>멘토 관리</Link> 
                                </li>
                                <li>
                                    <Link to="/Admin_Menti" className={`navigation_link ${location.pathname === '/Admin_Menti' ? 'active' : ''}`}>멘티 관리</Link>
                                </li>
                            </ul>
                        </li>
                        <li id={'Big_list'}>
                            프로그램 요청
                            <ul id={'small_list'}>
                                <li>폼 제작</li>
                                <li>설문 현황</li>
                            </ul>
                        </li>
                        <li id={'Big_list'}>
                            공지사항
                            <ul id={'small_list'}>
                                <li>공지사항</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </span>
        </div>
    )
}

export default Admin_Navbar;