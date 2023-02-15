import { useState } from "react";
import { Dasboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { SearchModal } from "./components/SearchModal";
import { ReposListCompanyProvider } from "./hooks/useRepos";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [statusModal, setStatusModal] = useState(true);

  function openModal() {
    setStatusModal(true);
  }

  function closeModal() {
    setStatusModal(false);
  }

  return (
    <ReposListCompanyProvider>
      <GlobalStyle />
      <Header modalOpen={openModal} />
      <Dasboard />
      <SearchModal status={statusModal} closeModal={closeModal} />
    </ReposListCompanyProvider>
  );
}
