import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Map from './Component/Map';
import Detail from './Component/Detail'
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

function App() {

	return (
		<>
			<div className="wrap-container">
				<Navbar bg="light" variant="light">
					<Container>
						<Navbar.Brand href="/" style={{
							fontSize: '30px'
						}}>Palgong Mountain</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/map"style={{
								paddingLeft: '5em'
							}}>Map</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<Routes>
					<Route path='/' element={<Detail></Detail>}></Route>
					<Route path='/map' element={<Map></Map>} />
				</Routes>
			</div>
			
		</>

	);
}

export default App;
