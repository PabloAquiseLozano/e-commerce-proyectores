import React from "react";
import styled from "styled-components";

export const WrapperContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <Container>{children}</Container>;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1370px;
  margin: auto;
  box-sizing: border-box;
`;
