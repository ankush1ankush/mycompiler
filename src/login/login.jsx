import React, { useState } from 'react';

import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">LOGIN</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="loginInputBox"
                        placeholder="ROOM ID"


                    />
                    <input
                        type="text"
                        className="loginInputBox"
                        placeholder="USERNAME"

                    />
                    <button className="btn joinBtn" >
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a

                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with 💛 &nbsp; by &nbsp;
                    <a href="https://github.com/codersgyan">Coder's Gyan</a>
                </h4>
            </footer>
        </div>
    );
};

export default Login;
