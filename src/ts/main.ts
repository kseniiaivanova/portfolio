import { IRepo } from "./models/IRepo";

import { getRepos } from "./service/getRepos";

getRepos().then((repos) => {
  createHTML(repos);
});

//första loop
function createHTML(repos: IRepo[]) {
  let chosenRepos: IRepo[] = [];
  for (let i: number = 0; i < repos.length; i++) {
    if (
      repos[i].name == "ReadyDesign" ||
      repos[i].name == "To-do-list" ||
      repos[i].name == "HolidayTree" ||
      repos[i].name == "memory-game"
    ) {
      chosenRepos.push(repos[i]);
    }
  }

  for (let i: number = 0; i < chosenRepos.length; i++) {
    let listProj: HTMLUListElement = document.createElement("ul");
    listProj.className = "projects";
    let aside: HTMLDivElement = document.getElementById(
      "proj"
    ) as HTMLDivElement;
    aside.appendChild(listProj);

    let bullProj: HTMLLIElement = document.createElement("li");
    let projLink: HTMLAnchorElement = document.createElement("a");
    projLink.href = chosenRepos[i].html_url;
    projLink.target = "_blank";

    bullProj.innerHTML = chosenRepos[i].description + ": ";
    bullProj.className = "item__proj";
    projLink.innerHTML = chosenRepos[i].name + " ";
    projLink.className = "link__proj";

    listProj.appendChild(bullProj);
    bullProj.appendChild(projLink);
  }
}
