import React from 'react'
import { QrReader } from 'react-qr-reader';

const Student = () => {

  const[state,setState] = React.useState("No Result");

  const radiusCheck = (centerPointLat, centerPointLng, targetPointLat, targetPointLng, distance) => {
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPointLat / 180.0) * ky;
    var dx = Math.abs(centerPointLng - targetPointLng) * kx;
    var dy = Math.abs(centerPointLat - targetPointLat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= distance;
  }

  return (
    <div>
      <QrReader
            delay={300}
            onResult={(result, error) => {
              if (!!result) {
                setState(result?.text);
              }
    
              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "100%" }}
          />

<p>{state}</p>
    </div>
  )
}

export default Student