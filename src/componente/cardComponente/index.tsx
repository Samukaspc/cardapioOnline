import { Image } from "antd";
import hamburgariaImagem from "../../image/hamburger-tema.jpeg";
import { TbShoppingCartPlus } from "react-icons/tb";
import { BoxIcon, BoxInfomacao, ContainerCard } from "./styled";

export default function CardComponente({titulo,valor}: CardComponenteProps ) {
  return (
    <ContainerCard>
        <Image preview={false} width={250} src={hamburgariaImagem} alt="food" />
      <BoxInfomacao>
        <h2>{titulo}</h2>
        <span>
          Pão levinho de fermentação natural da trigo,burguer 160g,queijo prato
          e maione da casa.
        </span>
        <h3>{valor}</h3>
      </BoxInfomacao>
      <BoxIcon>
        <TbShoppingCartPlus size={35} color={"white"} />
      </BoxIcon>
    </ContainerCard>
  );
}

type CardComponenteProps = {
  titulo: string;
  descricao?: string;
  valor: string;
  imagem?: string;
};

//TODO: Titulo = nome produto
//TODO: Descrição = descrição do produto
//TODO: Preço = preço do produto
//TODO: Botão = adicionar ao carrinho
//TODO: Imagem = imagem do produto
