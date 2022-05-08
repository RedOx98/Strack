import Sidebar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import "./productsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductsList() {

    const [data, setData] = useState(productRows);
    const handleDelete = (id)=>{
        setData(data.filter((item=>item.id !== id)));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 150, renderCell: (params)=>{
            return (
                <div className="productListItem">
                    <img className="productListImage" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 120 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/products/"+params.row.id}> 
                    <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row.id)}/>
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
          <div className="products">
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
