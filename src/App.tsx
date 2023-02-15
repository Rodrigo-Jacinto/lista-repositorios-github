import { useState } from "react";
import { Dasboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionModal } from "./components/TransactionModal";
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
      <TransactionModal status={statusModal} closeModal={closeModal} />
    </ReposListCompanyProvider>
  );
}
