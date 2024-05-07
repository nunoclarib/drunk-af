import * as React from "react";
import styled from "styled-components";
import './App.css'

function App() {
  return (
    <Div className="App">
      <Img
        loading="lazy"
        srcSet="..."
      />
      <Div2>John Doe</Div2>
      <Div3>0.2 g</Div3>
      <Div4>
        <Img2
          loading="lazy"
          srcSet="..."
        />
      </Div4>
      <Div5>
      <Img3
        loading="lazy"
        srcSet="..."
      />
      </Div5>
    </Div>
  );
}

const Div = styled.div`
  background-color: #181818;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

const Img = styled.img`
  aspect-ratio: 1.72;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: start;
`;

const Div2 = styled.div`
  color: #fff;
  margin-top: 40px;
  font: 200 30px/53% Inter, sans-serif;
`;

const Div3 = styled.div`
  justify-content: center;
  border-radius: 8px;
  border-color: rgba(224, 224, 224, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  margin: auto;
  width: 257px;
  height: 70px;
  max-width: 100%;
  color: #000;
  padding: 6px 8px;
  font: 600 60px/27% Inter, sans-serif;
  align-content: center;
`;

const Div4 = styled.div`
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.71);
  display: flex;
  margin-top: 107px;
  width: 257px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding: 26px 60px;
`;
const Div5 = styled.div`
  border-radius: 30px;
  background-color: #D60000;
  opacity: 60%;
  display: flex;
  margin-top: 107px;
  heigh: 10px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding: 26px 60px;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 88px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 78px;
  align-self: end;
  margin-top: 105px;
`;

export default App;


