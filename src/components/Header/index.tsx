import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  modalOpen: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo Disney" />
        <button type="button" onClick={props.modalOpen}>Pesquisar Novo Repo</button>
      </Content>
    </Container>
  );
}
