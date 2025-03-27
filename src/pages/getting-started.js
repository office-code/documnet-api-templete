import React, { useState, useRef } from "react";
import image from "../assets/images/subscriptions-DocContnt.png"
export default function GettingStarted() {

    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">
                    <h4 className="h4-heading">Getting Started</h4>
                    <p className="p-pera"><strong>y'ello,</strong>  in this section we'll walk you through getting up and running on our Mobile Money Open API. Here you will:</p>
                    <ul>
                        <li className="p-pera">Signup For An Account</li>
                        <li className="p-pera">Manage Your Subscriptions</li>
                        <li className="p-pera">Generate API User and API Key</li>
                        <li className="p-pera">In order to receive the callback for your transactions, please consider the following:</li>
                    </ul>
                    <div>
                        <h4 className="h4-heading">Signup For An Account</h4>
                        <h4 className="h4-heading">Manage Your Subscriptions</h4>
                        <p className="p-pera">Developers are issued a Primary Key and Secondary Key for every product.</p>
                        <p className="p-pera">Both primary and secondary Subscription key provides access to the API. Without one of them a developer cannot access any of the APIs. Subscriptions are stored under the user profile and have no expiry.</p>
                        <p className="p-pera">Here you can view the status of the package, date it started, conduct cancellation or activation actions, and also show or regenerate your Primary Key and Secondary Key</p>
                        
                         <div className="img-box">
                            <img src={image} className="" />
                         </div>
                        
                        <h4 className="h4-heading">Generate API User and API Key</h4>
                        <p className="p-pera">You are now almost ready to start we building with our Mobile Money Open API. The next thing we need to do is to Provision the API User and API Key using the Sandbox Provisioning API. We do this in the next section.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

