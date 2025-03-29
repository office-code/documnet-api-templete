import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Button, Collapse } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Codetext from "../components/codetext/codetext";
import Bodytext from "../components/codetext/bodytext";
import code from "../json/code1.json"
export default function Bankaccount() {
  const [jsonData, setJsonData] = useState([]);
  const [createbankaccount, setcreatebankaccount] = useState(null);
  const [updatebankaccount, setupdatebankaccount] = useState(null);
  const [listbankaccount, setlistbankaccount] = useState(null);
  // const [jsonData500, setJsonData500] = useState(null);
  // const [jsonData501, setJsonData501] = useState(null);
  // const [bodyjsondata, setbodyjsondata] = useState(null);
  // const [collectionjsondata, setcollectionjsondata] = useState(null);
  // const [collectionjsondata1, setcollectionjsondata1] = useState(null);
  // const [collectionjsondata2, setcollectionjsondata2] = useState(null);


  useEffect(() => {
    setJsonData(code.bankaccount)
    setcreatebankaccount(code.createbankaccount[0])
    setupdatebankaccount(code.updatebankaccount[0])
    setlistbankaccount(code.listofbankaccount[0])
    // setJsonData500(code.response[3].code500)
    // setJsonData501(code.response[4].code501)
    // setbodyjsondata(code.bodydata[0])
    // setcollectionjsondata(code.collection[0])
    // setcollectionjsondata1(code.collection1[0])
    // setcollectionjsondata2(code.collection2[0])
  }, []);


  return (
    <div className="box-dashboard-r">
      <div className="dashboard-wrapper">
        <div className="container">

          {/**********  bankaccounts  **********/}
          <div>
            <Row>
              <Col lg={6}>
                <div className="heading-box">
                  <h1>hello</h1>
                  <h4 className="h4-heading">Bank Accounts</h4>
                  <p className="p-pera">These bank accounts are payment methods on Customer objects.</p>
                  <p className="p-pera">On the other hand External Accounts are transfer destinations on Account objects for connected accounts. They can be bank accounts or debit cards as well, and are documented in the links above.</p>
                  <p className="p-pera">Related guide: Bank debits and transfers</p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="copy-board-box">
                  <div className="code-box">
                    {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/**********  create bank account  **********/}

          <div className="mt-5">
            <Row>
              <Col lg={6}>
                <div className="heading-box">
                  <h4 className="h4-heading">Create a bank account</h4>
                  <p className="p-pera">This POST operation lets you create and store new bank account objects with your app</p>
                  <p className="error-heading-pra">Header Parameters</p>
                  <p className="p-pera">In your request, specify the request-Id as a header parameter. If the server receives another request with the same request-Id, instead of performing the operation again and potentially returning an error, it sends the same response intended for the original request.</p>
                  <p className="p-pera">The request-Id must be unique across all requests, regardless of endpoint, for a given QuickBooks Online company.</p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="copy-board-box">
                  <div className="code-box">
                    {createbankaccount ? <Codetext data={createbankaccount} /> : <p>Loading...</p>}
                  </div>
                </div>
              </Col>
            </Row>
          </div>



          {/**********  Update bank account  **********/}

          <div className="mt-5">
            <Row>
              <Col lg={6}>
                <div className="heading-box">
                  <h4 className="h4-heading">Update a bank account</h4>
                  <p className="p-pera">Updates the account_holder_name, account_holder_type, and metadata of a bank account belonging to a customer. Other bank account details are not editable, by design.</p>
                  {/* <p className="error-heading-pra">Header Parameters</p> */}

                  <p className="error-heading-pra">HEADERS</p>
                  {/* <p className="p-pera">In your request, specify the request-Id as a header parameter. If the server receives another request with the same request-Id, instead of performing the operation again and potentially returning an error, it sends the same response intended for the original request.</p> */}
                  {/* <p className="p-pera">The request-Id must be unique across all requests, regardless of endpoint, for a given QuickBooks Online company.</p> */}
                  <table>
                    <tbody>
                      <tr>
                        <td className='error-t-body error-body-text'>account_holder_name</td>
                        <td className='error-t-body-head error-body-text'>
                          <p>string</p>
                          <p>The name of the person or business that owns the bank account.</p>
                        </td>
                      </tr>
                      <tr>
                        <td className='error-t-body error-body-text'>account_holder_type</td>
                        <td className='error-t-body-head error-body-text'>
                          <p>string</p>
                          <p>The type of entity that holds the account. This can be either individual or company.</p>
                        </td>
                      </tr>
                      <tr>
                        <td className='error-t-body error-body-text'>metadata</td>
                        <td className='error-t-body-head error-body-text'>
                          <p>object</p>
                          <p>Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <p className="error-heading-pra">Body</p>
                  <div className="auth-box">
                    <div className="auth-pera-box">
                      {collectionjsondata ? <Bodytext data={collectionjsondata} /> : <p>Loading...</p>}
                    </div>
                  </div> */}
                </div>
              </Col>

              <Col lg={6}>
                <div className="copy-board-box">
                  <div className="code-box">
                    {updatebankaccount ? <Codetext data={updatebankaccount} /> : <p>Loading...</p>}
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/**********  get details bank account   **********/}

          <div className="mt-5">
            <Row>
              <Col lg={6}>
                <div className="heading-box">
                  <h4 className="h4-heading">Get details about a bank account</h4>
                  <p className="p-pera">This GET operation gets info for a specific bank account object.</p>
                  <p className="p-pera">Use the id attribute to identify the customer the bank account is associated with.</p>
                  <p className="error-heading-pra">Header Parameters</p>
                  <p className="p-pera">In your request, specify the request-Id as a header parameter. If the server receives another request with the same request-Id, instead of performing the operation again and potentially returning an error, it sends the same response intended for the original request.</p>
                  <p className="p-pera">The request-Id must be unique across all requests, regardless of endpoint, for a given QuickBooks Online company.</p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="copy-board-box">
                  <div className="code-box">
                    {updatebankaccount ? <Codetext data={updatebankaccount} /> : <p>Loading...</p>}
                  </div>
                </div>
              </Col>
            </Row>
          </div>



           {/**********  list bank account   **********/}

           <div className="mt-5">
            <Row>
              <Col lg={6}>
                <div className="heading-box">
                  <h4 className="h4-heading">Get a list of bank accounts</h4>
                  <p className="p-pera">You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional bank accounts.</p>
                  <p className="error-heading-pra">Header Parameters</p>
                  <p className="p-pera">In your request, specify the request-Id as a header parameter. If the server receives another request with the same request-Id, instead of performing the operation again and potentially returning an error, it sends the same response intended for the original request.</p>
                  <p className="p-pera">The request-Id must be unique across all requests, regardless of endpoint, for a given QuickBooks Online company.</p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="copy-board-box">
                  <div className="code-box">
                    {listbankaccount ? <Codetext data={listbankaccount} /> : <p>Loading...</p>}
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










