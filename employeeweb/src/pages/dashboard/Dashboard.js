import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();


    const handleDelete = async (employeeId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`, {
                method: 'DELETE',
            });
            console.log('Item deleted');

            if (response.ok) {
                setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== employeeId))
            }
        } catch (error) {
            console.log("Error deleting employee", error.message);
        }
    }

    const handleUpdate = async (employeeId) => {
        navigate(`/employee/${employeeId}`);
    }

    useEffect(
        () => {

            const fectEmployees = async () => {
                try {
                    const response = await fetch("http://localhost:8080/api/employees");
                    const data = await response.json();

                    setEmployees(data);
                } catch (error) {
                    console.log("Error fetching employee", error.message)
                }
            }

            fectEmployees();
        }, []
    )
    return (
        <>
            {console.log(employees)}
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h1 className='text-center'>Employees</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr id={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <Button variant='outline-secondary' onClick={() => handleUpdate(employee.id)}>Update</Button>{" "}
                                            <Button variant='outline-danger' onClick={() => handleDelete(employee.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
