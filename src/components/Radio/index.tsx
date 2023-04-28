import { CircleContent, CircleFill, TextRadio, TouchableRadio } from "./styles";

type RadioProps = {
  text: string;
  textSelected: string;
  setTextSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function Radio({
  text,
  textSelected,
  setTextSelected,
}: RadioProps) {
  return (
    <TouchableRadio onPress={() => setTextSelected(text)}>
      <CircleContent>{text === textSelected && <CircleFill />}</CircleContent>
      <TextRadio>{text}</TextRadio>
    </TouchableRadio>
  );
}
