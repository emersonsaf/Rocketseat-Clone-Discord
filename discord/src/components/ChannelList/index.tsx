import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de text</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="Lolzinho" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="CSGO" />

    </Container> 
  );
};

export default ChannelList;
