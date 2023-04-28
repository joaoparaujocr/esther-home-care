import styled from "styled-components/native";

export const ViewReport = styled.SafeAreaView`
  padding: 39px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG_MAIN};
  position: relative;
`;

export const ViewContent = styled.View`
  flex: 1;
  gap: 24px;
`;
