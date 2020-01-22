import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    }

    const submitHandler = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setMember({ name: "", email: "", role: "" });
    };

    return (
        <div>
            <form onSubmit={submitHandler}> 
                <label htmlFor="name">Member Name:</label>
                <input 
                    onChange={handleChanges}
                    id="name"
                    type="text"
                    name="name"
                    value={member.name}
                />

                <label htmlFor="email">Member Email:</label>
                <input 
                    onChange={handleChanges}
                    id="email"
                    type="text"
                    name="email"
                    value={member.email}
                />

                <label htmlFor="role">Member Role:</label>
                <input 
                    onChange={handleChanges}
                    id="role"
                    type="text"
                    name="role"
                    value={member.role}
                />
            
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Form;