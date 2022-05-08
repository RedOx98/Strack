import Sidebar from "../../components/sidebar/SideBar"
import Topbar from "../../components/topbar/Topbar"
import "./newUser.css"


export default function NewUser() {
  return (
    <div>
      <Topbar />
      <div className="container">
          <Sidebar />
          <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
              <div className="newUserItem">
                  <label>Username</label>
                  <input placeholder="John" type="text"/>
              </div>
              <div className="newUserItem">
                  <label>Full Name</label>
                  <input placeholder="John Smith" type="text"/>
              </div>
              <div className="newUserItem">
                  <label>Email</label>
                  <input placeholder="John@gmail.com" type="email"/>
              </div>
              <div className="newUserItem">
                  <label>Password</label>
                  <input placeholder="John" type="password"/>
              </div>
              <div className="newUserItem">
                  <label>Phone</label>
                  <input placeholder="+234812345678" type="text"/>
              </div>
              <div className="newUserItem">
                  <label>Address</label>
                  <input placeholder="Austin Texas, Lagos" type="password"/>
              </div>
              <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male"/>
                  <label for="male">Male</label>
                  <input type="radio" name="gender" id="female" value="female"/>
                  <label for="female">Female</label>
                  <input type="radio" name="gender" id="other" value="other"/>
                  <label for="other">Other</label>
                  </div>
                  <div className="newUserItem">
                  <label>Active</label>
                  <select className="newUserSelect" name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  </div>
              </div>
              <button className="newUserButton">Create</button>
          </form>
          </div>
      </div>
    </div>
  )
}
