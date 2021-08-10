import "./widgetLg.css"

export default function WidgetLg() {
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">News</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">By</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Title</th>
                    <th className="widgetLgTh">Description</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.discordapp.com/attachments/776974960345874453/873946188083232848/Venity-New-logo.png" 
                        alt="" 
                        className="widgetLgImg" 
                        />
                        <span className="widgetLgName">Alexa</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">Test Title</td>
                    <td className="widgetLgDesc">meow</td>
                </tr>
            </table>
        </div>
    )
}
