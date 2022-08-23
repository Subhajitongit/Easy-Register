import React from "react";
import QRCode from "qrcode";

const QrCode = ({ text }) => {
  const [src, setSrc] = React.useState("");

  React.useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setSrc(data);
    });
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          width: "250px",
        }}
        src={src}
        alt=""
      />
    </div>
  );
};

export default QrCode;
