import styled, { css } from "styled-components/native";

export const TouchableRadio = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CircleContent = styled.View`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const CircleFill = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 3px;
  width: 14px;
  height: 14px;
`;

export const TextRadio = styled.Text`
  margin-left: 10px;
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    color: ${COLORS.GRAY_500};
    font-size: ${FONT_SIZE.LG}px;
    font-family: ${FONT_FAMILY.SEMIBOLD};
  `}
`;
