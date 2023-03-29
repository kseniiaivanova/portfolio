import axios from "axios";

import type { IRepo } from "../models/IRepo";

export async function getRepos(): Promise<IRepo[]> {
  const response = await axios.get(
    "https://api.github.com/users/kseniiaivanova/repos"
  );
  console.log(response.data);
  return response.data as IRepo[];
}
