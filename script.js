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
  
  const teamContainer = document.getElementById("team-container");
  
  teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const img = document.createElement("img");
    img.src = member.foto;
    img.alt = "Foto di " + member.nome;
  
    const name = document.createElement("h3");
    name.textContent = member.nome;
  
    const role = document.createElement("p");
    role.textContent = member.ruolo;
  
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);
  
    teamContainer.appendChild(card);
  });
  