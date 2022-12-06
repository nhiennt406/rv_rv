
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'

import './search.css';
import { Divider, Input } from 'antd';
import BikeItem from './bike/BikeItem';
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const arrTemp=[];
    useEffect(() => {
        axios.get(`http://localhost:5000/api/bikes`)
            .then(({data}) => {
                for (let i = 0; i < data.length; i++){
                   if( data[i].status  === "Đã duyệt")
                   {
                    arrTemp.push(data[i])
                    // console.log("data:", data[i])
                   }
                }
                console.log("res:", data)
                console.log("arr:", arrTemp)
                setAPIData(arrTemp);
                    // response.map(bike => {
                    //     if (bike.status == "Đã duyệt") setAPIData(response.data);
                    // })


            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {

                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase()
                    // Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())

                    // JSON.parse(Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
                )
            })
            setFilteredResults(filteredData);
            // setFilteredResults( JSON.parse(filteredData))
            console.log(filteredResults)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    return (
        <>

            <div className="search--module">
                <div className="input--module">

                    <i className="fa-solid fa-magnifying-glass"></i> {" "}{" "}
                    <Input width={2000} placeholder="Tìm kiếm...." onChange={(e) => searchItems(e.target.value)} />
                </div>

                <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                    {searchInput.length > 0 ? (
                        <>

                            <div className="result">
                                <p>Có <strong style={{ color: 'red' }}>{filteredResults.length}</strong> kết quả trùng khớp với từ khóa của bạn</p></div>
                            {
                                filteredResults.map(bike =>
                                    //    const { _id, text, name, user, date, img, price, status } = bike
                                    // bike.status === "Đã duyệt" ?

                                        (<BikeItem
                                            // key={bike_id}
                                            bike={bike} />
                                        ) 
                                        
                                        )
                                        }
                            <Divider dashed style={{ borderColor: '#f97150' }}></Divider>

                        </>

                    ) : (
                        APIData.map(bike =>
                            //    const { _id, text, name, user, date, img, price, status } = bike
                            bike.status === "Đã duyệt" ?

                                (<BikeItem
                                    // key={bike_id}
                                    bike={bike} />
                                ) : ("")
                        )
                    )}
                    <Divider dashed style={{ borderColor: '#f97150' }}></Divider>



                </Card.Group>

            </div>
        </>
    )
}