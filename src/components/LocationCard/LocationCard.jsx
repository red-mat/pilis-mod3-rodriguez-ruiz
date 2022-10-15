import './LocationCard.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Modal } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {  useState } from 'react';

const LocationCard = ({ locationCard, handleRemove }) => {
    const { id, location, latitude, longitude, temperature, windSpeed } = locationCard;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col>
            <Card border="primary">
                <Card.Header>
                    <Card.Title>Datos del clima</Card.Title>
                </Card.Header>
                <Card.Body className='color'>
                    <Card.Text> Location: {location}</Card.Text>
                    <Card.Text> Latitude: {latitude}</Card.Text>
                    <Card.Text> Longitud: {longitude}</Card.Text>
                    <Card.Text> Temperature: {temperature}</Card.Text>
                    <Card.Text> Wind Speed: {windSpeed}</Card.Text>
                    <Card.Footer className='d-flex justify-content-center'>
                        <Button variant="danger" size="lg" onClick={handleShow} className='d-flex align-items-center'><RiDeleteBin6Line /></Button>
                        <Modal
                            show={show}
                            onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    ¿Desea eliminar esta tarjeta?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div> Location: {location} - Latitude: {latitude} - Longitud: {longitude} </div>
                                <div> Temperature: {temperature} - Wind Speed: {windSpeed} </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={handleClose}>Cancelar</Button>
                                <Button variant="danger" onClick={() => handleRemove(id)}>Borrar</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col >
    )
}
export default LocationCard;