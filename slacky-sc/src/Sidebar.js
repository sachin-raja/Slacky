import React,{useState, useEffect} from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import SidebarOptions from  './SidebarOptions.js';
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import db from './firebase';

function Sidebar() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,

            })))
        ))
    }, [])


    return (
        <div className = "sidebar">
            <div className="sidebar_header">
                <div className = "sidebar_info">
                    <h2> Slacky </h2>
                    <h3> <FiberManualRecordIcon/> The number 1</h3>
                </div>
                <CreateIcon />


            </div>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={InboxIcon} title="Mentions & reaction" />
            <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOptions Icon={AppsIcon} title="Apps" />
            <SidebarOptions Icon={FileCopyIcon} title="File browser" />
            <SidebarOptions Icon={ExpandLessIcon} title="Show Less" />
            <hr/>
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOptions Icon={AddIcon} addChannelOption />

            {/* connect to DB */}
            {/* side bar option */}
            {channels.map(channel => 
                <SidebarOptions title={channel.name} id={channel.id} />
                )}

        </div>
    )
}

export default Sidebar
