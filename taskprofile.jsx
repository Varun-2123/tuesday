import { useParams } from "react-router-dom"

function Taskprofile() {
    const {id} = useParams();
    return (
        <div>
            <p>task{id} is shown to the page now.</p>
        </div>
    )   
}export default Taskprofile;