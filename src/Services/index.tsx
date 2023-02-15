import axios from "axios";

export function getRepos(company: string) {
  return axios.get(`https://api.github.com/orgs/${company}/repos`);
}
