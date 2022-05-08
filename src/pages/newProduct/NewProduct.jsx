import "./newProduct.css";
import Sidebar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { Publish } from "@material-ui/icons";
import { productData } from "../../dummyData";

export default function NewProduct() {
  return (
    <div>
      <Topbar />
          <div className="container">
          <Sidebar />
          <div className="product">
          <div className="productTitleContainer">
              <h1 className="productTitle">Product</h1>
              <Link to="/newproduct">
              <button className="productAddButton">Create</button>
              </Link>
          </div>
          
          <div className="productBottom">
              <form className="productForm">
                  <div className="productFormLeft">
                      <label>Product Name</label>
                      <input type="text" placeholder="Apple Airpod"/>
                      <label>In Stock</label>
                      <select name="inStock" id="inStock">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                      <label>Active</label>
                      <select name="active" id="active">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                  </div>
                  <div className="productFormRight">
                      <div className="productUpload">
                          <img className="productUploadImg" src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
                          <label for="file">
                              <Publish />
                          </label>
                          <input type="file" id="file" style={{display: "none"}} />
                      </div>
                      <button className="productButton">Update</button>
                  </div>
              </form>
          </div>
          </div>
      </div>
    
    </div>
  )
}
