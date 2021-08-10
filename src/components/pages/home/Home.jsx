import Featuredinfo from "../../featuredInfo/Featuredinfo"
import WidgetLg from "../../widgetLg/WidgetLg"
import WidgetSm from "../../widgetSm/WidgetSm"
import "./home.css"

export default function home() {
    return (
        <div className="home">
            <Featuredinfo />
            <div className="homewidgets">
                <WidgetSm/>
                <WidgetLg/>

            </div>

        </div>
    )
}
