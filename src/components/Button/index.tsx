import { ButtonCustom, TextButton } from "./styles";

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <ButtonCustom>
      <TextButton>{text}</TextButton>
    </ButtonCustom>
  );
}
