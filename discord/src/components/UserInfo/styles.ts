import styled from "styled-components";

import { Mic, Headset, Settings } from 'styled-icons/material'

export const Container = styled.div`
grid-area: UI;

display: flex;
align-items: center;
justify-content: space-between;

padding: 10px;
background-color: var(--quaternary);
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

`;

export const Profile = styled.div`
display: flex;
align-items: center;

`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
display: flex;
flex-direction: column;
margin-left: 9px;

 > strong {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;

  color: var(--white);
 }

 > span { 
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 12px;
   color: var(--gray);
 }

`;

export const Icons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
> svg {
  margin-left: 6px;
  height: 20px;
  width: 21px;
  color: var(--gray);
  cursor: pointer;
}
`;

export const MicIcon = styled(Mic)`
`;

export const HeadphoneIcon = styled(Headset)`
`;

export const SettingsIcon = styled(Settings)`
`;
