import { TouchableOpacity } from "react-native";
import {
  IconBack,
  TextTitle,
  TouchableOpacityCustom,
  ViewHeader,
} from "./styles";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <ViewHeader>
      <TouchableOpacityCustom>
        <IconBack />
      </TouchableOpacityCustom>
      <TextTitle>{title}</TextTitle>
    </ViewHeader>
  );
}
