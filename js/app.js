const getLogin = document.querySelector("#get-login");
const login = document.querySelector(".login");

// BACKDROP
const backdrop = document.querySelector(".backdrop");

// PROJECT
const delProject = document.querySelectorAll(".delete_project");
const addProject = document.querySelector(".project-list-btn button");
// BASE
const menu_option = document.querySelectorAll("ul li a");

// BACKLOG
const usDelete = document.querySelectorAll(".us-delete");
const usAddSprint = document.querySelectorAll(".us-add-sprint");
const usModify = document.querySelectorAll(".us-modify");

// SPRINT
const sprintEnd = document.querySelectorAll(".sprint-end");
const sprintDelete = document.querySelectorAll(".sprint-delete");
const sprintAdd = document.querySelector(".sprint-add");

/****************************************************************/
/****************************************************************/

// appuyer Esc pour revenir aux interfaces quand la box est là
document.addEventListener("keydown", (key) => {
   if (key.key === "Escape") {
      backdrop.removeChild(backdrop.firstElementChild);
      backdrop.style.display = "none";
   }
});

// BACKDROP
if (backdrop)
   backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) {
         backdrop.removeChild(backdrop.firstElementChild);
         backdrop.style.display = "none";
      }
   });

// se connecter
if (getLogin) {
   getLogin.addEventListener("click", (e) => {
      const loginForm = `<div class="box login">
    <p>Connexion</p>
    <form action="project.html">
      <label for="login-email">E-mail</label>
      <input type="email" name="" id="login-email" />
      <label for="login-password">Mot de passe</label>
      <input type="password" name="" id="login-password" />
      <button type="submit">Se Connecter</button>
    </form>
    <p>Vous n'avez pas de compte ? <a href="#">s'inscrire</a></p>
  </div>`;
      backdrop.insertAdjacentHTML("afterbegin", loginForm);
      backdrop.style.display = "block";
   });
}

// supprimer un projet
if (delProject) {
   delProject.forEach((del) => {
      del.addEventListener("click", () => {
         const deleteBox = `
      <div class="box warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>Voulez vraiment supprimer ce projet ?</p>
        <button>Supprimer</button>
      </div>
    `;
         backdrop.insertAdjacentHTML("afterbegin", deleteBox);
         backdrop.style.display = "block";
      });
   });
}

// ajouter un projet
if (addProject) {
   addProject.addEventListener("click", () => {
      const addBox = `
    <div class="box add-project">
        <p>Ajouter un Nouveau Projet</p>
        <form action="#">
          <label for="project-name">Nom du projet</label>
          <input placeholder="Ex: site E-commerce" type="text" name="" maxlength="25" id="project-name" />
          <label for="project-description">Description</label>
          <input placeholder="Description courte du projet" type="text" name="" maxlength="50" id="project-description" />
          <label for="project-member">Membres du projet</label>
          <input placeholder='Ex: YK202204 / KM202208' type="text" name="" id="project-member" />
          <button type="submit">Creer le projet</button>
        </form>
      </div>
  `;
      backdrop.insertAdjacentHTML("afterbegin", addBox);
      backdrop.style.display = "block";
   });
}

// effet de selection sur les element du menu à gauche
if (menu_option)
   for (let i = 0; i < menu_option.length; i++) {
      menu_option[i].addEventListener("click", function () {
         let active = document.querySelector(".selected");
         active.classList.remove("selected");
         this.classList.add("selected");
      });
   }

// supprimer une user storie
if (usDelete) {
   usDelete.forEach((delBtn) => {
      delBtn.addEventListener("click", () => {
         const deleteBox = `
      <div class="box warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>Voulez vraiment supprimer cette user story ?</p>
        <button>Supprimer</button>
      </div>
    `;
         backdrop.insertAdjacentHTML("afterbegin", deleteBox);
         backdrop.style.display = "block";
      });
   });
}

// ajouter une user story à un sprint
if (usAddSprint) {
   usAddSprint.forEach((add) =>
      add.addEventListener("click", () => {
         const addBox = `
    <div class="box add-project">
        <p>Ajouter à un sprint</p>
        <form action="#">
          <label for="project-name">le Sprint</label>
          <select>
            <option value=""></option>
            <option value="">Sprint 1</option>
          </select>
          <button type="submit">Confirmer</button>
        </form>
      </div>
  `;
         backdrop.insertAdjacentHTML("afterbegin", addBox);
         backdrop.style.display = "block";
      })
   );
}

// modifier une user story
if (usModify) {
   usModify.forEach((modify) =>
      modify.addEventListener("click", () => {
         const addBox = `
    <div class="box add-project">
        <p>Modifier la user story</p>
        <form action="#">
          <label for="us-modify-actor">En tant que</label>
            <input type="text" id="us-modify-actor" />
            <label for="us-modify-want">je veux</label>
            <input type="text" id="us-modify-want" />
            <label for="us-modify-for">pour</label>
            <input type="text" id="us-modify-for" />
          <button type="submit">Modifier</button>
        </form>
      </div>
  `;
         backdrop.insertAdjacentHTML("afterbegin", addBox);
         backdrop.style.display = "block";
      })
   );
}

// ajouter un sprint

sprintAdd.addEventListener("click", () => {
   const addBox = `
    <div class="box add-project">
        <p>Demarer un Sprint</p>
        <form action="#">
          <label for="sprint-name">Nom du sprint</label>
            <input type="text" id="sprint-name" />
            <label for="sprint-start">Debut</label>
            <input type="date" id="sprint-start" />
            <label for="sprint-end">Fin</label>
            <input type="date" id="sprint-end" />
          <button type="submit">Demarer</button>
        </form>
      </div>
  `;
   backdrop.insertAdjacentHTML("afterbegin", addBox);
   backdrop.style.display = "block";
});

// Supprimer un sprint
if (sprintDelete) {
   sprintDelete.forEach((del) => {
      del.addEventListener("click", () => {
         const deleteBox = `
      <div class="box warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>Voulez vraiment supprimer ce Sprint ?</p>
        <button>Supprimer</button>
      </div>
    `;
         backdrop.insertAdjacentHTML("afterbegin", deleteBox);
         backdrop.style.display = "block";
      });
   });
}

// Terminer un sprint
if (sprintEnd) {
   sprintEnd.forEach((end) => {
      end.addEventListener("click", () => {
         const endBox = `
      <div class="box validation">
      <i class="fa-solid fa-circle-check"></i>
        <p>Valider pour terminer le sprint</p>
        <button>Valider</button>
      </div>
    `;
         backdrop.insertAdjacentHTML("afterbegin", endBox);
         backdrop.style.display = "block";
      });
   });
}

// Creer un sprint

/**************************************************************/
/**************************************************************/
