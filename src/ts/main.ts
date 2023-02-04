import { IRepo } from "./models/IRepo";

import { Image } from "./models/Image";
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

    let images: Image[] = [
      {
        src: "https://www.dropbox.com/s/n5tcli390gel661/dice.png?raw=1",
      },

      {
        src: "https://www.dropbox.com/s/kab9iaga7lff94v/webshop.png?raw=1",
      },

      {
        src: "https://www.dropbox.com/s/bjxml3bw12rx4jw/memory.png?raw=1",
      },

      {
        src: "https://www.dropbox.com/s/4tcsnz35e6s2jgx/todo.png?raw=1",
      },
    ];

    let project: HTMLDivElement = document.createElement("div");
    project.classList.add("project");

    let screenshot: HTMLImageElement = document.createElement("img");
    screenshot.setAttribute("src", images[i].src);
    screenshot.classList.add("screenshot");

    let projectDesc: HTMLParagraphElement = document.createElement("p");
    projectDesc.classList.add("desc");

    let projLink: HTMLAnchorElement = document.createElement("a");
    projLink.href = chosenRepos[i].html_url;
    projLink.target = "_blank";

    projectDesc.innerHTML = chosenRepos[i].description;

    projLink.innerHTML = "GitHub";
    projLink.className = "link__proj";
    project.appendChild(screenshot);

    project.appendChild(projectDesc);
    project.appendChild(projLink);
    projCont.appendChild(project);
  }
}
