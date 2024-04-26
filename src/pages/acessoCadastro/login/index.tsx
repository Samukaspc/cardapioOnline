import { Button, Image, Input } from "antd";
import { Container, ContainerBox } from "./styled";
import loginImage from '../../../image/login.png';

export default function Login() {
    return (
        <Container>
            <ContainerBox>
                <Image src={loginImage} alt="Logo" preview={false} />
            </ContainerBox>
            <ContainerBox>
            <h1>Usuário Login</h1>
            <Input placeholder="Usuário"/>
            <Input placeholder="Senha" />
            <Button type="primary">Login</Button>
            </ContainerBox>
        </Container>
    )
}