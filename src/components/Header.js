import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>


<Navbar className="bg-primary" >
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>
            <img
              alt=""
              src="https://i.postimg.cc/nLVbdZt1/unnameduhflk.jpg"
              width="50"
              height="49"
              className="d-inline-block align-top"
            />{' '}
            <b className='fs-2'>ConnecTify</b>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header