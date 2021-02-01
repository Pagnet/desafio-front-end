import { Typography, Button } from "@useblu/ocean-components";

import pokeError from "../../assets/pokeerror.png";

import { Container, Img } from "./styled-components";

interface ErrorMessageProps {
  message: string;
  buttonText: string;
  buttonAction: () => void;
}

const ErrorMessage = ({
  message,
  buttonText,
  buttonAction,
}: ErrorMessageProps) => (
  <Container>
    <Typography variant="lead">{message}</Typography>
    <Img src={pokeError} alt="" width={150} />
    <Button onClick={buttonAction}>{buttonText}</Button>
  </Container>
);

export default ErrorMessage;
