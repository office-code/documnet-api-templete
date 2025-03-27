import React, { useState, useRef, useEffect } from "react";
// import copy from "copy-to-clipboard";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { RiFileCopy2Line } from "react-icons/ri";
import { Row, Col} from "react-bootstrap";
import Codetext from "../components/codetext/codetext";
import code from "../json/code1.json"

export default function Authentication() {
    // Initialize state to manage the selected option
    // const [selectedOption, setSelectedOption] = useState('option1');
    // Handle change event for select field
    // const handleSelectChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    // const [show, setShow] = useState(false);
    // const [show1, setShow1] = useState(false);
    // const target = useRef(null);
    // const target1 = useRef(null);
    // const copyToClipboard = () => {
    //     let textToCopy = '';
    //     if (selectedOption === 'option1') {
    //         textToCopy = `
    //          const Stripe = require('stripe');
    //          const stripe = Stripe('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');`;
    //     } else if (selectedOption === 'option2') {
    //         textToCopy = `
    //          $stripe = new \Stripe\StripeClient("sk_test_tR3PYbcVNZZ796tH88S4VQ2u");`;
    //     } else if (selectedOption === 'option3') {
    //         textToCopy = `
    //          Stripe.apiKey = "sk_test_tR3PYbcVNZZ796tH88S4VQ2u";`;
    //     } else if (selectedOption === 'option4') {
    //         textToCopy = `
    //          import stripe
    //          stripe.api_key = "sk_test_tR3PYbcVNZZ796tH88S4VQ2u"`;
    //     }

    //     // Copy the selected text
    //     copy(textToCopy);
    // };

    // const copyToClipboard1 = () => {
    //     let textToCopy = '';
    //     if (selectedOption === 'option1') {
    //         textToCopy = `
    //          stripe.charges.retrieve('ch_3LmjSR2eZvKYlo2C1cPZxlbL', {
    //          stripeAccount: 'acct_1032D82eZvKYlo2C'
    //          });`;
    //     } else if (selectedOption === 'option2') {
    //         textToCopy = `
    //          $ch = $stripe->charges->retrieve(
    //          'ch_3Lmjrl2eZvKYlo2C1bscjw8Z',
    //          [],
    //           ['stripe_account' => 'acct_1032D82eZvKYlo2C']
    //           );
    //           $ch->capture(); // Uses the same account.`;
    //     } else if (selectedOption === 'option3') {
    //         textToCopy = `
    //         RequestOptions requestOptions = RequestOptions.builder()
    //         .setStripeAccount("acct_1032D82eZvKYlo2C")
    //         .build();
            
    //         Charge charge = Charge.retrieve(
    //         "ch_3LmjsM2eZvKYlo2C1CcKvJbn",
    //         requestOptions,
    //         );
    //        `;
    //     } else if (selectedOption === 'option4') {
    //         textToCopy = `
    //          import stripe
    //          charge = stripe.Charge.retrieve(
    //          "ch_3Lmjoz2eZvKYlo2C1rBER4Dk",
    //          stripe_account="acct_1032D82eZvKYlo2C"
    //          )
    //          charge.capture() # Uses the same account.`;
    //     }

    //     // Copy the selected text
    //     copy(textToCopy);
    // };

    const [jsonData, setJsonData] = useState(null);
    const [gettingtoken, setgettingtoken]= useState(null)
    const [gettingtokenexample, setgettingtokenexample]= useState(null)
    const [tokenexpried, settokenexpried]= useState(null)
    const [tokenexpiredexample, settokenexpiredexample] = useState(null)

    useEffect(() => {
        setJsonData(code.oauth[0])
        setgettingtoken(code.gettingtoken[0])
        settokenexpried(code.tokenexpired[0])
        settokenexpiredexample(code.getRegions[0])
        setgettingtokenexample(code.gettingtokenexample[0])
    }, []);


    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">
                    <h4 className="h4-heading">Authentication</h4>
                    <p className="p-pera">The DingConnect API supports authorisation using API Keys and OAuth. For any new integration, our recommendation is to use OAuth.</p>
                    <p className="p-pera">All requests to the API must be authenticated. Any exceptions to this rule are documented in the individual API methods.</p>
                    <p className="p-pera">All requests can include an optional header X-Correlation-Id that can be used to correlate HTTP requests between a client and server. This header will be useful to diagnose potential issues that integrated clients might encounter.</p>
                    <h4 className="h4-heading mt-4">API Keys</h4>
                    <p className="p-pera">The client must include an HTTP header api_key using the API key that was issued to you.</p>
                    <p className="p-pera">If authentication fails, you will receive a HTTP 401 response.</p>
                    <h4 className="h4-heading mt-4">OAuth</h4>
                    <Row>
                        <Col lg={6}>
                            <div className="heading-box">
                                <p className="p-pera">The only supported OAuth flow is the client credentials flow, which is used only for server-to-server API requests. In order to use OAuth, a new OAuth client must be registered in your DingConnect account.</p>
                                <p className="p-pera">OAuth credentials are managed from within the DingConnect portal, by navigating to the Developer tab in Account Settings.</p>
                                <p className="p-pera">Once new OAuth credentials are generated, a bearer token can be requested from https://idp.ding.com/connect/token with the client_id and client_secret. The returned token must be included in the Authorization header with the “Bearer” authentication scheme. A new token must be requested once the current token expires.</p>
                                <p className="p-pera">Supported identity provider configuration can be obtained from: https://idp.ding.com/.well-known/openid-configuration, and used programmatically with client libraries.</p>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div>
                                <div className="url-but-box-1">
                                {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                </div>
                            </div>
                        </Col>
                    </Row>



                    <h4 className="h4-heading mt-4">Getting Tokens</h4>
                    <Row>
                        <Col lg={6}>
                            <div className="heading-box">
                                <p className="p-pera">The only supported OAuth flow is the client credentials flow, which is used only for server-to-server API requests. In order to use OAuth, a new OAuth client must be registered in your DingConnect account.</p>

                                <div className="auth-pera-box">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th
                                                    className="gold-premum-plas">Parameter</th>
                                                <th
                                                    className="gold-premum-plas">Type</th>
                                                <th
                                                    className="gold-premum-plas">
                                                    Description
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>client_id</td>
                                                <td className='error-t-body-head error-body-text'>string</td>
                                                <td className='error-t-body-title error-body-text'>Client Id</td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>client_secret</td>
                                                <td className='error-t-body-head error-body-text'>string</td>
                                                <td className='error-t-body-title error-body-text'>Client secret</td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>grant_type</td>
                                                <td className='error-t-body-head error-body-text'>string</td>
                                                <td className='error-t-body-title error-body-text'>Must be client_credentials.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="p-pera pt-4">Token will stay valid for the duration that was specified when creating the client/credentials.</p>

                                <p className="p-pera pt-4">Example request</p>
                                <div className="url-but-box-1">

                                {gettingtokenexample ? <Codetext data={gettingtokenexample} /> : <p>Loading...</p>}
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <p className="p-pera">Example response</p>
                            <div className="url-but-box-1">
                            {gettingtoken ? <Codetext data={gettingtoken} /> : <p>Loading...</p>}

                            </div>
                        </Col>
                    </Row>


                    <h4 className="h4-heading mt-4">Using Tokens</h4>
                    <Row>
                        <Col lg={6}>
                            <div className="heading-box">
                                <p className="p-pera">The Authorization header must be populated with the access token using the “Bearer” authentication scheme.</p>
                                <p className="p-pera pt-4">When a token expires, a new token must be requested, as documented above in “Getting Tokens”</p>
                                <p className="p-pera pt-4">Token expired example response</p>

                                <div className="url-but-box-1">
                                {tokenexpried ? <Codetext data={tokenexpried} /> : <p>Loading...</p>}

                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <p className="p-pera">Example request</p>
                            <div className="url-but-box-1">
                            {tokenexpiredexample ? <Codetext data={tokenexpiredexample} /> : <p>Loading...</p>}

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}







