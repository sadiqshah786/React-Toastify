import React from 'react';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastNotification() {
    const [name, setName] = useState('');
    const notify = (e) => {
        e.preventDefault();
        {
            name == "" ? toast(`Empty Input feild`) : toast(`Welcome ${name}`)
        }

    };

    return (

        <div className="main">
            <h1 style={{ textAlign: "center" }}>(Notification Toast)</h1>
            <form >
                <div className='toast-main'>
                    <input placeholder='Enter your name :' required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="button-wrapper">
                    <button type="submit" onClick={notify}>Submit</button>
                    <a href="https://www.npmjs.com/package/react-toastify" target="_blank">Learn more</a>

                </div>
                <ToastContainer />
            </form>

        </div>
    );
}

export default ToastNotification