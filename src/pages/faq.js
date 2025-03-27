import React, { useState, useRef } from "react";

export default function FAQ() {
    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">
                    <h4 className="h4-heading">Authentication</h4>
                    <p className="error-heading-pra">1. What is a subscription Key?</p>
                    <ul>
                        <li className="p-pera">The subscription key is assigned to the Ocp-Apim-Subscription-Key parameter of the header</li>
                        <li className="p-pera">This Key is used to authenticate and limit the number of calls that can be made</li>
                        <li className="p-pera">The Subscription Key can be found in your user profile</li>
                        <li className="p-pera">Developers – can use either the Primary Key or Secondary Key for every product they subscribe to allow access to the API</li>
                        <li className="p-pera">A developer cannot access or utilize any of the respective APIs without a Subscription Key</li>
                        <li>Different subscription keys can be used for different product APIs; please check in your user profile</li>
                    </ul>

                    <p className="error-heading-pra">2. What is the API User and API Key for Oauth 2.0?</p>
                    <ul>
                        <li className="p-pera">The API User and API Key are used together with your subscription key to grant access to the -wallet system and is applicable to a specific country</li>
                        <li className="p-pera">The API User and API Key are generated using respective APIs in the sandbox</li>
                        <li className="p-pera">API user and Key are wholly managed by the merchant through Partner Portal for PRODUCTION setups</li>
                        <li className="p-pera">Merchants can generate/revoke/refresh API Keys through the Partner Portal</li>
                        <li className="p-pera">For Sandbox API User and Key is generated using an API</li>
                    </ul>

                    <p className="error-heading-pra">3. How do I generate an Oauth 2.0 token?</p>
                    <ul>
                        <li className="p-pera">You require an API User and API Key in format APIUSER: APIKey e16510xx-7282-4a39-xx8b-da054889a33a:xx1894d23a8d4xxdadaf62f39dae99xx</li>
                        <li className="p-pera">Convert the concatenation of APIUser: APIKey into Base64 format</li>
                        <ul>
                            <li className="p-pera">Use the Base64 format to generate the authorization token, the result will look similar to this string </li>
                            <p className="p-pera">ZTE2NTEwY2xtNzI4Mi00YTx5LTg5OGItZGEwNTQ4ODlhMzNhOjg1MTg5NGQyM2E4ZDQxMW RhZGFmNxJmMzlkYWU5OcY4</p>
                        </ul>
                    </ul>

                    <p className="error-heading-pra">4. How do I create, provision and manage the API user and API key?</p>
                    <ul>
                        <li className="p-pera">Please review Sandbox provisioning process under API Sandbox</li>
                        <li className="p-pera">The API User and API Key are used to grant access to the wallet system applicable to a specific country</li>
                        <li className="p-pera">API user and Key are wholly managed by the merchant through Partner Portal in production</li>
                        <li className="p-pera">Developers can generate or revoke API Keys through the Partner Portal in production</li>
                    </ul>

                    <p className="error-heading-pra">5. How do I generate a UUID for my transactions?</p>
                    <ul>
                        <li className="p-pera">This ID is used, for example, validating the status of the request. ‘Universal Unique ID’ for the transaction generated using UUID version 4</li>
                        <li className="p-pera">Example of Version 4 UUID: - ca58fd96-2478-4624-b663-bdacd5f914ca</li>
                    </ul>


                    {/**************  ERROR ***************/}
                    <h4 className="h4-heading">Error-Code</h4>
                    <p className="p-pera">Transfer is used for transferring money from the provider account to a customer.</p>

                    <p className="error-heading-pra">6. What are the common error codes you may expect?</p>
                    <ul>
                        <li className="p-pera">The error codes are categorized as follows (Common Error Codes, Preapproval Error Codes, RequestToPay Error Codes, Transfer Error Codes and Validate Account Holder Error Codes)</li>
                        <li className="p-pera">The API User and API Key are used to grant access to the wallet system applicable to a specific country</li>
                        <li className="p-pera">More information on error codes can be found under the documentation section</li>
                    </ul>

                    {/**************  CALLBACK ***************/}
                    <h4 className="h4-heading">Callback</h4>
                    <p className="p-pera">Transfer is used for transferring money from the provider account to a customer.</p>
                    <p className="error-heading-pra">6. What are the common error codes you may expect?</p>
                    <ul>
                        <li className="p-pera">The error codes are categorized as follows (Common Error Codes, Preapproval Error Codes, RequestToPay Error Codes, Transfer Error Codes and Validate Account Holder Error Codes)</li>
                        <li className="p-pera">The API User and API Key are used to grant access to the wallet system applicable to a specific country</li>
                        <li className="p-pera">More information on error codes can be found under the documentation section</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

