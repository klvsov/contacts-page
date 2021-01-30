import React from 'react';

const Contact = ({firstName, lastName, gender, phone}) => {
    return (
        <>
            <div className="single-contact">
                <div className="user">
                    <p className="user_name">{firstName} <span>{lastName}</span></p>
                    <p className="user_gender"><img src={gender} alt="user-gender"/></p>
                </div>
                <div className="phone">{phone}</div>
            </div>
            <hr />
        </>
    )
}

export default Contact;