import dummpy from "../db/data.json"
import {Link} from "react-router-dom" 

export default function() {
    console.log(dummpy);
    return (
        <ul className="list_day">
            {dummpy.days.map(day =>(
                    <li key={day.id}> 
                        <Link to="/day">Day</Link>  
                    {day.day}</li>
            ))}
        </ul>
    );
}