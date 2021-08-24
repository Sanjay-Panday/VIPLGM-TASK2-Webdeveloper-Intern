import React from 'react';
import reactdom from 'react-dom';
import GetUsers from './task.js';
import './task.css';



reactdom.render(
    <>
        <GetUsers />
    </>,
    document.getElementById("root")
);