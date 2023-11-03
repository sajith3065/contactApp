import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';



function Singleview() {

    const [AllData, setData] = useState([])

    const { id } = useParams()
    console.log(id);

    const fetchallDatas = async () => {
        const result = await axios.get('/db.json')
        setData(result.data.contacts);
    }


    useEffect(() => {
        fetchallDatas()
    }, [])

    const SingleData = AllData.find(i => i.name == id)
    console.log(SingleData);

    return (
        <div>
            {SingleData &&
                <Row className='p-3'>
                    <Col lg={6} md={6} sm={12} className='p-2' >

                        <img style={{height:'400px',width:'70%'}} src={SingleData.profile} alt="" />

                    </Col>

                    <Col  lg={6} md={6} sm={12} className='mt-4' >

                        <ListGroup className='fs-5'>
                            <ListGroup.Item>Name : {SingleData.name}</ListGroup.Item>
                            <hr />
                            <ListGroup.Item>Email  : {SingleData.email}</ListGroup.Item>
                            <hr />
                            <ListGroup.Item>Phone No :  {SingleData.mobile}</ListGroup.Item>
                            <hr />
                            <ListGroup.Item>Location  : {SingleData.location}</ListGroup.Item>
                        </ListGroup>

                    </Col>

                </Row>
            }
        </div>
    )
}

export default Singleview