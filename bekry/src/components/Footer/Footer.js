import React from "react";
import Twitter from "../../Assets/twitter.svg";
import Instagram from "../../Assets/instagram.svg";
import WhatsApp from "../../Assets/whatsapp.svg";
import Facebook from "../../Assets/facebook.svg";
import CreditCard from "../../Assets/mastercard_logo.svg";
import Mpesa from "/home/wanton/Bekry-Ecommerce/bekry/src/Assets/512px-M-PESA_LOGO-01.svg.png";
import Paypal from "../../Assets/paypal_logo_new.svg";


function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <h2 className="head">Follow us on</h2>
                <div className="Images">
                    <img src={Twitter} alt="Twitter" height="20" />
                    <img src={Instagram} alt="Instagram" height="20" />
                    <img src={WhatsApp} alt="WhatsApp" height="20" />
                    <img src={Facebook} alt="Facebook" height="20" />
                </div>
                <h2>Payment</h2>
                <div className="Images-payment">
                    <img src={CreditCard} alt="CreditCard" height="20" className="photos" />
                    <img src={Mpesa} alt="Mpesa" height="50" className="photos" />
                    <img src={Paypal} alt="Paypal" height="20" className="photos" />
                </div>
                <p>@2023 Bekry </p>
            </div>
        </React.Fragment>
    );
}

export default Footer;