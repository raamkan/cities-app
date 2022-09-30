import React from "react";
import CityDetail from "./CityDetail";
import '../pageNumbers.css';





function CustomPagination(props){

    const [currentPage, setCurrentPage] = React.useState(1);
    const [citiesPerPage, setCitiesPerPage] = React.useState(30);
    const [loading, setLoading] = React.useState(false);
    const [cityLists, setCityLists] = React.useState([]);

    const indexOfLastItem = currentPage * citiesPerPage;
    const indexOfFirstItem = indexOfLastItem - citiesPerPage;

    const pages = [];
    for(let i=1; i <=Math.ceil(props.data / citiesPerPage); i++){
        pages.push(i);
    }



    const handleClick = (event) => {
        event.preventDefault();
        setCurrentPage(Number(event.target.value));
    };

    React.useEffect(() => {
        console.log( "use-effect" + currentPage);
        const indexOfSelectedLastItem = currentPage * citiesPerPage;
        const indexOfSelectedFirstItem = indexOfSelectedLastItem - citiesPerPage;
        console.log("indexOfSelectedFirstItem" + indexOfSelectedFirstItem);
        console.log("indexOfSelectedLastItem" + indexOfSelectedLastItem);
        const fetchCities  = async () => {
            setLoading(true);
            await fetch(`http://localhost:8080/customPagination?startIndex=${indexOfFirstItem}&lastIndex=${indexOfLastItem}`)
            .then(res => res.json())
            .then(data => setCityLists(data))
            setLoading(false);
        }
          fetchCities();
      }, [currentPage]);


    const renderPageNumbders = pages.map((number) => {
            return (
                <button type="button" onClick={handleClick} value={number}>
                    {number}
                </button>
            )
    })

    const renderCities = (data) => {

        return (
            <div>
            { 
                data.map((cityData, index) => (
                   <CityDetail id={cityData.id} cityName={cityData.cityName} cityImage={cityData.cityImage} />
                ))
            }
            </div>
        );
    };



    
    return (
        <>
        <div className="pageNumbers">
            {renderPageNumbders}
        </div>
        {renderCities(cityLists)}
        </>
    )

}

export default CustomPagination