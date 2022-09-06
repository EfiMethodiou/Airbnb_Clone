import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <p> © 2022 Airbnb Clone - this is a demo made by &nbsp;
                 <a href="https://efimethodiou.com/" target="_blank">
                    <img className="developer_icon" src={require('./img/footer_icon.png')} alt="" /></a>
            </p>
            <p>
                Privacy &nbsp;&nbsp; Terms &nbsp;&nbsp;  Sitemap &nbsp;&nbsp;  Company Details
            </p>

        </div>
    )
}

export default Footer