function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Traitez les données comme vous le souhaitez
      console.log('Données récupérées du fichier JSON :', data);
      /// ON ECRIT LE CODE ICI ! 
      afficherNav();
      let nomNews = data.news.nomNews;
      let textAccroche = data.news.textAccroche;
      afficherHeader(nomNews, textAccroche); 

      let themes = data.news.themes;
      afficherThemes(themes);

      let articlePrincipal = data.news.articlePrincipal;
      afficherArticlePrincipal(articlePrincipal);

      let articles = data.news.articles;
      afficherArticles(articles);

      let auteurs = data.news.auteurs;
      afficherEquipe(auteurs);
     
      afficherFooter();

     
      /// FIN DU CODE
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();

function afficherHeader(nomNews, textAccroche) {
 let header = document.getElementById("header");

 let headerContenu = `
    <div class="container">
       <h1>${nomNews}</h1>
       <p>${textAccroche}</p>
    </div> `;  
 header.innerHTML = headerContenu;  
 

}

function afficherThemes(themes) {
  let themesSection = document.getElementById("themes");

  let themesContent = "<h2>Thèmes</h2>"; 
  themes.forEach(theme => {
     themesContent += `
        <div>
           <h3>${theme.nom}</h3>
           <p>${theme.description}</p>
        </div>
     `;
  });

  themesSection.innerHTML = themesContent;
}


function afficherArticlePrincipal(articleP) {
 let articlePrinci = document.getElementById("article-principal");

 let articleContent = `
     <div class="article-container">
        <img src="${articleP.image}" alt="${articleP.titre}" class="article-image">
        <div class="article-content">
           <h2>${articleP.titre}</h2>
           <p class="article-meta">${articleP.theme} - ${articleP.date}</p>
           <p>${articleP.description}</p>
           <button class="btn-lire">Lire l'article</button>
        </div>
     </div>
  `;

  articlePrinci.innerHTML = articleContent;
}

function afficherArticles(articles) {
  let articlesSection = document.getElementById("articles-liste");
  let listArticles; 

  articles.forEach(article => {
    listArticles += `
      <div class="article-item">
         <img src="${article.image}" alt="${article.titre}" class="article-image">
         <div class="article-content">
            <h3>${article.titre}</h3>
            <p class="article-meta">${article.theme} - ${article.date}</p>
            <p>${article.description}</p>
            <button class="btn-lire">Lire l'article</button>
         </div>
      </div>
    `;
  });

  articlesSection.innerHTML = listArticles;
}

function afficherNav() {
  let nav = document.getElementById("nav");

  let navHTML = `
<div class="nav-container">
         <div class="nav-left">
            <img src="logo.svg" alt="Logo" class="nav-logo">
            <span class="nav-title">nomJournal</span>
         </div>
         <ul class="nav-links">
            <li><a href="#themes">Thème 1</a></li>
            <li><a href="#themes">Thème 2</a></li>
            <li><a href="#themes">Thème 3</a></li>
            <li><a href="#themes">Thème 4</a></li>
         </ul>
         <div class="nav-right">
            <button class="btn-subscribe">S'abonner</button>
            <img src="image.png" alt="Profil" class="nav-profile">
         </div>
      </div>
  `;

  nav.innerHTML = navHTML;
}

function afficherEquipe(auteurs) {

  let equipeSection = document.getElementById("equipe");


  let equipeHTML = "<h2>Découvrez notre équipe</h2>";

  auteurs.forEach(auteur => {
     equipeHTML += `
        <div class="auteur-item">
           <img src="${auteur.photo}" alt="${auteur.prenom}" class="auteur-photo">
           <h3>${auteur.prenom}</h3>
           <p>${auteur.description}</p>
        </div>
     `;
  });

  equipeSection.innerHTML = equipeHTML;
}


function afficherFooter() {
  let footer = document.getElementById("footer");

  let footerHTML = `
     <div class="footer-container">
        <p>&copy; Muscle & Fitness 2024</p>
        <p>Votre source d'actualité et d'inspiration.</p>
     </div>
  `;
  footer.innerHTML = footerHTML;
}

