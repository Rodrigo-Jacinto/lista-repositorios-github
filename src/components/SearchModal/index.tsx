import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useRepos } from "../../hooks/useRepos";
import { Container } from "./styles";

interface TransactionModalProps {
  status: boolean;
  closeModal: () => void;
}

export function SearchModal(props: TransactionModalProps) {
  const [search, setSearch] = useState("");
  const [repoMessage, setRepoMessage] = useState(false);
  const { searchRepos } = useRepos();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await searchRepos(search);
      props.closeModal();
    } catch (erro) {
      setRepoMessage(true);
    }
  }

  function disabledMessage() {
    if (repoMessage) {
      setRepoMessage(false);
    } else {
      return;
    }
  }
  return (
    <Modal
      isOpen={props.status}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      onRequestClose={props.closeModal}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <Container>
        <h2>Pesquisar por Repositórios</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="pesquisar"
            placeholder="Digite a organização"
            onFocus={disabledMessage}
            onChange={(event) => setSearch(event.target.value)}
          />

          {repoMessage && (
            <p className="text-alert">Esse repositório não existe!!</p>
          )}
          <button type="submit">Pesquisar</button>
        </form>
      </Container>
    </Modal>
  );
}
