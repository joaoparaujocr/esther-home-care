import { ViewInput, TextInputReport } from "./styles";

type InputProps = {
  height: number;
  placeholder: string;
};

export default function Input({ height, placeholder }: InputProps) {
  return (
    <ViewInput height={height}>
      <TextInputReport placeholder={placeholder} multiline />
    </ViewInput>
  );
}
