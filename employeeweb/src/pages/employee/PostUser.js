import { Button, Form } from "react-bootstrap";
import "./PostUser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostUser() {

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

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const response = await fetch("http://localhost:8080/api/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)

            })

            const data = await response.json();
            console.log("Employee created: ", data);

            navigate("/");
        } catch (error) {
            console.log("Error creating employee", error.message);
        }
    }


    return (
        <>
            <div className="center-form">
                <h1>Post New Employee</h1>
                <Form onSubmit={handleSubmit}>
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
