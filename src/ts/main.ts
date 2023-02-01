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
      repos[i].name == "To-do-list" ||
      repos[i].name == "HolidayTree" ||
      repos[i].name == "memory-game" ||
      repos[i].name == "Dice-Game"
    ) {
      chosenRepos.push(repos[i]);
    }
  }

  for (let i: number = 0; i < chosenRepos.length; i++) {
    let projCont: HTMLDivElement = document.getElementById(
      "projects"
    ) as HTMLDivElement;

    let project: HTMLDivElement = document.createElement("div");
    project.classList.add("project");

    let projectDesc: HTMLParagraphElement = document.createElement("p");

    let projectImage: HTMLImageElement = document.createElement("img");
    projectImage.classList.add("screenshot");
    projectImage.setAttribute(
      "src",
      "https://www.dropbox.com/s/5avrkgqypp05oqb/54455454.jpg?raw=1"
    );

    let projLink: HTMLAnchorElement = document.createElement("a");
    projLink.href = chosenRepos[i].html_url;
    projLink.target = "_blank";

    projectDesc.innerHTML = chosenRepos[i].description;
    //bullProj.className = "item__proj";
    //projLink.innerHTML = chosenRepos[i].name + " ";
    projLink.innerHTML = "GitHub";
    projLink.className = "link__proj";

    project.appendChild(projectImage);
    project.appendChild(projectDesc);
    project.appendChild(projLink);
    projCont.appendChild(project);
  }
}
