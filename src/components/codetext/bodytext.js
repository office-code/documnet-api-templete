import React, { useState } from "react";
import ReactJson from "react-json-view";
import { Modal } from "react-bootstrap";

const Bodytext = ({ data }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        alert("JSON copied to clipboard! ✅");
    };

    // ✅ Check if JSON is large (More than 6 lines)
    const jsonString = JSON.stringify(data, null, 2);
    const jsonLines = jsonString.split("\n").length; // Count lines
    const isLargeJson = jsonLines > 6; // Show "View More" only if more than 6 lines

    return (
        <>
            {/* JSON Container with Overlay */}
            <div style={{
                position: "relative",
                padding: "10px",
                background: "#002b36",
                borderRadius: "8px",
                maxHeight: isLargeJson ? "200px" : "auto",  // Restrict height if JSON is large
                overflow: "hidden",
                zIndex: "0",
            }}>
                {/* JSON Viewer (Collapsed if Large) */}
                <ReactJson
                    src={data}
                    name={false}
                    theme="ocean"
                    collapsed={isLargeJson ? 1 : false} // Collapse only if large JSON
                    enableClipboard={false}
                    displayDataTypes={false}
                />

                {/* ✅ Show "View More" only if JSON is large */}
                {isLargeJson && (
                    <div style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        height: "50px",
                        background: "linear-gradient(to top, rgba(0, 43, 54, 1), rgba(0, 43, 54, 0))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <button
                            onClick={handleShow}
                            style={{
                                background: "#fff",
                                border: "none",
                                padding: "6px 12px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>

            {/* Modal with Full JSON */}
            <Modal show={show} onHide={handleClose} className="search-mdl1" centered size="lg">
                <Modal.Header closeButton className="search-mdl"></Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            position: "relative",
                            padding: "10px",
                            background: "#002b36",
                            borderRadius: "8px",
                            maxHeight: "500px",  // ✅ Scroll height reduced
                            overflowY: "auto",  
                            overflowX: "auto",
                            scrollbarWidth: "thin", // ✅ Custom scrollbar
                            scrollbarColor: "rgb(98 98 97 / 51%) rgb(0, 43, 54)" // ✅ Scrollbar color
                        }}>

                        <button
                            onClick={handleCopy}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "#5e7660",
                                color: "white",
                                border: "none",
                                padding: "5px 10px",
                                cursor: "pointer",
                                borderRadius: "4px",
                                fontSize: "11px",
                                zIndex: "999"
                            }}
                        >
                            Copy📋
                        </button>
                        <ReactJson
                            src={data}
                            name={false}
                            theme="ocean"
                            collapsed={false} // Full JSON in modal
                            enableClipboard={false}
                            displayDataTypes={false}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Bodytext;



