import {
  BoxInfo,
  ButtonFinishOrde,
  ContainerPayment,
  TextButton,
  ValueTotal,
} from "./style";

interface Props {
  total: number;
  hourInit: any;
  validadeDataForSaveDB: any;
}

const Total = ({ total, hourInit, validadeDataForSaveDB }: Props) => {
  return (
    <ContainerPayment>
      <BoxInfo>
        <ValueTotal>R$ {total.toFixed(2)} </ValueTotal>

        <ValueTotal style={{ fontSize: 16, marginTop: 6 }}>
          Inicio: {hourInit}
        </ValueTotal>
      </BoxInfo>

      <ButtonFinishOrde>
        <TextButton onPress={() => validadeDataForSaveDB()}>Agendar</TextButton>
      </ButtonFinishOrde>
    </ContainerPayment>
  );
};

export default Total;
