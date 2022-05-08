import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

function Featuredinfo() {
  return (
    <div className="featured">
    <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">NGN1,500</span>
              <span className="featuredMoneyRate">
              -10.4<ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">NGN3,140</span>
              <span className="featuredMoneyRate">
              -15.5<ArrowDownward className="featuredIcon negative"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">NGN4,000</span>
              <span className="featuredMoneyRate">
              -11.4<ArrowUpward className="featuredIcon"/>
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default Featuredinfo;