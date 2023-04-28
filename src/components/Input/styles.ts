import styled, { css } from "styled-components/native";

type ViewInputProps = {
  height: number;
};

export const ViewInput = styled.View<ViewInputProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  height: ${({ height }) => height}px;
  padding: 20px;
`;

export const TextInputReport = styled.TextInput`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;
