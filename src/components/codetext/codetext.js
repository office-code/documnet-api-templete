import React from "react";
import ReactJson from "react-json-view";

const Codetext = ({ data }) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        alert("JSON copied to clipboard! ✅");
    };

    return (
        <>
            <div style={{ position: "relative", zIndex: "0", padding: "10px", background: "#002b36", borderRadius: "8px" }}>
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
                        zIndex: "9999",
                        margin: "10px",
                        fontSize: "11px",

                    }}
                >
                    Copy📋
                </button>
                <ReactJson
                    src={data}
                    name={false}
                    theme="ocean"
                    collapsed={false}
                    enableClipboard={false}
                    displayDataTypes={false}
                />
            </div>
        </>
    );
};

export default Codetext;















