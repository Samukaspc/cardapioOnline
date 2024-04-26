import { Button, Image } from "antd";
import {
  Box,
  BoxCard,
  BoxImagem,
  Container,
  ContainerBox,
  ContainerCardapio,
  ContainerCenter,
} from "./styled";
import hamburgariaImagem from "../../image/hamburger-tema.jpeg";
import CardComponente from "../../componente/cardComponente";

export default function Cardapio() {
  return (
    <Container>
      <ContainerBox>
        <Box>
          <BoxImagem>
            <Image preview={false} src={hamburgariaImagem} alt="food" />
          </BoxImagem>
          <h1>Hamburgueria</h1>
          <h2>Rua dev sucesso, 12 , Mato Grosso, MT</h2>
          <Button type="primary">Seg á Dom - 18:0 22:00</Button>
        </Box>
      </ContainerBox>
      <ContainerBox>
        <ContainerCardapio>
          <ContainerCenter>
            <h1>Conheça nosso cardápio</h1>
          </ContainerCenter>
          <BoxCard>
            <CardComponente titulo="Hamburguer Smash" valor='18,68'/>
            <CardComponente titulo="Hamburguer Bacon"  valor='23,70' />
            <CardComponente titulo="Hamburguer Chiken"  valor='15,99' />
            <CardComponente titulo="Hamburguer Dogue"  valor='28,99' />
            <CardComponente titulo="Hamburguer Salada Mista" valor='35,00'/>
          </BoxCard>
        </ContainerCardapio>
      </ContainerBox>
    </Container>
  );
}
