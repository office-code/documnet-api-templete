import React, { useState, useRef } from "react";
export default function Integration() {

    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">
                    <h4 className="h4-heading">Integration</h4>
                    <div className="heading-box">
                        <p className="p-pera">The Ding API is a Level 0 REST web service. We have used the swagger standard to describe this service. As a result, we are able to provide an interactive documentation page, which lists all the methods and even allows you to interact with API, showing the request bodies and responses that you will receive from the API.</p>
                        <p className="p-pera">To generate an API Key, you should go to the Developer tab which can be found in the Account Settings section of your DingConnect account.</p>
                        <p className="p-pera">Enter the API Key into the token input box on top-right of the Methods page Methods and click the  button. Then browse the API definition and interact with the API from that page. Using this interface you can figure out the headers, request bodies and responses that your software will need to send to interact with the API.</p>
                        <p className="p-pera">The swagger definition can also be used to automatically generate client SDK libraries in many different languages. Many free and commercial code generators are available that can consume this swagger definition and generate client code for you, allowing you to rapidly develop your application. For example, you can import our swagger definition into the online service provided at http://editor.swagger.io and from that interface you can generate client code in over 20 different programming languages.</p>
                        <p className="p-pera">The URL for our swagger definition is in the URL text box on the Methods page and ends with /swagger/docs/v1.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

