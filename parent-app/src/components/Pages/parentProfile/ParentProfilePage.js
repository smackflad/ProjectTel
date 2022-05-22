import "./parentProfilePage.css";
import { Navigate } from "react-router-dom";

const ParentProfilePage = () => {
    return (
        <div className="ParentProfilePage -external">

            <body>
                <div class="container">
                    <header> User Profile</header>

                    <div class="myForm">

                        <div class="fields">

                            <div class="input-field">
                                <label>First Name</label>
                                <input type="text" placeholder="Enter first name" required></input>
                            </div>

                            <div class="input-field">
                                <label>Last Name</label>
                                <input type="text" placeholder="Enter last name" required></input>
                            </div>

                            <div class="input-field">
                                <label>Email</label>
                                <input type="text" placeholder="myemail@mail.com" required></input>
                            </div>


                            <div class="input-field">
                                <label>Old Password</label>
                                <input type="text"></input>
                            </div>

                            <div class="input-field">
                                <label>New Password</label>
                                <input type="text"></input>
                            </div>

                            <button class="changeNameBtn">
                                <span class="btnText">update information</span>
                                <i class="uil uil-navigator"></i>
                            </button>

                        </div>

                    </div>

                    <div class="myForm2">

                        <div class="label-field">
                            <label>Current Balance: </label>
                            <label>$$</label>
                        </div>

                        <div class="label-field">
                            <label>Choose amount: </label>

                        </div>
                        <button class="changeNameBtn">
                            <span class="btnText">∙5 $</span>
                            <i class="uil uil-navigator"></i>
                        </button>

                        <button class="changeNameBtn">
                            <span class="btnText">∙10 $</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                        <button class="changeNameBtn">
                            <span class="btnText">∙50 $</span>
                            <i class="uil uil-navigator"></i>
                        </button>


                        <div class="label-field">
                            <label>My cards: </label>
                        </div>

                        <button class="changeNameBtn">
                            <span class="btnText">∙Card 1</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                        <button class="changeNameBtn">
                            <span class="btnText">∙Card 2</span>
                            <i class="uil uil-navigator"></i>
                        </button>

                        <button class="changeNameBtn">
                            <span class="btnText">∙Add new card</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    </div>


                </div>

            </body>
        </div>
    );
};

export default ParentProfilePage;

