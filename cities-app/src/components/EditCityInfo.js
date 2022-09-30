import React from "react";
import '../editCityInfo.css';


function EditCityInfo(props) {

    const [cityName, setCityName] = React.useState([]);
    const [cityImageURL, setCityImageURL] = React.useState([]);
    const [closeForm, setCloseForm] = React.useState(false);


    function handleCityName(event) {
        setCityName(event.target.value);
    }

    function handleCityImage(event) {
        setCityImageURL(event.target.value);
    }

    function handleSubmit(){
        console.log(JSON.stringify({ id: 3, cityName : cityName, cityImage: cityImageURL}));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify({ id: 1, cityName : cityName, cityImage: cityImageURL})
        };
        const response = fetch('http://localhost:8080/update/cityInfo', requestOptions);
        console.log(response);
        const data = response;
    }

        return (
            <div className= {closeForm ? "modale" : "modale opened"} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-header">
                        <h4>Enter City Name and City Image URL</h4>
                        <a href="#" className="btn-close" aria-hidden="true" onClick={() => {setCloseForm(true)}}>&times;</a>
                    </div>
                    <div className="modal-body">
                            <div className="inputDiv">
                                <label>City Name : </label>
                                <input type="text" placeholder="enter city name" onChange={handleCityName}/>
                            </div>
                            <div className="inputDiv">
                                <label>Image URL : </label>
                                <input type="text" placeholder="Enter Image url" onChange={handleCityImage}/>  
                            </div>  
                            <button type="button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div> 
            </div>
        )
}
  
export default EditCityInfo;