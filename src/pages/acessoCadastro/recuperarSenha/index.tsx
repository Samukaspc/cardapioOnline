import { Button, Image, Input } from "antd";
import { Container, ContainerBox } from "./styled";
import recuperarSenhaImage from '../../../image/recuperarSenha.png';

export default function RecuperarSenha() {
    return (
        <Container>
        <ContainerBox>
            <Image src={recuperarSenhaImage} alt="Logo" preview={false} />
        </ContainerBox>
        <ContainerBox>
        <h1>Recuperar Senha</h1>
        <Input placeholder="Email"/>
        <Input placeholder="Senha antiga" />
        <Input placeholder="Senha nova" />
        <Button type="primary">Recuperar</Button>
        </ContainerBox>
    </Container>
    )
}