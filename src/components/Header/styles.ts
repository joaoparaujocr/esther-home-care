import styled, { css } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const ViewHeader = styled.View`
  width: 100%;
  padding: 35px 30px 20px 30px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  flex-direction: row;
`;

export const TextTitle = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme: { FONT_SIZE, FONT_FAMILY, COLORS } }) => css`
    font-size: ${FONT_SIZE.LG}px;
    font-family: ${FONT_FAMILY.SEMIBOLD};
    color: ${COLORS.WHITE};
  `}
`;

export const TouchableOpacityCustom = styled.TouchableOpacity`
  position: absolute;
  bottom: 18px;
  left: 30px;
  width: 30px;
  height: 24px;
  z-index: 1;
`;

export const IconBack = styled(Ionicons).attrs(
  ({
    theme: {
      COLORS: { WHITE },
    },
  }) => ({
    size: 24,
    name: "arrow-back",
    color: WHITE,
  })
)``;
