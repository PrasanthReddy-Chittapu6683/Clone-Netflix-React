import React from 'react'
import './MyInfo.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function MyInfo() {
    return (
        <div className="myinfo">
            <div className="myinfo__details">
                <p>Thanks You !!! </p>
                <h1>Technical Details</h1>
                <ul>
                    <li> React Js</li>
                    <li> JavaScript</li>
                    <li> ES6+</li>
                    <li> HTML5</li>
                    <li> Google Firebase</li>
                    <li> Youtube React plugin</li>
                    <li> Movie Trailer React plugin</li>
                    <li> Material UI</li>
                    <li> Axios</li>
                    <li> TMDB for API calls</li>
                </ul>
                <p>
                    <a href="https://silly-wescoff-4f0910.netlify.app/" target="_blank">  <div className="myimage"></div></a>
                </p>
                <p>
                    <a href="https://github.com/PrasanthReddy-Chittapu6683"
                        style={{ color: 'white' }} target="_blank">  <ChevronRightIcon /><ChevronRightIcon /><ChevronRightIcon /><ChevronRightIcon />Click Here for Github link  <ChevronLeftIcon /><ChevronLeftIcon /><ChevronLeftIcon /><ChevronLeftIcon /></a>
                </p>
            </div>
        </div>
    )
}

export default MyInfo
