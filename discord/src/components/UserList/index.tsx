import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>
      {isBot && <span>BOT</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Saulo Costa" />
      <UserRow nickname="Deivide Duarte" />


      <Role>Offline - 18</Role>
      <UserRow nickname="Juin" isBot />
      <UserRow nickname="Piquinês" />
    </Container>
  );
};

export default UserList;
