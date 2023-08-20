document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuContent = document.querySelector(".menu-content");
  
  hamburgerMenu.addEventListener("click", function() {
    menuContent.classList.toggle("show-menu");
  });

  // dari forestAPI
  const url = "https://www.forestapi.my.id/api/github/user/lahadiyani/repos";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const repositoryList = document.querySelector(".repository-list");
      data.forEach(repo => {
        const repoItem = document.createElement("div");
        repoItem.classList.add("repo-item");
        repoItem.innerHTML = `
          <a href="${repo.url}" target="_blank">${repo.title}</a>
          <p>Description: ${repo.description}</p>
          <p>Language: ${repo.language}</p>
        `;
        repositoryList.appendChild(repoItem);
      });
    })
    .catch(error => console.log(error));
});
