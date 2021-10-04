import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, Input, InputWrapper, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
    const div = messageRef.current;

    if(div !== null) {
      div.scrollTop = div.scrollHeight;
    }

  },[messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Piquinês"
          date="02/10/2021"
          content=" Bora pro churrasco! "
        />
        <ChannelMessage
          author="Deivide Duarte"
          date="02/10/2021"
          content="kkkk"
        />
        <ChannelMessage
          author="Saulo Costa"
          date="03/10/2021"
          content="Vou estudar.."
        />
        <ChannelMessage
          author="Juin"
          date="03/10/2021"
          content={
            <>
              <Mention>@Emerson</Mention>, Gogo!
            </>
          }
          hasMention
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="# Conversar em Chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
