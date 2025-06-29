import TOPBAR from "./composants/topbar"
import BANIERE from "./composants/baniere"

export default function HEADER(){

    return(
        <div className="header">
            <TOPBAR />
            <BANIERE/>
        </div>
    )

}