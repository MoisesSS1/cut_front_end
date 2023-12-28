import { useEffect } from "react";
import { Container, Title } from "./styled";

interface Props {
  type: string;
  message: string | boolean;
  setMessage: any;
}

const Message = ({ message, type, setMessage }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }, [message]);
  return (
    <Container>
      <Title> {message} </Title>
    </Container>
  );
};

export default Message;
