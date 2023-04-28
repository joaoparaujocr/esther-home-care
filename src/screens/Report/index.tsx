import Radio from "@components/Radio";
import { ViewContent, ViewReport } from "./styles";
import Header from "@components/Header";
import { Fragment, useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";

const textsRadio = [
  "O profissional não compareceu.",
  "O profissional não prestou um bom serviço.",
  "Outro",
];

export default function Report() {
  const [textSelected, setTextSelected] = useState("");
  return (
    <Fragment>
      <Header title="Reportar" />
      <ViewReport>
        <ViewContent>
          {textsRadio.map((text) => (
            <Radio
              key={text}
              text={text}
              setTextSelected={setTextSelected}
              textSelected={textSelected}
            />
          ))}
          <Input placeholder="Titulo" height={65} />
          <Input placeholder="Especifique aqui o que houve" height={180} />
        </ViewContent>
        <Button text="Reportar" />
      </ViewReport>
    </Fragment>
  );
}
