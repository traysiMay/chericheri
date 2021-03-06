import React, { useEffect, useContext, useState, useRef } from "react";
import { PopupContext } from "./";
import { Button, ButtonContainer, Container, Wrapper } from "./styles";

export default function Over21() {
  const [affirmation, setAffirmation] = useState(undefined);
  const popContext = useContext(PopupContext);

  const welcomeRef = useRef();

  const yes = () => setAffirmation(true);
  const no = () => setAffirmation(false);

  useEffect(() => {
    if (affirmation) {
      welcomeRef.current.style.opacity = 0;
      document.querySelector("video").play();
      setTimeout(() => popContext.close(), 1000);
    } else if (affirmation === false) {
      setTimeout(() => (window.location.href = "https://disney.com"), 1000);
    }
  }, [affirmation, popContext]);

  return (
    <Container>
      {affirmation === undefined && (
        <>
          <Wrapper>Are you over 21?</Wrapper>
          <ButtonContainer>
            <Button onClick={yes}>Yes</Button>
            <Button onClick={no}>No</Button>
          </ButtonContainer>
        </>
      )}
      {affirmation === true && (
        <>
          <Wrapper ref={welcomeRef}>Welcome!</Wrapper>
        </>
      )}
      {affirmation === false && (
        <>
          <Wrapper>Sorry, this site is too sexy for you</Wrapper>
        </>
      )}
    </Container>
  );
}
