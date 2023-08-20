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

document.addEventListener("DOMContentLoaded", function() {
  // Menggunakan LocalStorage untuk menyimpan data
  let visitors = JSON.parse(localStorage.getItem("visitors")) || [];

  const visitorCount = document.getElementById("visitor-count");

  // Mendapatkan alamat IP pengunjung
  const getIPAddress = async () => {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  };

  // Menambahkan alamat IP baru ke dalam array visitors jika belum ada
  const addVisitor = async () => {
    const ipAddress = await getIPAddress();
    if (!visitors.includes(ipAddress)) {
      visitors.push(ipAddress);
      localStorage.setItem("visitors", JSON.stringify(visitors));
      updateVisitorCount();
    }
  };

  // Mengupdate tampilan jumlah pengunjung
  const updateVisitorCount = () => {
    visitorCount.textContent = `Total Pengunjung: ${visitors.length}`;
  };

  // Mengambil data pengunjung yang sudah ada pada saat halaman dimuat
  updateVisitorCount();

  // Menambahkan pengunjung baru saat halaman dikunjungi
  addVisitor();
});
                                 
