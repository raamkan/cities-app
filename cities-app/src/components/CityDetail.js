import React from "react";

import EditCityInfo from "./EditCityInfo";

function CityDetail(props){

    const[editPopup, setEditPopup] = React.useState(false);
    
    return (
        <div className="city-catalog">
             <div className="cityInfo">
                <img src={props.cityImage} alt={props.cityImage} className="city--image"></img>
                <button className="editBtn" onClick={() => setEditPopup(true)}>Edit</button>
                <p>{props.cityName}</p>
            </div>

            {editPopup && <EditCityInfo id={props.id}/>}
        </div>
    )
}

export default CityDetail;