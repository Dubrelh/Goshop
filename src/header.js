import TOPBAR from "./composants/topbar"
import BANIERE from "./composants/baniere"
import TOPHONE from "./composants/tophone"

export default function HEADER(){

    return(
        <div className="header">
            <TOPBAR />
            <TOPHONE />
            <BANIERE/>
        </div>
    )

}