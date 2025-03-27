import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Button, Collapse } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Codetext from "../components/codetext/codetext";
import Bodytext from "../components/codetext/bodytext";
import code from "../json/code1.json"
export default function Methods() {
    const [jsonData, setJsonData] = useState(null);
    const [jsonData200, setJsonData200] = useState(null);
    const [jsonData400, setJsonData400] = useState(null);
    const [jsonData401, setJsonData401] = useState(null);
    const [jsonData500, setJsonData500] = useState(null);
    const [jsonData501, setJsonData501] = useState(null);
    const [bodyjsondata, setbodyjsondata] = useState(null);
    const [collectionjsondata, setcollectionjsondata] = useState(null);
    const [collectionjsondata1, setcollectionjsondata1] = useState(null);
    const [collectionjsondata2, setcollectionjsondata2] = useState(null);


    useEffect(() => {
        setJsonData(code.request[0].data[0])
        setJsonData200(code.response[0].code200)
        setJsonData400(code.response[1].code400)
        setJsonData401(code.response[2].code401)
        setJsonData500(code.response[3].code500)
        setJsonData501(code.response[4].code501)
        setbodyjsondata(code.bodydata[0])
        setcollectionjsondata(code.collection[0])
        setcollectionjsondata1(code.collection1[0])
        setcollectionjsondata2(code.collection2[0])
    }, []);


    // console.log(bodyjsondata, "bodyjsondata")
    // const [open, setOpen] = useState(false);
    // const [open1, setOpen1] = useState(false);
    // const [open2, setOpen2] = useState(false);
    // const [open3, setOpen3] = useState(false);
    // const [open4, setOpen4] = useState(false);

    const [urlapiopen, setUrlapiopen] = useState(false)
    const target = useRef(null);
    // Initialize state to manage the selected option
    const [selectedOption, setSelectedOption] = useState('option1');
    // Handle change event for select field
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">

                    {/**********  CancelTransfers  **********/}
                    <div>
                        <h4 className="h4-heading">BCT API</h4>
                        <p className="p-pera">The agent should call ListTransferRecords with an appropriate query to get a list of TransferIds that are available to cancel. </p>
                        <Row>
                            <Col lg={6}>
                                <div className="heading-box">
                                    <h4 className="h4-heading">Access Token</h4>
                                    <p className="p-pera"><strong>POST</strong> Token Generation (Bearer)</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/user/token</p>
                                    <p className="p-pera">Generates token for merchant authentication and authorization.</p>
                                    <p className="error-heading-pra">HEADERS</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Content-Type</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Accept</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Origin</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>developer.ecobank.com</p>
                                                    <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">Body</p>
                                    <div className="auth-box">
                                        <div className="auth-pera-box">
                                        {bodyjsondata ? <Bodytext data={bodyjsondata} /> : <p>Loading...</p>}
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="copy-board-box">
                                    <div className="code-box">
                                        <div className="respons-url-box">
                                            <p
                                                onClick={() => setUrlapiopen(!urlapiopen)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={urlapiopen}
                                                className="url-but-box">
                                                <div className="">
                                                    <Button className="but-api-url-method">Post</Button>
                                                    <span className="url-span">/api/V1/CancelTransfers</span>
                                                </div>
                                                {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                            </p>

                                            <Collapse in={urlapiopen}>
                                                <div id="example-collapse-text" className="collapse-box">
                                                    <div className="coll-list">
                                                        <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div>
                                            <p className="heading-code-box">Request samples</p>
                                            {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                            <p className="heading-code-box">Response samples</p>

                                            <Tabs
                                                defaultActiveKey="200"
                                                transition={false}
                                                id="noanim-tab-example"
                                                className="mb-3"
                                            >
                                                <Tab className="response-code-tab" eventKey="200" title="200">
                                                    <div className="url-but-box-1">

                                                        <div className="dropMenu">
                                                            <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                <option value="option1" className="option-h">
                                                                    application/json
                                                                </option>
                                                                <option value="option2" className="option-h">
                                                                    text/json
                                                                </option>
                                                            </select>
                                                        </div>
                                                        {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="400" title="400">
                                                    <div className="url-but-box-1">
                                                        {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="401" title="401">
                                                    <div className="url-but-box-1">
                                                        {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="500" title="500">
                                                    <div className="url-but-box-1">
                                                        {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="501" title="501">
                                                    <div className="url-but-box-1">
                                                        {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>


                    {/**********  Collections  **********/}
                    <div className="mt-4">
                        <Row>
                            <Col lg={6}>
                                <div className="heading-box">
                                    <h4 className="h4-heading pt-4">Collections</h4>
                                    <p className="error-heading-pra">Overview</p>
                                    <p className="p-pera">Collection microservice has functionalities that will allow Ecobank to accept payments from your customers through the means of your choosing. eg.(Portal integration, Mobile App, POS, Web App etc.)
                                        On our sandbox you are able to very quickly generate a REST API on top of our collections microservice, therefore allowing you to explore it within Postman.</p>
                                    <p className="error-heading-pra">Setup</p>
                                    <p className="p-pera">Ensure you have the acquired the appropriate credential to make requests to Unified Developer LAB API.</p>
                                    <p className="p-pera"><strong>POST</strong> Card Payment</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/Signature</p>
                                    <p className="p-pera">This call allows merchants to receive payments via debit and credit cards from customers.</p>
                                    <p className="error-heading-pra">AUTHORIZATION <span>Bearer Token</span></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Token</td>
                                                <td className='error-t-body-head error-body-text'>{`<token>`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">HEADERS</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Authorization</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>Bearer {`{{access_token}}`}</p>
                                                    <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Content-Type</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Accept</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Origin</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>developer.ecobank.com</p>
                                                    <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">Body</p>
                                    <div className="auth-box">
                                        <div className="auth-pera-box">
                                        {collectionjsondata ? <Bodytext data={collectionjsondata} /> : <p>Loading...</p>}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>

                                <div className="copy-board-box">
                                    <div className="code-box">
                                        <div className="respons-url-box">
                                            <p
                                                onClick={() => setUrlapiopen(!urlapiopen)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={urlapiopen}
                                                className="url-but-box">
                                                <div className="">
                                                    <Button className="but-api-url-method">Post</Button>
                                                    <span className="url-span">/api/V1/CancelTransfers</span>
                                                </div>
                                                {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                            </p>

                                            <Collapse in={urlapiopen}>
                                                <div id="example-collapse-text" className="collapse-box">
                                                    <div className="coll-list">
                                                        <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div>
                                            <p className="heading-code-box">Request samples</p>
                                            <div className="url-but-box-1">
                                                {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                            </div>

                                            <p className="heading-code-box">Response samples</p>
                                            <Tabs
                                                defaultActiveKey="200"
                                                transition={false}
                                                id="noanim-tab-example"
                                                className="mb-3"
                                            >
                                                <Tab className="response-code-tab" eventKey="200" title="200">
                                                    <div className="url-but-box-1">

                                                        <div className="dropMenu">
                                                            <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                <option value="option1" className="option-h">
                                                                    application/json
                                                                </option>
                                                                <option value="option2" className="option-h">
                                                                    text/json
                                                                </option>
                                                            </select>
                                                        </div>
                                                        {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="400" title="400">
                                                    <div className="url-but-box-1">
                                                        {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="401" title="401">
                                                    <div className="url-but-box-1">
                                                        {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="500" title="500">
                                                    <div className="url-but-box-1">
                                                        {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="501" title="501">
                                                    <div className="url-but-box-1">
                                                        {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                        <div className="mt-4">
                            <Row>
                                <Col lg={6}>
                                    <p className="p-pera"><strong>POST</strong> Merchant Category Code (MCC)</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/Signature</p>
                                    <p className="p-pera">This call allows merchants to receive payments via debit and credit cards from customers.</p>
                                    <p className="error-heading-pra">AUTHORIZATION <span>Bearer Token</span></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Token</td>
                                                <td className='error-t-body-head error-body-text'>{`<token>`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">HEADERS</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Authorization</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>Bearer {`{{access_token}}`}</p>
                                                    <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Content-Type</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Accept</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Origin</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>developer.ecobank.com</p>
                                                    <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">Body</p>
                                    <div className="auth-box">
                                        <div className="auth-pera-box">
                                            {collectionjsondata1 ? <Bodytext data={collectionjsondata1} /> : <p>Loading...</p>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="copy-board-box">
                                        <div className="code-box">
                                            <div className="respons-url-box">
                                                <p
                                                    onClick={() => setUrlapiopen(!urlapiopen)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={urlapiopen}
                                                    className="url-but-box">
                                                    <div className="">
                                                        <Button className="but-api-url-method">Post</Button>
                                                        <span className="url-span">/api/V1/CancelTransfers</span>
                                                    </div>
                                                    {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                </p>

                                                <Collapse in={urlapiopen}>
                                                    <div id="example-collapse-text" className="collapse-box">
                                                        <div className="coll-list">
                                                            <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div>
                                                <p className="heading-code-box">Request samples</p>
                                                <div className="url-but-box-1">
                                                    {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                                </div>

                                                <p className="heading-code-box">Response samples</p>
                                                <Tabs
                                                    defaultActiveKey="200"
                                                    transition={false}
                                                    id="noanim-tab-example"
                                                    className="mb-3"
                                                >
                                                    <Tab className="response-code-tab" eventKey="200" title="200">
                                                        <div className="url-but-box-1">

                                                            <div className="dropMenu">
                                                                <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                    <option value="option1" className="option-h">
                                                                        application/json
                                                                    </option>
                                                                    <option value="option2" className="option-h">
                                                                        text/json
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="400" title="400">
                                                        <div className="url-but-box-1">
                                                            {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="401" title="401">
                                                        <div className="url-but-box-1">
                                                            {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="500" title="500">
                                                        <div className="url-but-box-1">
                                                            {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="501" title="501">
                                                        <div className="url-but-box-1">
                                                            {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-4">
                            <Row>
                                <Col lg={6}>
                                    <p className="p-pera"><strong>POST</strong> Merchant Qr Creation</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/createqr</p>
                                    <p className="p-pera">This endpoint allows merchants to register and be assigned a terminal to recieve Qr payments.</p>
                                    <p className="error-heading-pra">AUTHORIZATION <span>Bearer Token</span></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Token</td>
                                                <td className='error-t-body-head error-body-text'>{`<token>`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">HEADERS</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Authorization</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>Bearer {`{{access_token}}`}</p>
                                                    <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Content-Type</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Accept</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Origin</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>developer.ecobank.com</p>
                                                    <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">Body</p>
                                    <div className="auth-box">
                                        <div className="auth-pera-box">
                                        {collectionjsondata2 ? <Bodytext data={collectionjsondata2} /> : <p>Loading...</p>}

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="copy-board-box">
                                        <div className="code-box">
                                            <div className="respons-url-box">
                                                <p
                                                    onClick={() => setUrlapiopen(!urlapiopen)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={urlapiopen}
                                                    className="url-but-box">
                                                    <div className="">
                                                        <Button className="but-api-url-method">Post</Button>
                                                        <span className="url-span">/api/V1/CancelTransfers</span>
                                                    </div>
                                                    {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                </p>

                                                <Collapse in={urlapiopen}>
                                                    <div id="example-collapse-text" className="collapse-box">
                                                        <div className="coll-list">
                                                            <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div>
                                                <p className="heading-code-box">Request samples</p>
                                                <div className="url-but-box-1">
                                                    {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                                </div>

                                                <p className="heading-code-box">Response samples</p>
                                                <Tabs
                                                    defaultActiveKey="200"
                                                    transition={false}
                                                    id="noanim-tab-example"
                                                    className="mb-3"
                                                >
                                                    <Tab className="response-code-tab" eventKey="200" title="200">
                                                        <div className="url-but-box-1">

                                                            <div className="dropMenu">
                                                                <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                    <option value="option1" className="option-h">
                                                                        application/json
                                                                    </option>
                                                                    <option value="option2" className="option-h">
                                                                        text/json
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="400" title="400">
                                                        <div className="url-but-box-1">
                                                            {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="401" title="401">
                                                        <div className="url-but-box-1">
                                                            {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="500" title="500">
                                                        <div className="url-but-box-1">
                                                            {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="501" title="501">
                                                        <div className="url-but-box-1">
                                                            {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>



                        <div className="mt-4">
                            <Row>
                                <Col lg={6}>
                                    <p className="p-pera"><strong>POST</strong> Dynamic Qr Payment</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/qr</p>
                                    <p className="p-pera">Call to generate EcobankPay Dynamic Qr</p>
                                    <p className="error-heading-pra">AUTHORIZATION <span>Bearer Token</span></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Token</td>
                                                <td className='error-t-body-head error-body-text'>{`<token>`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">HEADERS</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Authorization</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>Bearer {`{{access_token}}`}</p>
                                                    <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Content-Type</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Accept</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Origin</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>developer.ecobank.com</p>
                                                    <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">Body</p>
                                    <div className="auth-box">
                                        <div className="auth-pera-box">
                                        {collectionjsondata1 ? <Bodytext data={collectionjsondata1} /> : <p>Loading...</p>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="copy-board-box">
                                        <div className="code-box">
                                            <div className="respons-url-box">
                                                <p
                                                    onClick={() => setUrlapiopen(!urlapiopen)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={urlapiopen}
                                                    className="url-but-box">
                                                    <div className="">
                                                        <Button className="but-api-url-method">Post</Button>
                                                        <span className="url-span">/api/V1/CancelTransfers</span>
                                                    </div>
                                                    {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                </p>

                                                <Collapse in={urlapiopen}>
                                                    <div id="example-collapse-text" className="collapse-box">
                                                        <div className="coll-list">
                                                            <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div>
                                                <p className="heading-code-box">Request samples</p>
                                                <div className="url-but-box-1">
                                                    {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                                </div>

                                                <p className="heading-code-box">Response samples</p>
                                                <Tabs
                                                    defaultActiveKey="200"
                                                    transition={false}
                                                    id="noanim-tab-example"
                                                    className="mb-3"
                                                >
                                                    <Tab className="response-code-tab" eventKey="200" title="200">
                                                        <div className="url-but-box-1">

                                                            <div className="dropMenu">
                                                                <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                    <option value="option1" className="option-h">
                                                                        application/json
                                                                    </option>
                                                                    <option value="option2" className="option-h">
                                                                        text/json
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="400" title="400">
                                                        <div className="url-but-box-1">
                                                            {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="401" title="401">
                                                        <div className="url-but-box-1">
                                                            {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="500" title="500">
                                                        <div className="url-but-box-1">
                                                            {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="501" title="501">
                                                        <div className="url-but-box-1">
                                                            {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>

                    </div>

                    {/**********  Account Services  **********/}
                    <div>

                        <div className="heading-box mb-3">
                            <h4 className="h4-heading pt-4">Account Services</h4>
                            <p className="p-pera">STEPS</p>
                            <ol>
                                <li className="p-pera">Register for Sandbox Access if you have not yet registered (Click to Register) -</li>
                                <li className="p-pera">User received an email (User ID, Password, Lab Key & Documentation Link)</li>
                                <li className="p-pera">Click on the Documentation Link sent on</li>
                                <li className="p-pera">Export project to postman</li>
                                <li className="p-pera">Begin your development work by generate the Token using your username and password (sent on mail)</li>
                                <li className="p-pera">Build your secure hash service using your secure service tree</li>
                                <li className="p-pera">Test the balance enquiry service and request for Go-live.</li>
                            </ol>


                            <p className="p-pera"><strong>Endpoint</strong> :https://developer.ecobank.com/corporateapi/merchant/accountbalance</p>
                            <p className="error-heading-pra">BALANCE ENQUIRY</p>
                            <p className="p-pera">REQUEST PAYLOAD</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th
                                            className="th-meth">
                                            FIELD
                                        </th>
                                        <th
                                            className="th-meth">
                                            TYPE
                                        </th>
                                        <th
                                            className="th-meth">
                                            LENGHT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='td-meth'>requestId-Type</td>
                                        <td className='td-meth'>Alphanumeric</td>
                                        <td className='td-meth'>13</td>
                                    </tr>
                                    <tr>
                                        <td className='td-meth'>affiliateCode</td>
                                        <td className='td-meth'>String</td>
                                        <td className='td-meth'>3</td>
                                    </tr>
                                    <tr>
                                        <td className='td-meth'>accountNumber</td>
                                        <td className='td-meth'>Numeric</td>
                                        <td className='td-meth'>40</td>
                                    </tr>
                                </tbody>
                            </table>


                            <p className="error-heading-pra mt-4">RESPONSE PAYLOAD</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th
                                            className="th-meth">
                                            FIELD
                                        </th>
                                        <th
                                            className="th-meth">
                                            TYPE
                                        </th>
                                        <th
                                            className="th-meth">
                                            LENGHT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='td-meth'>requestId-Type</td>
                                        <td className='td-meth'>Alphanumeric</td>
                                        <td className='td-meth'>13</td>
                                    </tr>
                                    <tr>
                                        <td className='td-meth'>affiliateCode</td>
                                        <td className='td-meth'>String</td>
                                        <td className='td-meth'>3</td>
                                    </tr>
                                    <tr>
                                        <td className='td-meth'>accountNumber</td>
                                        <td className='td-meth'>Numeric</td>
                                        <td className='td-meth'>40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <Row>
                                <Col lg={6}>
                                    <p className="p-pera"><strong>POST</strong> Get Account Enquiry</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/accountbalance</p>
                                    <p className="p-pera">Call to generate EcobankPay Dynamic Qr</p>
                                    <p className="error-heading-pra">AUTHORIZATION <span>Bearer Token</span></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Token</td>
                                                <td className='error-t-body-head error-body-text'>{`<token>`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">HEADERS</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Authorization</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>Bearer {`{{access_token}}`}</p>
                                                    <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Content-Type</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Accept</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Origin</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>developer.ecobank.com</p>
                                                    <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">Body</p>
                                    <div className="auth-box">
                                        <div className="auth-pera-box">
                                        {collectionjsondata1 ? <Bodytext data={collectionjsondata1} /> : <p>Loading...</p>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="copy-board-box">
                                        <div className="code-box">
                                            <div className="respons-url-box">
                                                <p
                                                    onClick={() => setUrlapiopen(!urlapiopen)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={urlapiopen}
                                                    className="url-but-box">
                                                    <div className="">
                                                        <Button className="but-api-url-method">Post</Button>
                                                        <span className="url-span">/api/V1/CancelTransfers</span>
                                                    </div>
                                                    {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                </p>

                                                <Collapse in={urlapiopen}>
                                                    <div id="example-collapse-text" className="collapse-box">
                                                        <div className="coll-list">
                                                            <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div>
                                                <p className="heading-code-box">Request samples</p>
                                                <div className="url-but-box-1">
                                                    {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                                </div>

                                                <p className="heading-code-box">Response samples</p>
                                                <Tabs
                                                    defaultActiveKey="200"
                                                    transition={false}
                                                    id="noanim-tab-example"
                                                    className="mb-3"
                                                >
                                                    <Tab className="response-code-tab" eventKey="200" title="200">
                                                        <div className="url-but-box-1">

                                                            <div className="dropMenu">
                                                                <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                    <option value="option1" className="option-h">
                                                                        application/json
                                                                    </option>
                                                                    <option value="option2" className="option-h">
                                                                        text/json
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="400" title="400">
                                                        <div className="url-but-box-1">
                                                            {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="401" title="401">
                                                        <div className="url-but-box-1">
                                                            {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="500" title="500">
                                                        <div className="url-but-box-1">
                                                            {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="501" title="501">
                                                        <div className="url-but-box-1">
                                                            {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>

                        <div className="mt-4">
                            <Row>
                                <Col lg={6}>
                                    <p className="p-pera"><strong>POST</strong>Accountinquirythridpay</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/accountinquirythridpay</p>
                                    <p className="error-heading-pra">AUTHORIZATION <span>Bearer Token</span></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Token</td>
                                                <td className='error-t-body-head error-body-text'>{`<token>`}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">HEADERS</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Authorization</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>Bearer {`{{access_token}}`}</p>
                                                    <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Content-Type</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Accept</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>application/json</p>
                                                    <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='error-t-body error-body-text'>Origin</td>
                                                <td className='error-t-body-head error-body-text'>
                                                    <p>developer.ecobank.com</p>
                                                    <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="error-heading-pra">Body</p>
                                    <div className="auth-box">
                                        <div className="auth-pera-box">
                                        {collectionjsondata1 ? <Bodytext data={collectionjsondata1} /> : <p>Loading...</p>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="copy-board-box">
                                        <div className="code-box">
                                            <div className="respons-url-box">
                                                <p
                                                    onClick={() => setUrlapiopen(!urlapiopen)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={urlapiopen}
                                                    className="url-but-box">
                                                    <div className="">
                                                        <Button className="but-api-url-method">Post</Button>
                                                        <span className="url-span">/api/V1/CancelTransfers</span>
                                                    </div>
                                                    {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                </p>

                                                <Collapse in={urlapiopen}>
                                                    <div id="example-collapse-text" className="collapse-box">
                                                        <div className="coll-list">
                                                            <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div>
                                                <p className="heading-code-box">Request samples</p>
                                                <div className="url-but-box-1">
                                                    {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                                </div>

                                                <p className="heading-code-box">Response samples</p>
                                                <Tabs
                                                    defaultActiveKey="200"
                                                    transition={false}
                                                    id="noanim-tab-example"
                                                    className="mb-3"
                                                >
                                                    <Tab className="response-code-tab" eventKey="200" title="200">
                                                        <div className="url-but-box-1">

                                                            <div className="dropMenu">
                                                                <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                    <option value="option1" className="option-h">
                                                                        application/json
                                                                    </option>
                                                                    <option value="option2" className="option-h">
                                                                        text/json
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="400" title="400">
                                                        <div className="url-but-box-1">
                                                            {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="401" title="401">
                                                        <div className="url-but-box-1">
                                                            {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="500" title="500">
                                                        <div className="url-but-box-1">
                                                            {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>

                                                    <Tab className="response-code-tab" eventKey="501" title="501">
                                                        <div className="url-but-box-1">
                                                            {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>

                    </div>

                    {/**********  Account Opening  **********/}
                    <div className="mt-5">
                        <Row>
                            <Col lg={6}>

                                <div className="heading-box">
                                    <h4 className="h4-heading">Account Opening</h4>
                                    <p className="p-pera"><strong>POST</strong> Create Account Opening</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/createexpressaccount</p>
                                    <p className="error-heading-pra">OVERVIEW</p>
                                    <strong>API to quickly create an account with minimal information.</strong>
                                    <p className="p-pera">The Ecobank Xpress Account is a digital account that is mobile
                                        based. It is simple and does not require any form of documentation for opening,
                                        therefore making it easy and convenient for all, while affording the customers
                                        the same services available to regular account holders**
                                    </p>

                                    <p className="p-pera">STEPS</p>
                                    <ol>
                                        <li className="p-pera">Register for Sandbox Access if you have not yet registered (Click to Register) -</li>
                                        <li className="p-pera">User received an email (User ID, Password, Lab Key & Documentation Link)</li>
                                        <li className="p-pera">Click on the Documentation Link sent on</li>
                                        <li className="p-pera">Export project to postman</li>
                                        <li className="p-pera">Begin your development work by generate the Token using your username and password (sent on mail)</li>
                                        <li className="p-pera">Build your secure hash service using your secure service tree</li>
                                        <li className="p-pera">Test the balance enquiry service and request for Go-live.</li>
                                    </ol>
                                    <p className="p-pera"><strong>Endpoint</strong> :https://developer.ecobank.com/corporateapi/merchant/accountbalance</p>
                                    <p className="error-heading-pra">BALANCE ENQUIRY</p>
                                    <p className="p-pera">REQUEST PAYLOAD</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th
                                                    className="th-meth">
                                                    FIELD
                                                </th>
                                                <th
                                                    className="th-meth">
                                                    TYPE
                                                </th>
                                                <th
                                                    className="th-meth">
                                                    LENGHT
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='td-meth'>requestId-Type</td>
                                                <td className='td-meth'>Alphanumeric</td>
                                                <td className='td-meth'>13</td>
                                            </tr>
                                            <tr>
                                                <td className='td-meth'>affiliateCode</td>
                                                <td className='td-meth'>String</td>
                                                <td className='td-meth'>3</td>
                                            </tr>
                                            <tr>
                                                <td className='td-meth'>accountNumber</td>
                                                <td className='td-meth'>Numeric</td>
                                                <td className='td-meth'>40</td>
                                            </tr>
                                        </tbody>
                                    </table>


                                    <p className="error-heading-pra mt-4">RESPONSE PAYLOAD</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th
                                                    className="th-meth">
                                                    FIELD
                                                </th>
                                                <th
                                                    className="th-meth">
                                                    TYPE
                                                </th>
                                                <th
                                                    className="th-meth">
                                                    LENGHT
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='td-meth'>requestId-Type</td>
                                                <td className='td-meth'>Alphanumeric</td>
                                                <td className='td-meth'>13</td>
                                            </tr>
                                            <tr>
                                                <td className='td-meth'>affiliateCode</td>
                                                <td className='td-meth'>String</td>
                                                <td className='td-meth'>3</td>
                                            </tr>
                                            <tr>
                                                <td className='td-meth'>accountNumber</td>
                                                <td className='td-meth'>Numeric</td>
                                                <td className='td-meth'>40</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>





                                <p className="error-heading-pra">AUTHORIZATION <span>Bearer Token</span></p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Token</td>
                                            <td className='error-t-body-head error-body-text'>{`<token>`}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="error-heading-pra">HEADERS</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Authorization</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>Bearer {`{{access_token}}`}</p>
                                                <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Content-Type</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>application/json</p>
                                                <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Accept</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>application/json</p>
                                                <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Origin</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>developer.ecobank.com</p>
                                                <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="error-heading-pra">Body</p>
                                <div className="auth-box">
                                    <div className="auth-pera-box">
                                    {collectionjsondata1 ? <Bodytext data={collectionjsondata1} /> : <p>Loading...</p>}
                                    </div>
                                </div>
                            </Col>




                            <Col lg={6}>
                                <div className="copy-board-box">
                                    <div className="code-box">
                                        <div className="respons-url-box">
                                            <p
                                                onClick={() => setUrlapiopen(!urlapiopen)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={urlapiopen}
                                                className="url-but-box">
                                                <div className="">
                                                    <Button className="but-api-url-method">Post</Button>
                                                    <span className="url-span">/api/V1/CancelTransfers</span>
                                                </div>
                                                {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                            </p>

                                            <Collapse in={urlapiopen}>
                                                <div id="example-collapse-text" className="collapse-box">
                                                    <div className="coll-list">
                                                        <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div>
                                            <p className="heading-code-box">Request samples</p>
                                            <div className="url-but-box-1">
                                                {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                            </div>

                                            <p className="heading-code-box">Response samples</p>
                                            <Tabs
                                                defaultActiveKey="200"
                                                transition={false}
                                                id="noanim-tab-example"
                                                className="mb-3"
                                            >
                                                <Tab className="response-code-tab" eventKey="200" title="200">
                                                    <div className="url-but-box-1">

                                                        <div className="dropMenu">
                                                            <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                <option value="option1" className="option-h">
                                                                    application/json
                                                                </option>
                                                                <option value="option2" className="option-h">
                                                                    text/json
                                                                </option>
                                                            </select>
                                                        </div>
                                                        {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="400" title="400">
                                                    <div className="url-but-box-1">
                                                        {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="401" title="401">
                                                    <div className="url-but-box-1">
                                                        {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="500" title="500">
                                                    <div className="url-but-box-1">
                                                        {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="501" title="501">
                                                    <div className="url-but-box-1">
                                                        {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="mt-5">
                        <Row>
                            <Col lg={6}>

                                <div className="heading-box">
                                    <p className="p-pera"><strong>POST</strong>Internal Account Opening</p>
                                    <p className="p-pera">https://developer.ecobank.com/corporateapi/merchant/createaccount</p>
                                    <p className="error-heading-pra">OVERVIEW</p>
                                    <p className="p-pera">
                                    This API enable customers to create Ecobank internal accounts.
                                    </p>

                                    <p className="error-heading-pra">HEADERS</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Authorization</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>Bearer {`{{access_token}}`}</p>
                                                <p>The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Content-Type</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>application/json</p>
                                                <p>In responses, a Content-Type header tells the client what the content type of the returned content actually is.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Accept</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>application/json</p>
                                                <p>The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='error-t-body error-body-text'>Origin</td>
                                            <td className='error-t-body-head error-body-text'>
                                                <p>developer.ecobank.com</p>
                                                <p>The Origin request header indicates where a fetch originates from. It doesn't include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                 
                                    <p className="p-pera">REQUEST PAYLOAD</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th
                                                    className="th-meth">
                                                    FIELD
                                                </th>
                                                <th
                                                    className="th-meth">
                                                    TYPE
                                                </th>
                                                <th
                                                    className="th-meth">
                                                    LENGHT
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='td-meth'>requestId-Type</td>
                                                <td className='td-meth'>Alphanumeric</td>
                                                <td className='td-meth'>13</td>
                                            </tr>
                                            <tr>
                                                <td className='td-meth'>affiliateCode</td>
                                                <td className='td-meth'>String</td>
                                                <td className='td-meth'>3</td>
                                            </tr>
                                            <tr>
                                                <td className='td-meth'>accountNumber</td>
                                                <td className='td-meth'>Numeric</td>
                                                <td className='td-meth'>40</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="error-heading-pra">Body</p>
                                <div className="auth-box">
                                    <div className="auth-pera-box">
                                    {collectionjsondata1 ? <Bodytext data={collectionjsondata1} /> : <p>Loading...</p>}

                                    </div>
                                </div>
                            </Col>




                            <Col lg={6}>
                                <div className="copy-board-box">
                                    <div className="code-box">
                                        <div className="respons-url-box">
                                            <p
                                                onClick={() => setUrlapiopen(!urlapiopen)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={urlapiopen}
                                                className="url-but-box">
                                                <div className="">
                                                    <Button className="but-api-url-method">Post</Button>
                                                    <span className="url-span">/api/V1/CancelTransfers</span>
                                                </div>
                                                {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                            </p>

                                            <Collapse in={urlapiopen}>
                                                <div id="example-collapse-text" className="collapse-box">
                                                    <div className="coll-list">
                                                        <p className="url-show">https://api.dingconnect.com/api/V1/CancelTransfers</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div>
                                            <p className="heading-code-box">Request samples</p>
                                            <div className="url-but-box-1">
                                                {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                            </div>

                                            <p className="heading-code-box">Response samples</p>
                                            <Tabs
                                                defaultActiveKey="200"
                                                transition={false}
                                                id="noanim-tab-example"
                                                className="mb-3"
                                            >
                                                <Tab className="response-code-tab" eventKey="200" title="200">
                                                    <div className="url-but-box-1">

                                                        <div className="dropMenu">
                                                            <select id="selectField" onChange={handleSelectChange} className="select-box" >
                                                                <option value="option1" className="option-h">
                                                                    application/json
                                                                </option>
                                                                <option value="option2" className="option-h">
                                                                    text/json
                                                                </option>
                                                            </select>
                                                        </div>
                                                        {jsonData200 ? <Codetext data={jsonData200} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="400" title="400">
                                                    <div className="url-but-box-1">
                                                        {jsonData400 ? <Codetext data={jsonData400} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="401" title="401">
                                                    <div className="url-but-box-1">
                                                        {jsonData401 ? <Codetext data={jsonData401} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="500" title="500">
                                                    <div className="url-but-box-1">
                                                        {jsonData500 ? <Codetext data={jsonData500} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>

                                                <Tab className="response-code-tab" eventKey="501" title="501">
                                                    <div className="url-but-box-1">
                                                        {jsonData501 ? <Codetext data={jsonData501} /> : <p>Loading...</p>}
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}










