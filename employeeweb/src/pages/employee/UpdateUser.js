import React, { useEffect, useState } from 'react'
import "./UpdateUser.css"
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function UpdateUser() {

    const { id } = useParams();
    console.log("ID = ", id);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    const handleInputChange = (even) => {
        const { name, value } = even.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`)
                const data = await response.json();

                setFormData(data);
                
            } catch (error) {
                console.error("Error fetching user data: ", error.message);
            }
        }
        fetchEmployee();
    }, [id])

    return (
        <>
            <div className="center-form">
                <h1>Edit Employee</h1>
                <Form >
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text" name="name" placeholder="Enter the name" value={formData.name} onChange={handleInputChange} />
                        <Form.Control type="text" name="email" placeholder="Enter the email" value={formData.email} onChange={handleInputChange} />
                        <Form.Control type="text" name="phone" placeholder="Enter the phone number" value={formData.phone} onChange={handleInputChange} />
                        <Form.Control type="text" name="department" placeholder="Enter the department" value={formData.department} onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">Post Employee</Button>
                </Form>
            </div>
        </>
    )
}
