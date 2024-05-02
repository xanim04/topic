import React, { useState } from 'react';


const Form = ({ onSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            fullName,
            email,
            phone,
            comment,
            isRecurring
        });
    };

    setMessage('Müvəffəqiyyətlə göndərildi');
    setFullName('');
    setEmail('');
    setPhone('');
    setComment('');
    setIsRecurring(false);


    return (
        
        <form onSubmit={handleSubmit} style={{ width: '300px' }}>
            <label>
                Ad:
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ backgroundColor: 'bisque', margin: '5px' }} />
            </label>
         
            <label>
                E-mail:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: 'bisque', margin: '5px' }} />
            </label>
            <label>
                Telefon:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ backgroundColor: 'bisque', margin: '5px' }} />
            </label>
            <label>
                serh:
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} style={{ backgroundColor: 'bisque', margin: '5px' }} />
            </label>
            <button type="submit" style={{ backgroundColor: 'tan', margin: '10px', padding: '10px' }}>Göndər</button>
        </form>
        
    );
};


export default Form;
