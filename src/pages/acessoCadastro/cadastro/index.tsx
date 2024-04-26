import { Button, Image, Input } from "antd";
import cadastroImagem from '../../../image/register.png';
import { Container, ContainerBox } from "./styled";

export default function Cadastro() {
    return (
        <Container>
            <ContainerBox>
                <Image src={cadastroImagem} alt="Logo" preview={false} />
            </ContainerBox>
            <ContainerBox>
            <h1>Cadastro de Usuário</h1>
            <Input placeholder="Usuário"/>
            <Input placeholder="Email"/>
            <Input placeholder="Senha" />
            <Input placeholder="Repita senha" />
            <Button type="primary">Registrar</Button>
            </ContainerBox>
        </Container>
    )
}