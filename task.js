import React, { useState } from 'react';
import Loading from './Loading';

const GetUsers = () => {
    const onClick = async () => {
        setLoading(true);
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);

    }

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    return (

        <div className="head">
            <div className="nav">
            <nav className="inner_nav">
                <h1>Zippy Usercard</h1>
            
                <button className="button" onClick={onClick}>Get Users Details</button>
            </nav>
            </div>
            <h2>Welcome to Let's Grow More</h2>
            <div className="cards">

                {loading ? (<Loading />) : null}
                {
                    users?.map((curElem) => {
                        return (

                            <div key={curElem.id}>
                                <div className="cards">
                                    <div className="card">
                                        <img
                                            className="card_image" src={curElem.avatar} alt="error" />

                                        <div className="card_info">
                                            <h4 className="card_category">{curElem.first_name } {curElem.last_name}</h4>
                                           
                                            
                                            <span className="card_title">{curElem.email}</span> 
                                            <button className="button1">View Profile</button>
                                             </div>

                                    </div>
                                </div>

                            </div>




                        );
                    })
                }

            </div>
        </div>


    );
}
export default GetUsers;
