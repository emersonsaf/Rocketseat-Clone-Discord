import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChanelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>Chat-livre</Title>
      <Separator />
      <Description>Canal Aberto para conversas </Description>
    </Container>
  );
};

export default ChanelInfo;
