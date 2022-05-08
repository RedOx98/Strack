import "./userList.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/SideBar";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id)=>{
        setData(data.filter((item=>item.id !== id)));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 150, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImage" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 120 },
        {
          field: 'age',
          headerName: 'Age',
          width: 100,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 200,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/users/"+params.row.id}> 
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </>
                )
            }
          },
      ];
      
      
      
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
        </div>
      </div>
    </div>
  )
}