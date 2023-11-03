import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Restcard from '../components/Restcard'
import { Row, Col, Container } from 'react-bootstrap'



function Home() {

    const [contacts, setContacts] = useState([])

    const fetchData = async () => {
        const result = await axios.get('./db.json')
        setContacts(result.data.contacts);
    }

    // like ng onoint
    useEffect(() => {
        fetchData()
    }, [])

    console.log(contacts);


    return (
        <Container>
            <Row>
       <b className='text-center fs-3 mt-3'> "Connectify is your go-to contact app. Keep your contacts organized and foster stronger connections with this application."</b>
         </Row>
            <Row className=''>


                {
                    contacts.map(i => (
                        <Col className='ps-2 mt-5 p-2' lg={3} md={4} sm={6}>
                            <Restcard item={i}></Restcard>
                        </Col>
                    ))
                }



            </Row>
        </Container>
    )
}

export default Home