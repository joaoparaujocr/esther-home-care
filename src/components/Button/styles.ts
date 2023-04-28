import styled, { css } from "styled-components/native";

export const ButtonCustom = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_600};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    font-size: ${FONT_SIZE.LG}px;
    color: ${COLORS.WHITE};
    font-family: ${FONT_FAMILY.REGULAR};
  `}
`;
