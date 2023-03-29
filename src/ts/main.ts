import type { IRepo } from "./models/IRepo";
import type { Link } from "./models/Link";
import type { Image } from "./models/Image";
import { getRepos } from "./service/getRepos";

getRepos()
  .then((repos) => {
    createHTML(repos);
  })
  .catch((error) => {
    console.error(error);
  });

function createProjectDiv(): HTMLDivElement {
  const projectDiv: HTMLDivElement = document.createElement("div");
  projectDiv.classList.add("project");
  return projectDiv;
}

function createProjectDesc(): HTMLParagraphElement {
  const projectDesc: HTMLParagraphElement = document.createElement("p");
  projectDesc.classList.add("desc");
  return projectDesc;
}

function pickRepos(repos: IRepo[]): IRepo[] {
  const chosenRepos: IRepo[] = [];
  for (let i = 0; i < repos.length; i++) {
    if (
      repos[i].name === "To-do-list" ||
      repos[i].name === "HolidayTree" ||
      repos[i].name === "memory-old"
    ) {
      chosenRepos.push(repos[i]);
    }
  }

  return chosenRepos;
}

function createGithubLink(repo: IRepo): HTMLAnchorElement {
  const gitHUbLink: HTMLAnchorElement = document.createElement("a");
  gitHUbLink.target = "_blank";
  gitHUbLink.innerHTML = "GitHub";
  gitHUbLink.className = "link__proj";
  gitHUbLink.href = repo.html_url;

  return gitHUbLink;
}

function createScreenshot(image: Image): HTMLImageElement {
  const screenshot: HTMLImageElement = document.createElement("img");
  screenshot.setAttribute("src", image.src);
  screenshot.setAttribute("alt", "screenshot");
  screenshot.classList.add("screenshot");
  return screenshot;
}

function createProjectLink(imgLink: Link): HTMLAnchorElement {
  const projectLink: HTMLAnchorElement = document.createElement("a");
  projectLink.setAttribute("target", "_blank");
  projectLink.href = imgLink.href;
  return projectLink;
}

function createHTML(repos: IRepo[]): void {
  const chosenRepos = pickRepos(repos);

  const projects = [
    {
      repo: chosenRepos[0],
      image: {
        src: "https://www.dropbox.com/s/kab9iaga7lff94v/webshop.png?raw=1",
        alt: "webshop",
        href: "../pages/webshop/webshop.html",
      },
    },

    {
      repo: chosenRepos[1],
      image: {
        src: "https://www.dropbox.com/s/bjxml3bw12rx4jw/memory.png?raw=1",
        alt: "memory game",
        href: "https://memory-game-moz.netlify.app",
      },
    },

    {
      repo: chosenRepos[2],
      image: {
        src: "https://www.dropbox.com/s/4tcsnz35e6s2jgx/todo.png?raw=1",
        alt: "todo app",
        href: "../pages/todo/todo.html",
      },
    },
  ];

  const projCont: HTMLDivElement = document.getElementById(
    "projects"
  ) as HTMLDivElement;

  for (let i = 0; i < projects.length; i++) {
    const projectDiv = createProjectDiv();

    const screenshot = createScreenshot(projects[i].image);

    const projectLink = createProjectLink(projects[i].image);
    projectDiv.appendChild(projectLink);
    projectLink.appendChild(screenshot);

    const projectDesc = createProjectDesc();
    projectDesc.innerHTML = chosenRepos[i].description;
    projectDiv.appendChild(projectDesc);

    const gitHubLink = createGithubLink(chosenRepos[i]);
    projectDiv.appendChild(gitHubLink);
    projCont.appendChild(projectDiv);
  }
}
