import { useRepos } from "../../hooks/useRepos";
import { Container, Content } from "./styles";

export function Dasboard() {
  const { reposList } = useRepos();
 
  return (
    <Container>
      <Content>
        {reposList.map((reposItem) => (
          <div key={reposItem.id}>
            <h2>{reposItem.name}</h2>
            <p>{reposItem.description}</p>
            <a href={reposItem.html_url} target="_blank">
              Link da Repo
            </a>
          </div>
        ))}
      </Content>
    </Container>
  );
}
