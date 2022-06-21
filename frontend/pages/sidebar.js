
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar=()=>{
return (
    <div>
        <div className="assap">
        <div className='avater'>
            <Avatar/>
            </div>
            <div className='icon'>
                <div>
                <ChatIcon/>
                </div>
                <div>
                <MoreVertIcon/>
                </div>
                </div>
                </div>
                <div className='asapSearch'>
                    <div>
                    <SearchIcon/>
                    </div>
                    <div className="textArea">
                    <input type="text" placeholder="search in chats"/>
                    </div>
                </div>
                <button className="btn">Start a new chat</button>
    </div>
)



}
export default Sidebar