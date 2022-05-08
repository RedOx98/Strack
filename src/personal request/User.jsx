import "./user.css";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/SideBar";
import { CalendarToday, Input, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar className="this"/>
        <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="userShowImg"/>
                </div>
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                   
                    <div className="userShowInfo">
                    <CalendarToday className="userShowIcon"/>
                    <span className="userShowInfoTitle">10.12.2005</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon"/>
                    <span className="userShowInfoTitle">+23412345678</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon"/>
                    <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon"/>
                    <span className="userShowInfoTitle">21, Austin Texas, Lagos</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateform">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label >Username</label>
                            <input type="text"
                            placeholder="annabeck99" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Full Name</label>
                            <input type="text"
                            placeholder="Anna Becker" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Email</label>
                            <input type="text"
                            placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Phone</label>
                            <input type="text"
                            placeholder="+234812345678" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Address</label>
                            <input type="text"
                            placeholder="Austin Texas, Lagos" className="userUpdateInput"/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="userUpdateImg"/>
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
