import React from 'react';
import MainBar from './MainBar.js';
import SideBar from './SideBar.js';
import TopBar from './TopBar.js';

export default function MainPageBody() {
    return (
        <div className="MainPageBody">
            <TopBar />
            <div className="divCon">
                <MainBar />
                <SideBar />
            </div>
        </div>
    )
}
