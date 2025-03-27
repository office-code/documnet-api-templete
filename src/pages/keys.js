import React, { useEffect, useState } from 'react'
import { TbInfoSquareRounded } from "react-icons/tb";
import keysapi from "../json/code1.json"
import { RiFileCopy2Fill } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';

export default function Keys() {
  const [copied, setCopied] = useState(false);
  const [copiedFieldName, setCopiedFieldName] = useState(false);
  const [keysdata, setKeysdata] = useState("")
  const [keysdata1, setKeysdata1] = useState("")


  useEffect(() => {
    setKeysdata(keysapi.apikeys[0].publickey)
    setKeysdata1(keysapi.apikeys[1].secretkey)

  }, [keysdata])



  // Handle copy functionality
  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedFieldName(fieldName); // Indicate which field was copied
        setCopied(true);

        // Reset the copied state after 1.5 seconds
        setTimeout(() => {
          setCopied(false);
          setCopiedFieldName(null);
        }, 1500);
      })
      .catch(() => toast.error("Failed to copy to clipboard"));
  };


  return (
    <div className="box-dashboard-r">
      <div className="dashboard-wrapper">
        <div className="container">
          <h4 className="h4-heading">API Keys</h4>
          <div className="heading-box">
            <p className="p-pera"><TbInfoSquareRounded /> Viewing live keys Toggle to view demo keys</p>
          </div>

          <div className='keys-box mt-5'>
            <div className="heading-box mb-5">
              <h4 className="h4-heading mb-0">Standard Keys</h4>
              <p className="p-pera">These key will allow you to authenticate ali request</p>
            </div>
            <div className="">
              {/* Regenerate Live Keys
                Regenerate Demo Keys */}
              <p className='keys-name'>Regenerate Demo Keys</p>
            </div>
          </div>
          <div className=''>
            <table width="100%">
              <thead>
                <tr>
                  <th
                    className="th-meth">
                    Name
                  </th>
                  <th
                    className="th-meth">
                    Token
                  </th>
                  <th
                    className="th-meth">
                    Last Used
                  </th>
                  <th
                    className="th-meth">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td-meth'>{keysdata.keyname}</td>
                  {keysdata?.token ? (
                    <td className="td-meth">
                      ---BEGIN PRIVATE KEY--- {keysdata.token.slice(0, 20)}...
                      <RiFileCopy2Fill
                        style={{color:"#000", padding:"3px", fontSize:"20px"}}
                        onClick={() => handleCopy(keysdata.token)}
                      />
                    </td>
                  ) : (
                    <></>
                  )}
                  <td className='td-meth'>-</td>
                  <td className='td-meth'>{keysdata?.date}</td>
                </tr>
                <tr>
                  <td className='td-meth'>{keysdata1.keyname}</td>
                  {keysdata1?.token ? (
                    <td className="td-meth">
                      ---BEGIN PRIVATE KEY--- {keysdata1.token.slice(0, 20)}...
                      <RiFileCopy2Fill
                        style={{color:"#000", padding:"3px", fontSize:"20px"}}
                        onClick={() => handleCopy(keysdata1.token)}
                      />
                      {/* {copiedFieldName === 'Secret key' && copied && <span
                        style={{
                          fontSize: '0.875rem', // Small text
                          color: '#38a169',     // Green color
                          marginLeft: '8px',    // Margin-left
                        }}
                      >Copied</span>} */}
                    </td>
                  ) : (
                    <></>
                  )}
                  <td className='td-meth'>-</td>
                  <td className='td-meth'>{keysdata1.date}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}







