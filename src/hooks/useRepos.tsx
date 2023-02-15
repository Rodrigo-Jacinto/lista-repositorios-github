import { createContext, useContext, useState, ReactNode } from "react";
import { getRepos } from "../Services";

interface Repos {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

interface ReposData {
  reposList: Repos[];
  searchRepos: (repoName: string) => Promise<void>;
}

const ReposListCompany = createContext<ReposData>({} as ReposData);

interface ReposListCompanyProviderProps {
  children: ReactNode;
}

export function ReposListCompanyProvider({
  children,
}: ReposListCompanyProviderProps) {
  const [listRepos, setListRepos] = useState<Repos[]>([]);

  async function searchRepos(repoName: string) {
    await getRepos(repoName).then((response) => setListRepos(response.data));
  }

  return (
    <ReposListCompany.Provider value={{ reposList: listRepos, searchRepos }}>
      {children}
    </ReposListCompany.Provider>
  );
}

export function useRepos() {
  return useContext(ReposListCompany);
}
