import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Button, Collapse } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Codetext from "../components/codetext/codetext";
import code from "../json/code1.json"
export default function Methods() {
    const [jsonData, setJsonData] = useState(null);
    const [jsonData200, setJsonData200] = useState(null);
    const [jsonData400, setJsonData400] = useState(null);
    const [jsonData401, setJsonData401] = useState(null);
    const [jsonData500, setJsonData500] = useState(null);
    const [jsonData501, setJsonData501] = useState(null);

    useEffect(() => {
        setJsonData(code.request[0].data)
        setJsonData200(code.response[0].code200)
        setJsonData400(code.response[1].code400)
        setJsonData401(code.response[2].code401)
        setJsonData500(code.response[3].code500)
        setJsonData501(code.response[4].code501)
    }, []);


    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

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
                                    <h4 className="h4-heading">CancelTransfers</h4>
                                    <p className="p-pera">Attempt to cancel transfers with the submitted TransferIds</p>
                                    <p className="p-pera">Not all transfers can be cancelled. This method will return the ProcessingState of the transfer: if the state is "Cancelled", then the transfer was successfully cancelled and any appropriate balance compensations will have been applied to the agent account. If the state is anything else, then the transfer could not be cancelled.</p>
                                    <p className="p-pera">Please see the documentation section on batching.</p>
                                    <p className="p-pera">The agent should call ListTransferRecords with an appropriate query to get a list of TransferIds that are available to cancel. </p>
                                </div>

                            </Col>

                            <Col lg={6}>
                                <div className="auth-box">
                                    <div className="auth-pera-box">
                                        <p className="">header Parameters</p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>X-Correlation-Id</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <p>String</p>
                                                <h6 className='error-t-body'>Correlates HTTP requests between a client and server</h6>
                                            </Col>
                                            <p className="">Request Body schema: <span>application/json</span></p>
                                            <h6 className='error-t-body'>An explicit list of records to cancel.</h6>
                                            <h6 className='error-t-body'>Array () [</h6>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>TransferId</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>object (TransferId)</h6>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>BatchItemRef</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <p>string</p>
                                                <h6 className='error-t-body'>A unique number for an item in an overall batched request</h6>
                                            </Col>
                                            <p>]</p>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <h4 className="h4-heading">Responses</h4>
                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-200"> <IoIosArrowDown /> 200 OK</p> : <p className="button-plus status-200"> <IoIosArrowForward /> 200 OK</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen1(!open1)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open1}
                            className='show-hide-toggle'>
                            {open1 ? <p className="button-close status-400"> <IoIosArrowDown /> 400 BadRequest</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 400 BadRequest</p>}
                        </p>
                        <Collapse in={open1}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open2}
                            className='show-hide-toggle'>
                            {open2 ? <p className="button-close status-400"> <IoIosArrowDown /> 401 Unauthorized</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 401 Unauthorized</p>}
                        </p>
                        <Collapse in={open2}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen3(!open3)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open3}
                            className='show-hide-toggle'>
                            {open3 ? <p className="button-close status-400"> <IoIosArrowDown /> 500 InternalServerError
                            </p> : <p className="button-plus status-400"> <IoIosArrowForward /> 500 InternalServerError</p>}
                        </p>
                        <Collapse in={open3}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen4(!open4)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open4 ? <p className="button-close status-400"> <IoIosArrowDown /> 503 ServiceUnavailable
                            </p> : <p className="button-plus status-400"> <IoIosArrowForward /> 503 ServiceUnavailable</p>}
                        </p>
                        <Collapse in={open4}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">

                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

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
                    </div>

                    {/**********  EstimatePrices  **********/}
                    <div>
                        <Row>
                            <Col lg={6}>
                                <div className="heading-box">
                                    <h4 className="h4-heading pt-4">EstimatePrices</h4>
                                    <p className="p-pera">Estimate prices for send or receive values</p>
                                    <p className="p-pera">Before a transfer is attempted, it is impossible to know the exact value that an account will receive due to fluctuating foreign exchange rates, provider promotions and fees. This API call will attempt to estimate, from the current prices in the products list, what receive value will result from a given send value or vice versa.</p>
                                    <p className="p-pera">Please see the documentation section on batching.</p>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="auth-box pt-4">
                                    <div className="auth-pera-box">
                                        <p className="">header Parameters</p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>X-Correlation-Id</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <p>String</p>
                                                <h6 className='error-t-body'>Correlates HTTP requests between a client and server</h6>
                                            </Col>
                                            <p className="">Request Body schema: <span>application/json</span></p>
                                            <h6 className='error-t-body'>An explicit list of records to cancel.</h6>
                                            <h6 className='error-t-body'>Array () [</h6>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>TransferId</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>object (TransferId)</h6>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>BatchItemRef</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <p>string</p>
                                                <h6 className='error-t-body'>A unique number for an item in an overall batched request</h6>
                                            </Col>
                                            <p>]</p>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <h4 className="h4-heading">Responses</h4>
                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-200"> <IoIosArrowDown /> 200 OK</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 200 OK</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 400 BadRequest</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 400 BadRequest</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 401 Unauthorized</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 401 Unauthorized</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 500 InternalServerError
                            </p> : <p className="button-plus status-400"> <IoIosArrowForward /> 500 InternalServerError</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 503 ServiceUnavailable
                            </p> : <p className="button-plus status-400"> <IoIosArrowForward /> 503 ServiceUnavailable</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">

                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

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



                    </div>

                    {/**********  GetAccountLookup  **********/}
                    <div>
                        <Row>
                            <Col lg={6}>
                                <div className="heading-box">
                                    <h4 className="h4-heading pt-4">EstimatePrices</h4>
                                    <p className="p-pera">Estimate prices for send or receive values</p>
                                    <p className="p-pera">Before a transfer is attempted, it is impossible to know the exact value that an account will receive due to fluctuating foreign exchange rates, provider promotions and fees. This API call will attempt to estimate, from the current prices in the products list, what receive value will result from a given send value or vice versa.</p>
                                    <p className="p-pera">Please see the documentation section on batching.</p>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="auth-box pt-4">
                                    <div className="auth-pera-box">
                                        <p className="">header Parameters</p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>X-Correlation-Id</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <p>String</p>
                                                <h6 className='error-t-body'>Correlates HTTP requests between a client and server</h6>
                                            </Col>
                                            <p className="">Request Body schema: <span>application/json</span></p>
                                            <h6 className='error-t-body'>An explicit list of records to cancel.</h6>
                                            <h6 className='error-t-body'>Array () [</h6>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>TransferId</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>object (TransferId)</h6>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>BatchItemRef</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <p>string</p>
                                                <h6 className='error-t-body'>A unique number for an item in an overall batched request</h6>
                                            </Col>
                                            <p>]</p>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <h4 className="h4-heading">Responses</h4>
                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close"> <IoIosArrowDown /> 200 OK</p> : <p className="button-plus"> <IoIosArrowForward /> 200 OK</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 400 BadRequest</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 400 BadRequest</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 401 Unauthorized</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 401 Unauthorized</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close"> <IoIosArrowDown /> 500 InternalServerError
                            </p> : <p className="button-plus"> <IoIosArrowForward /> 500 InternalServerError</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close"> <IoIosArrowDown /> 503 ServiceUnavailable
                            </p> : <p className="button-plus"> <IoIosArrowForward /> 503 ServiceUnavailable</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">

                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

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
                    </div>

                    {/**********  GetBalance  **********/}

                    <div>
                        <Row>
                            <Col lg={6}>
                                <div className="heading-box">
                                    <h4 className="h4-heading pt-4">GetBalance</h4>
                                    <p className="p-pera">Get the current agent balance</p>
                                    <p className="p-pera">Returns the current agent balance. This will include any commission-on-sale increments, but will not reflect any transfers that are currently processing.</p>
                                    <p className="p-pera">For Instant transfers, the balance is decremented after a successful interaction with the product provider. For Batch transfers, the balance is decremented immediately, and will be refunded later in case of failure.</p>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="auth-box pt-4">
                                    <div className="auth-pera-box">
                                        <p className="">header Parameters</p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>X-Correlation-Id</h6>
                                            </Col>
                                            <Col lg={8}>
                                                <p>String</p>
                                                <h6 className='error-t-body'>Correlates HTTP requests between a client and server</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <h4 className="h4-heading">Responses</h4>
                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-200"> <IoIosArrowDown /> 200 OK</p> : <p className="button-plus status-200"> <IoIosArrowForward /> 200 OK</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 400 BadRequest</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 400 BadRequest</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 401 Unauthorized</p> : <p className="button-plus status-400"> <IoIosArrowForward /> 401 Unauthorized</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 500 InternalServerError
                            </p> : <p className="button-plus status-400"> <IoIosArrowForward /> 500 InternalServerError</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">
                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <p
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='show-hide-toggle'>
                            {open ? <p className="button-close status-400"> <IoIosArrowDown /> 503 ServiceUnavailable
                            </p> : <p className="button-plus status-400"> <IoIosArrowForward /> 503 ServiceUnavailable</p>}
                        </p>
                        <Collapse in={open}>
                            <div id="example-collapse-text" className="collapse-box">
                                <div className="coll-list">

                                    <div className="auth-pera-box">
                                        <p className="">Response Schema: </p>
                                        <Row>
                                            <Col lg={4}>
                                                <h6 className='error-t-body'>Items</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (TransferWithState)</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ResultCode</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>integer int32</h6>
                                            </Col>

                                            <Col lg={4}>
                                                <h6 className='error-t-body'>ErrorCodes</h6>
                                                <p className="error-code-req">required</p>
                                            </Col>
                                            <Col lg={8}>
                                                <h6 className='error-t-body'>Array of objects (Error)</h6>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Collapse>

                        <div className="copy-board-box">
                            <div className="code-box">
                                <div className="respons-url-box">
                                    <p
                                        onClick={() => setUrlapiopen(!urlapiopen)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={urlapiopen}
                                        className="url-but-box">
                                        <div className="">
                                            <Button className="but-api-url-method">get</Button>
                                            <span className="url-span">/api/V1/GetBalance</span>
                                        </div>
                                        {urlapiopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </p>

                                    <Collapse in={urlapiopen}>
                                        <div id="example-collapse-text" className="collapse-box">
                                            <div className="coll-list">
                                                <p className="url-show">https://api.dingconnect.com/api/V1/GetBalance</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}










