import React from "react";
import Nav from "./Nav";
import Popup from "./Popup";
import Over21 from "./Popup/Over21";
import Row from "./Row";
import SwirlPane from "./SwirlPane";

function App() {
  const jar = "https://wendellen.github.io/chericheriINVERT/assets/jar1.jpg";
  const cheri =
    "https://wendellen.github.io/chericheriINVERT/assets/cheri_logo_hotpink_1.png";
  return (
    <div>
      <Nav />
      {/* <Row src={cheri} /> */}
      <Row src={jar} />
      <SwirlPane file="swirl1" />
      <div style={{ marginTop: -7 }}>
        <SwirlPane file="swirl2" />
      </div>
      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          mixBlendMode: "difference",
        }}
      ></div> */}
      {/* <Popup>
        <Over21 />
      </Popup> */}
    </div>
  );
}

export default App;
