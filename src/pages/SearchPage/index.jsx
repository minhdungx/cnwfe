import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Button } from "antd";
import NavigationBar from "../../components/NavigationBar";
import axios from "axios";
import './style.css'
import { baseUrl } from "../../baseUrl";

// const initState = {
//     courseImage: 'https://daotao.ai/media/filer_public_thumbnails/filer_public/e1/ff/e1ffbc0c-071d-425b-a64c-e93a7039cfad/banner_nodejs.png__800x479_crop-smart_subsampling-2_upscale.png',
//     dateCreated: 'abc',
//     courseTitle: 'nodejs',
//     categoryId: 0,

// }


export default function SearchPage() {
    const param = useParams()
    const [searchResult, setSearchResult] = React.useState([])

    const queryParameters = new URLSearchParams(window.location.search)
    const courseTitle = queryParameters.get("courseTitle")
    React.useEffect(() => {
        const fetchData = async () => {
            // const reponse = await axios.get(`${baseUrl}/api/public/course`)
            const responses = await axios.get('http://localhost:8080/api/public/course', { params: { courseTitle: courseTitle } })
                .then((response) => setSearchResult(response.data.content));


            // setSearchResult([initState, initState, initState, initState, initState])
            // setSearchResult(content)

            //     return fetch("http://localhost:8080/api/public/course")
            //         .then((response) => response.json())
            //         .then((data) => console.log(data))
            //         .catch((error) => console.error(error));
        }
        fetchData()

    }, [searchResult])




    return (
        <div className="search-page">
            <NavigationBar />
            <Row className="page-content">
                <Col span={6} className="sidebar">

                </Col>
                <Col span={18} className="search-result">
                    {searchResult?.map((resultItem) => (
                        <div className="result-item">
                            <img className="item-image" src={resultItem.courseImage} />
                            <p className="sub-title">{resultItem.dateCreated}</p>
                            <h3 className="title">
                                {resultItem.courseTitle}
                            </h3>
                            <Button>View Course</Button>

                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}