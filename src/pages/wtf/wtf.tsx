import { Button } from "react95";
import ErrorWindow from "../../components/error";
import styled from "styled-components";
import { useState } from "react";

/** 이걸 본 넌 너무 많은 것을 알아버렸어. */
export default function WtfPage() {
  const [clickCount, setClickCount] = useState(1);

  function handleClick() {
    if (clickCount === 8) {
      window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    } else {
      setClickCount(clickCount + 1);
    }
  }
  return (
    <Main>
      <ErrorWindow
        style={{
          transform: "scale(0.7)",
          margin: "-50px 0",
        }}
        title="WTF??"
        message="What the fuck is this?"
        buttons={[<Button onClick={handleClick}>What?</Button>]}
      />
      <ErrorWindow
        style={{
          transform: "scale(0.7)",
        }}
        title="혁신 휴게실"
        message="이건 또 뭐에요?"
        buttons={[
          <a href="/wtf/dphs">
            <Button>What?</Button>
          </a>,
        ]}
      />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("/wtf/errors.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
