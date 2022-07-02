import React, { useState } from "react";
import QRCode from "qrcode.react";
import Footer from "./Footer";

import { useParams } from "react-router-dom";

function GenerateQR() {
  const [qrCodeText, setQRCodeText] = useState("");
  const mid = useParams().id;

  // generate QR code
  const generateQRCode = () => {
    let textdata = `http://localhost:3000/showmaterial/${mid}`;
    setQRCodeText(textdata);
  };

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  return (
    <div>
      <div>
        <h4>Generate and download the QR code: </h4>
        <div className="qr-input">
          <input type="button" value="Generate" onClick={generateQRCode} />
        </div>
        <p></p>
        <QRCode id="qrCodeEl" size={150} value={qrCodeText} />
        <br />
        <p>
          <p></p>
          <input
            type="button"
            className="download-btn"
            value="Download"
            onClick={downloadQRCode}
          />
        </p>

        <p></p>
        <p></p>
        <p></p>
      </div>
      <Footer />
    </div>
  );
}

export default GenerateQR;
