import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
      return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle"> Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImage" src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt="user"/>
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2, Jun, 2021</td>
          <td className="widgetLgAmount">NGN500</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImage" src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt="user"/>
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2, Jun, 2021</td>
          <td className="widgetLgAmount">NGN500</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImage" src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt="user"/>
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2, Jun, 2021</td>
          <td className="widgetLgAmount">NGN500</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImage" src="https://th.bing.com/th/id/OIP.U29YoCAgIzO-dMQTQGZLTQHaF7?w=266&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt="user"/>
            <span className="widgetLgName"> Susan Carol</span>
          </td>
          <td className="widgetLgDate">2, Jun, 2021</td>
          <td className="widgetLgAmount">NGN500</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}
