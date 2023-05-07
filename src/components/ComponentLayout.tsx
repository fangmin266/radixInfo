import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  background-color: white;
  padding-bottom: 12px;
`;
interface ComponentLayoutProps {
  children: React.ReactNode;
}
const ComponentLayout = ({ children }: ComponentLayoutProps) => {
  return <StyledItem>{children}</StyledItem>;
};

export default ComponentLayout;
