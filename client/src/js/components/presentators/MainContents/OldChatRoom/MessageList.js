/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../../constants/Color';

export default ({ messages }) => (
  <Container>
    {messages.map((msg, i) => (
      <List key={i}>
        {msg.user && <Name>{msg.user}: </Name>}
        <Text>{msg.text}</Text>
      </List>
    ))}
  </Container>
);

const Container = styled.ul`
  flex: 1;
  padding: 10px 20px;
  box-sizing: border-box;
  overflow: scroll;
`;
const List = styled.li`
  padding-bottom: 10px;
`;
const Name = styled.span`
  color: ${Color.darkblue};
`;
const Text = styled.span`
  color: ${Color.gray30};
  font-size: 0.9em;
`;