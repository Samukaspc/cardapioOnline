import styled from "styled-components";
import hamburgariaImagem from '../../image/Hamburgueria.jpg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    width: 100%;
    `
export const ContainerBox = styled.div`
    display: flex;
    height: 50vh;
    flex-direction: column;
    `
export const Box = styled.div`
    display: flex;
    height: 50vh;
    color: white;
    text-shadow: 2px 2px 4px black;
    background-image: url(${hamburgariaImagem});
    flex-direction: column;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    button {
        background-color: green ;
        margin-bottom: 10px;
    }
    `
export const BoxImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: black;
    opacity: 0.9;
    .ant-image-img {
        border-radius: 50%;
        object-fit: contain;
        margin-bottom: 25px;
        margin-left: 5px;
    }
    `
export const ContainerCardapio = styled.div`
    width: 100%;
    justify-content: center;
    width: 100%;
    
`
export const ContainerCenter = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const BoxCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 1000px) {
        justify-content: center;
    }
`