import { NavLink } from 'react-router-dom';
function Navbar(params) {
    return(
        <div>
            <h1>Task Manager</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Task">Task</NavLink></li>
            </ul>
            <hr />
        </div>
    )
}export default Navbar;