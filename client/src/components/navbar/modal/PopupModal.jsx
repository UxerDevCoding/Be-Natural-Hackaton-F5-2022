import * as React from "react";
import './popupmodal.css'
import naturalyLogo from "../../../assets/img/leaft.png"



function PopupModal(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <div className="banner">
                <div className="nameCompany"><h1>Be Natural</h1></div>
               
                <div className="logoCompany"><img src={naturalyLogo} alt="NaturalyLogo" /></div>
            </div>
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
                <form>
                    <div className="form">
                        <div className="form-element">
                            <div className="form-label">
                                <label htmlFor="email" id="l_email">Email</label></div>
                            <input type="text" id="email" name="email" placeholder="example@benatural.org" autoFocus />
                        </div>
                        <div className="form-element">
                            <div className="form-label">
                                <label htmlFor="password" id="l_pass">Password</label></div>
                            <input type="password" id="password" name="password" placeholder="* * * * *" />

                        </div>
                        <button className="form-login" type="submit" value="login">
                            Log in </button>


                    </div>
                </form>
            </div>
        </div>
    ) : "";
}

export default PopupModal