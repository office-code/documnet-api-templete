import React, { useState, useRef } from "react";
import image from "../assets/images/logo2.png"
export default function Brandguidelines() {

    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">
                    <h4 className="h4-heading">Brand Guidelines</h4>
                    <div className="img-box-1">
                        <img src={image} className="" />
                    </div>
                    <p className="p-pera">The MTN MoMo logo will only be used at the payment stage of your customer journey. Below are the brand guidelines for use of the MTN Brand:</p>
                    <ul>
                        <li className="p-pera">When used the logo sits in the bottom right hand corner of the messaging, against a white yellow background</li>
                        <li className="p-pera">The distance between the logo and the border to the right and border to the bottom is always equal and equivalent size to the blue bulb that forms the MTN logo</li>
                        <li className="p-pera">The size of the logo will occupy the rectangle space of the ad where it features, sclaed to feature prominently relative to all the other content in the ad</li>
                        <li className="p-pera">The MTN yellow pantone is:</li>
                        <ul>
                            <li lassName="p-pera">Pantone 123 C</li>
                            <li lassName="p-pera">CMYK - C:0 M:20 Y:100 K:0</li>
                            <li lassName="p-pera">RGB - R:255 G:203 B:5</li>
                            <li lassName="p-pera">HEX - #fe7900, #012f66</li>
                        </ul>
                    </ul>
                    <p className="p-pera">Reference to or usage of the MTN MoMo logo in other instances other than at the payment stage in the customer journey, will be restricted a statement of endorsement i.e. Supported by MTN MoMo. The use of the MTN MoMo in these instances is prohibited.</p>
                </div>
            </div>
        </div>
    )
}

