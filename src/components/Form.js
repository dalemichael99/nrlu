import React from 'react';
import '../styles/FormStyles.css';

function UserForm() {
    return (
        <div className="formContainer">
            <div className="field">
                <label className="label">First Name:</label>
                <input className="input" type="text" name="firstName" />
            </div>
            <div className="field">
                <label className="label">Last Name:</label>
                <input className="input" type="text" name="lastName" />
            </div>
            <div className="field">
                <label className="label">Age:</label>
                <input className="input" type="number" name="age" />
            </div>
            <div className="field">
                <label className="label">Location:</label>
                <select className="input" name="location">
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="SA">SA</option>
                    <option value="WA">WA</option>
                    <option value="NT">NT</option>
                </select>
            </div>
            <div className="field">
                <label className="label">Phone Number:</label>
                <input className="input" type="tel" name="phone" />
            </div>
            <div className="field">
                <label className="label">Email:</label>
                <input className="input" type="email" name="email" />
            </div>
            <button className="submitButton" type="submit">Submit</button>
        </div>
    );
}

export default UserForm;