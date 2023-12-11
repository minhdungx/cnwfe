import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Button } from "antd";
import NavigationBar from "../../components/NavigationBar";
import axios from "axios";
import './style.css'
import { baseUrl } from "../../baseUrl";
import { useState, useEffect } from "react";
import Curriculum from "../../components/Curriculum";
import ReactPlayer from "react-player";

export default function ViewCourse() {
    const { courseId } = useParams()
    const { courseInfo, setCourseInfo } = useState([])

    useEffect(() => {
        const fetchData = async () => {
            // // const reponse = await axios.get(`${baseUrl}/api/public/course`)
            // const responses = await axios.get('http://localhost:8080/api/public/course')
            //     .then((response) => setCourseInfo(response.data.content));

        }
        fetchData()


    }, [courseId])

    const sections = [
        {
            sectionTitle: 'section title 1',
            lectureStudentDTOList: [
                {
                    lectureTitle: "lecture title 1",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },
                {
                    lectureTitle: "lecture title 2",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=rp3HUmBLi-0"
                    }
                },
                {
                    lectureTitle: "lecture title 3",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },

            ]
        },
        {
            sectionTitle: 'section title 2',
            lectureStudentDTOList: [
                {
                    lectureTitle: "lecture title 4",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },
                {
                    lectureTitle: "lecture title 5",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },
                {
                    lectureTitle: "lecture title 6",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },

            ]
        },
        {
            sectionTitle: 'section title 3',
            lectureStudentDTOList: [
                {
                    lectureTitle: "lecture title 7",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },
                {
                    lectureTitle: "lecture title 8",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },
                {
                    lectureTitle: "lecture title 9",
                    lectureDescription: "lecture description",
                    mainContent: {
                        contentUrl: "https://www.youtube.com/watch?v=iu-LBY7NXD4"
                    }
                },

            ]
        },
    ]


    const [curLecture, setCurLecture] = useState(sections[0].lectureStudentDTOList[0].sectionTitle)
    const [curUrl, setCurUrl] = useState(sections[0].lectureStudentDTOList[0].mainContent.contentUrl)
    const [curDes, setCurDes] = useState(sections[0].lectureStudentDTOList[0].lectureDescription)
    const handleClick = (title, url, des) => {
        setCurLecture(title)
        setCurUrl(url)
        setCurDes(des)
        console.log(curLecture)

    }

    useEffect(() => {


    }, curLecture)





    return (
        <div className="view-course-page">
            <NavigationBar />

            {/* <div className="wrapper">
                <div className="video-container">
                    <ReactPlayer className="lecture-video"
                        url={curUrl}
                        controls={true}
                    >
                    </ReactPlayer>
                    <h1>{curLecture}</h1>
                    <h3>{curDes}</h3>

                </div>
                <div className="navigation">
                    <ul className="section-ul">
                        {
                            sections?.map((sectionItem) => (
                                <li className="section-li">
                                    <h2>{sectionItem.sectionTitle}</h2>
                                    <ul className="lecture-ul">
                                        {

                                            sectionItem.lectureStudentDTOList.map((lecture) => (
                                                <li className="lecture-li"
                                                    cursor="pointer"
                                                    onClick={() => handleClick(lecture.lectureTitle, lecture.mainContent.contentUrl, lecture.lectureDescription)}
                                                    style={{ backgroundColor: lecture.lectureTitle === curLecture ? "rgb(209, 215, 220)" : "" }}
                                                >{lecture.lectureTitle}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            )


                            )
                        }

                    </ul>
                </div>
            </div> */}

            <Row className="page-content">
                <Col span={18} className="video-col">
                    <ReactPlayer className="lecture-video"
                        url={curUrl}
                        controls={true}
                    >
                    </ReactPlayer>
                    <h1>{curLecture}</h1>
                    <h3>{curDes}</h3>

                </Col>

                <Col span={6} className="nav-col">

                    <ul className="section-ul">
                        {
                            sections?.map((sectionItem) => (
                                <li className="section-li">
                                    <h2>{sectionItem.sectionTitle}</h2>
                                    <ul className="lecture-ul">
                                        {

                                            sectionItem.lectureStudentDTOList.map((lecture) => (
                                                <li className="lecture-li"
                                                    cursor="pointer"
                                                    onClick={() => handleClick(lecture.lectureTitle, lecture.mainContent.contentUrl, lecture.lectureDescription)}
                                                    style={{ backgroundColor: lecture.lectureTitle === curLecture ? "rgb(209, 215, 220)" : "" }}
                                                >{lecture.lectureTitle}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            )


                            )
                        }

                    </ul>


                </Col>

            </Row>



        </div>
    )


}


{/* {sections?.map((section) => {
                            <li className="section-li" key={section.title}>
                                <h2>{section.title}</h2>
                                <ul>
                                    {
                                        lectures?.map((lecture) => {
                                            <li className="lecture-li" key={lectures.title}>
                                                {lecture.title}
                                            </li>
                                        })
                                    }
                                </ul>
                            </li>
                        })} */}