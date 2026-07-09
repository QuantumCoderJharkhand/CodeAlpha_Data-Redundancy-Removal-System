import { useState } from "react";

function UserForm({ addUser }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        addUser(form);

        setForm({
            name: "",
            email: "",
            phone: ""
        });

    };

    return (

        <form className="user-form" onSubmit={handleSubmit}>

            <input
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                required
            />

            <input
                name="email"
                type="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                required
            />

            <input
                name="phone"
                placeholder="Enter Phone"
                value={form.phone}
                onChange={handleChange}
                required
            />

            <button type="submit">
                Add User
            </button>

        </form>

    );

}

export default UserForm;