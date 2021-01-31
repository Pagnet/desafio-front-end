import styled from "styled-components";
import { Link as LinkNavigation } from "react-router-dom";

import { colors } from "../../../constants";

export const Spacer = styled.div`
  min-width: 255px;
  height: 100vh;
`;

export const Nav = styled.nav`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  background-color: ${colors.colorInterfaceDarkDeep};
  width: 250px;
  height: 100vh;
  padding: 12px;
`;

export const ImageLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const LinkContainer = styled.div`
  padding: 16px;
`;

export const Link = styled(LinkNavigation)`
  text-decoration: none;
`;
