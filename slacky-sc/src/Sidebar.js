import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebar_header">
                <div className = "sidebar_info">
                    <h2> <FiberManualRecordIcon/> first</h2>
                    <h2> <FiberManualRecordIcon/> two</h2>
                    <h2> <FiberManualRecordIcon/> three </h2> 
                </div>
                <CreateIcon />
            </div>
        </div>
    )
}

export default Sidebar
