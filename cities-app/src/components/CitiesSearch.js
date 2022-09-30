
import React from "react";

function CitiesSearch(){

return (
    <>
        <div className="topNav">
                <a className="active" href="#Home">Home</a>
                <a href="#admin">Admin</a>
                <a href="#contact">Contact</a>
                <div className="search-container">
                    <form action="#home">
                        <input type="text" placeholder="Search..." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
    </>
);
}

export default CitiesSearch;