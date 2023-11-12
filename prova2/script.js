

const teamMembers = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
  }
];
  
let activeIndex = 0;
let intervalId;

const sidebar = document.querySelector(".sidebar");
const roleListContainer = document.querySelector(".role-list");
const selectedCardContainer = document.querySelector(".selected-card");

function createRoleItem(member, index) {
  const roleItem = document.createElement("div");
  roleItem.classList.add("role-item");
  roleItem.textContent = member.ruolo;
  roleItem.addEventListener("click", () => {
    clearInterval(intervalId);
    activeIndex = index;
    showSelectedCard(member);
    startCarousel();
  });
  return roleItem;
}

function showSelectedCard(member) {
  selectedCardContainer.innerHTML = "";

  const role = document.createElement("p");
  role.textContent = member.ruolo;

  const img = document.createElement("img");
  img.src = member.foto;
  img.alt = "Foto di " + member.nome;
  img.classList.add("resized-image");

  const name = document.createElement("h2");
  name.textContent = member.nome;


  selectedCardContainer.appendChild(role);
  selectedCardContainer.appendChild(img);
  selectedCardContainer.appendChild(name);
 
}

function startCarousel() {
  intervalId = setInterval(() => {
    const roleItems = document.querySelectorAll(".role-item");
    roleItems[activeIndex].classList.remove("active");

    activeIndex = (activeIndex + 1) % teamMembers.length;
    const member = teamMembers[activeIndex];

    showSelectedCard(member);
    roleItems[activeIndex].classList.add("active");
  }, 5000);
}

teamMembers.forEach((member, index) => {
  const roleItem = createRoleItem(member, index);
  roleListContainer.appendChild(roleItem);
});

startCarousel();
