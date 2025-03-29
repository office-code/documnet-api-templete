import React, { useState, useEffect } from "react";
import content from "../json/content.json"
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
export default function Errors() {
    const { promiseInProgress } = usePromiseTracker();

    const [contentdata, setcontentdata] = useState([])
    useEffect(() => {
        trackPromise(
            new Promise((resolve) => {
                setTimeout(() => {
                    setcontentdata(content.callback)
                    resolve(); // ✅ Promise resolve karna zaroori hai
                }, 1000); // Simulated delay (1 second)
            })
        );
    }, [])
    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">
                    {promiseInProgress === true ? (
                        <div
                            className="spinner"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignIitems: "center",
                                height: "50px",
                            }}
                        >
                            <ThreeDots
                                height="80"
                                width="80"
                                color="#fc7a34"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperclassName=""
                                visible={true}
                            />
                        </div>
                    ) : (
                        <>
                            {contentdata.map((itemdata, index) => {
                                return (<div key={index}>
                                    <h4 className="h4-heading">{itemdata.titlename}</h4>
                                    <p className="error-heading-pra">{itemdata.titlename1}</p>
                                    <ul>
                                        {itemdata.pracontent.map((para, index) => {
                                            return (
                                                <li key={index} className="p-pera">{para}</li>
                                            )
                                        })}
                                    </ul>
                                    <p className="p-pera">a) On Sandbox</p>

                                    <ul>
                                        <li className="p-pera">Register your callback host by specifying the domain as providerCallbackHost when creating your API Keys. On production this will be done via the Account Portal</li>
                                        <li className="p-pera">Specify the callback URL in each of your /requesttopay or /tranfer POST</li>
                                        <li className="p-pera">Use http and not https on sandbox</li>
                                        <li className="p-pera">Allow PUT & POST on your callback listener host</li>
                                        <p className="p-pera mt-3">b) On Production</p>
                                        <li className="p-pera">After Go-live you will be provided a link to log on to your Accounts Portal</li>
                                        <li className="p-pera">You will be required to register you callback host on the portal when creating your API keys as shown below</li>
                                        <li className="p-pera">Only https is allowed on production</li>
                                        <li className="p-pera">Allow PUT & POST on your callback listener host</li>
                                        <li className="p-pera">The Wallet Platform will only send the callback once. There is no retry on the callback if the Partner system does not respond. A merchant system can, in cases where a callback was not received , poll for the transaction status as described in the GET method</li>
                                    </ul>
                                    <div>
                                        <h4 className="h4-heading">{itemdata.titlename2}</h4>
                                        {itemdata.pracontent2.map((para, index) => {
                                            return (
                                                <p key={index} className="p-pera">{para}</p>
                                            )
                                        })}
                                        <ul>
                                            {itemdata.pracontent3.map((para, index) => {
                                                return (
                                                    <li key={index} className="p-pera">{para}</li>
                                                )
                                            })}
                                        </ul>
                                        <p className="p-pera">Below is the list of Approved Intermediate CA's that's already available to use:</p>

                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="gold-premum-plas">Alias	</th>
                                                    <th className="gold-premum-plas">CN</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>GTS_CA_1C3</td>
                                                    <td className='error-t-body-head error-body-text'>CN=GTS CA 1C3; O=Google Trust Services LLC; C=US
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>Go_Daddy_Secure_Certificate_Authority_-_G2	</td>
                                                    <td className='error-t-body-head error-body-text'>CN=Go Daddy Secure Certificate Authority - G2; OU=http://certs.godaddy.com/repository/; O=GoDaddy.com, Inc.; C=US</td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>R3	</td>
                                                    <td className='error-t-body-head error-body-text'>CN=R3; O=Let's Encrypt; C=US</td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>Sectigo_RSA_Domain_Validation_Secure_Server_CA</td>
                                                    <td className='error-t-body-head error-body-text'>CN=Sectigo RSA Domain Validation Secure Server CA; O=Sectigo Limited; C=GB</td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>AmazonRCA4</td>
                                                    <td className='error-t-body-head error-body-text'>CN = Amazon Root CA 4,O = Amazon,C = US
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>AmazonCA1B	</td>
                                                    <td className='error-t-body-head error-body-text'>CN = Amazon,OU = Server CA 1B,O = Amazon,C = US </td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>Encryption_Everywhere_DV_TLS_CA_-_G1</td>
                                                    <td className='error-t-body-head error-body-text'>CN=Encryption Everywhere DV TLS CA - G1; OU=www.digicert.com; O=DigiCert Inc; C=US</td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>cPanel,_Inc._Certification_Authority</td>
                                                    <td className='error-t-body-head error-body-text'>CN=cPanel, Inc. Certification Authority; O=cPanel, Inc.; C=US</td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>DigiCert_SHA2_Secure_Server_CA</td>
                                                    <td className='error-t-body-head error-body-text'>CN=DigiCert SHA2 Secure Server CA; O=DigiCert Inc; C=US
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>GTS_CA_1D4</td>
                                                    <td className='error-t-body-head error-body-text'>CN=GTS CA 1D4; O=Google Trust Services LLC; C=US </td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>Cloudflare_Inc_ECC_CA-3</td>
                                                    <td className='error-t-body-head error-body-text'>CN=Cloudflare Inc ECC CA-3; O=Cloudflare, Inc.; C=US
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>DigiCert_SHA2_High_Assurance_Server_CA</td>
                                                    <td className='error-t-body-head error-body-text'>CN=DigiCert SHA2 High Assurance Server CA; OU=www.digicert.com; O=DigiCert Inc; C=US</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>)
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}






