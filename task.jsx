import { Link } from 'react-router-dom';
function Taskpage(){
    return(
        <div>
            <ul>
                <li><Link to="/Task/1">Task1</Link></li>
                <li><Link to="/Task/2">Task2</Link></li>
                <li><Link to="/Task/3">Task3</Link></li>
                <li><Link to="/Task/4">Task4</Link></li>
            </ul>
        </div>
    )
}export default Taskpage;