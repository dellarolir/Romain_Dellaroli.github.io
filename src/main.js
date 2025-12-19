import './style.css';

// Content Data
const content = {
  home: `
    <section class="presentation">
      <h2>À propos de moi</h2>
      <p>Je m’appelle Romain Dellaroli et je suis en deuxième année de BUT Informatique en parcours RACDV.</p>
      <p>Après avoir obtenu le BAC en 2023 avec la mention «Bien», je me suis inscrit en cycle préparatoire intégré en école d’ingénieur en Biotechnologies à l’ESTBB à Lyon. Durant cette année, j’ai appris un grand nombre de notions en Biologie, en Chimie, en Mathématiques, en Physique et un peu en informatique où l’on apprenait le langage Python.</p>
      <p>Les premiers mois se passaient bien, mais un jour, je me suis rendu compte que la Biologie n’était pas pour moi. Au même moment, les cours d’informatique m’ont fait prendre conscience de mon agilité à résoudre des problèmes complexes et de ma rapidité à assimiler les nouvelles notions. A ce moment là c’était une révélation pour moi, je devais me réorienter dans le domaine de l’informatique.</p>
      <p>Cependant, ma passion pour l’informatique a réellement débuté lorsque j’étais en troisième. Durant cette année scolaire, un ami à moi m’avait initié à l’univers du Hardware. Grâce à ce qu’il m’a appris et à l’aide de mes connaissances acquises, j’ai construit mon propre ordinateur et aidé des amis à construire le leur. Aujourd’hui je suis régulièrement les actualités et je m’intéresse aux innovations qui sont apportées dans ce domaine.</p>
      <p>Aujourd’hui, si j’ai intégré le BUT Informatique, c’est avant tout pour la réalisation d’applications, qui est un domaine qui me passionne depuis peu. Je souhaiterais vraiment approfondir mes compétences dans ce domaine.</p>
      <p>Une fois le diplôme du BUT obtenu après mes 3 ans d’études, je compte intégrer une école d’ingénieur en informatique, possiblement spécialisée dans le génie logiciel, afin de devenir Software Engineer.</p>
      
      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn" onclick="window.router.navigate('project1')">Voir mes projets START</button>
      </div>
    </section>
  `,
  project1: {
    title: "Projet 1: Code Game Jam 2025",
    description: `
      <p>En Février 2025, j’ai pu participer à la Code Game Jam 2025 en intégrant une équipe de 4 personnes (moi compris). Il s’agit d’un évènement durant lequel nous devions programmer un jeu vidéo en 30 heures. Nous avions pour contrainte de respecter le thème annoncé qui était « Mélodie à l’infini ».</p>
      <p>Nous avions décidé de partir sur LibGDX comme moteur graphique. LibGDX est un Framework de Java pour le développement de jeux. Notre jeu consistait à explorer l’espace à bord d’un vaisseau spatial, à la recherche d’étoiles qui émettent une mélodie, tout en évitant des étoiles parasites.</p>
      <p>Je me suis occupé de la conception du cockpit du vaisseau. J’ai par ailleurs programmé le système de génération des étoiles ainsi que la gestion des collisions afin de ne pas pouvoir passer à travers les étoiles.</p>
      <p>Cet évènement m’a permis d’améliorer mes compétences en travail en équipe. En effet, nous nous sommes tout de suite répartis des rôles, tout en nous entraidant mutuellement. Nous avons donc instinctivement adopté une attitude de travail en équipe et nous nous en sommes donc bien sortis.</p>
      <p>J’y ai également appris de nouvelles notions en programmation orientée objet, notamment l’héritage. Enfin, j’ai pu expérimenter pour la première fois la programmation sur un Framework de java, et, plus globalement, la programmation sur un moteur graphique.</p>
      <p>A la suite de cet évènement, j'ai continué à développer de nouvelles fonctionnalités. J'ai notamment programmé un GPS basé sur la prédiction de la meilleure direction à prendre pour atteindre une étoile. De plus, j'ai programmé les étoiles "parasytes" qui ont une force attraction de plus en plus importante à mesure que l'on s'approche d'elles. Enfin, j'ai amélioré mon système de génération d'étoiles afin de rajouter aléatoirement des étoiles servant de décoration. Ces étoiles se chargent et se déchargent constamment lorsque le vaisseau se déplace.</p>
      <p>Cette initiative démontre mon engouement pour la programmation de nouvelles fonctionnalités, ainsi que mon désir de m'améliorer constamment.</p> 
    `,
    images: [
      { src: 'CodeGameJam1.png', description: "Image de mon groupe prise durant la Code Game Jam 2025." },
      { src: 'CodeGameJam2.gif', description: "Vidéo du GamePlay de notre jeu, comprenant les fonctionnalités rajoutées après l'évènement." },
      { src: 'CodeGameJam3.png', description: "Diagramme de classe de notre jeu." }
    ],
    prev: null,
    next: 'project2'
  },
  project2: {
    title: "Projet 2: Jeu Pokémon TCG",
    description: `
      <p>Entre Mars 2025 et Juin 2025, j’ai pu réaliser en binôme un jeu vidéo “Pokémon Trading Card Game”. Ce projet s’est effectué en deux parties.</p>
      <p>Dans la première partie, nous étions amenés à programmer la partie fonctionnelle de l’application. Nous avions pour contrainte de développer en java, ainsi que de ne pas modifier le squelette de code de base. Je me suis occupé de la programmation du fonctionnement d’un grand nombre de cartes, de l’implémentation de la gestion des talents, de la gestion de l’organisation d’un tour dans le jeu, ainsi que la création d’un certain nombre de méthodes en tout genre.</p>
      <p>Cette partie m’a permis d’expérimenter le développement d’une application complexe dont le fonctionnement est basé sur l’héritage et le polymorphisme. Grâce à cela, j’ai pu appliquer les connaissances que j’avais obtenues durant mes cours de développement orienté objet ainsi qu’améliorer mon raisonnement adapté à ce type de programmation.</p>
      <p>Par la suite, dans la deuxième partie, nous devions programmer l’interface graphique du jeu. Nous avions pour contrainte de programmer en JavaFX et FXML, de ne pas modifier le squelette de base du code et enfin de ne pas toucher à la partie fonctionnelle.</p>
      <p>Je me suis occupé du fonctionnement global de l’application, de l’agencement visuel global, ainsi que de la création de quelques animations. En effet, j’ai créé un système qui permet de mettre en avant la carte survolée par le curseur, ainsi qu’un autre système qui permet de mettre en avant l’énergie survolée par le joueur.</p>
      <p>Cette partie m’a permis d’améliorer mes connaissances en JavaFX, notamment sur les bindings et les listeners, ainsi qu’en FXML, notamment sur l’agencement visuel ainsi que sur la modularité des éléments.</p>
      <p>Ce projet, dans sa globalité m’a permis de mieux prendre en main l’outil GIT, avec notamment la gestion des branches.</p>
      <p>A la fin de ce projet, j’ai acquis énormément d’expérience en développement orienté objet ainsi qu’en développement d’interface Homme Machine.</p>
    `,
    images: [
      { src: 'Pokemon1.gif', description: "Vidéo montrant l'interface de notre jeu Pokémon TCG. On peut y voir les différentes interactions qu'on peut effectuer." },
      { src: 'Pokemon2.png', description: "Diagramme de classe de notre jeu Pokémon TCG." }
    ],
    prev: 'project1',
    next: 'project3'
  },
  project3: {
    title: "Projet 3: Site de Démocratie Participative",
    description: `
      <p>Depuis Septembre 2025 et jusqu’en Décembre 2025, j'ai été amené à travailler en équipe sur un projet académique de création d’un site web de démocratie participative en réponse au besoin d’un client.</p>
      <p>Ce projet m’a permis de visualiser toutes les étapes d’un projet de réalisation d’une application, qui sont la planification, l’analyse, la conception, le développement, les différents tests et enfin la livraison. Nous avions pour contrainte d’appliquer le principe des méthodes agiles. Pour cela, nous planifions des sprints de trois semaines avec à chaque fois un nouveau Scrum Master. A chaque fin de sprint nous montrions le résultat au client et nous planifions le prochain sprint.</p>
      <p>Pour ce qui est du développement du site, nous devons appliquer l’architecture MVC ainsi que programmer en PHP.</p>
      <p>Durant ce projet, j’ai pu participer à la planification des différents sprints ainsi qu’au développement du site. J’ai notamment réalisé le système de vote australien sur tous les aspects comme la mise en place d’une table voteAustralien dans la base de données, la création des différentes vues en html / css, ainsi que l’implémentation des algorithmes dont celui pour déterminer le classement des propositions selon les votes des utilisateurs.</p>
      <p>J’ai également contribué à la stylisation d’autres vues, ainsi qu’à la gestion de l’architecture du code afin de réduire les duplications de code et les dépendances. Enfin, j’ai pu embrasser le rôle de Scrum Master durant le sprint 3. Ce rôle m’a permis d’organiser régulièrement des réunions avec mon équipe, afin d’éliminer les obstacles et d’améliorer la cohésion d’équipe afin d’augmenter la productivité.</p>
      <p>Ce projet m’a permis d’améliorer mes compétences en gestion de projet et en travail d’équipe grâce aux méthodes agiles.</p>
      <p>L’application des concepts de développement web appris en cours dans un projet concret m’a permis de mieux les assimiler et donc de mieux les maîtriser. A la fin de ce projet, j’ai senti que j’avais réellement progressé.</p>
    `,
    images: [
      { src: 'DemocratieParticipative2.png', description: "Page montrant le classement des propositions, déduit grâce à un algorithme qui a analysé les votes australiens de tous les utilisateurs ayant voté." },
      { src: 'DemocratieParticipative3.png', description: "Page montrant un récapitulatif du vote australien effectué par l’utilisateur." },
      { src: 'democratieParticipative1.gif', description: "Vidéo montrant toutes les actions que l'on peut effectuer sur le formulaire de vote australien." }
    ],
    prev: 'project2',
    next: 'project4'
  },
  project4: {
    title: "Projet 4: Nuit de l’Info 2025",
    description: `
      <p>En Décembre 2025, j’ai pu participer à la Nuit de l’Info 2025 en intégrant une équipe de 5 personnes (moi compris). Il s’agit d’un évènement national durant lequel nous devions programmer toute une nuit un site web. Nous avions pour contrainte de remplir 5 défis au choix.</p>
      <p>Le défi sur lequel je me suis penché était celui de mettre en place une machine de Rube Goldberg dans le site. Il s’agit d’un système qui met beaucoup trop d'étapes pour arriver à une conclusion qui est pourtant simple. Pour cela, j’ai pu pour la première fois expérimenter la programmation en JavaScript et TypeScript afin de créer une série d’étapes avant d’accéder à une page.</p>
      <p>Je me suis également occupé, en m’aidant de l’IA, du design de certains assets, ainsi qu’en partie de la direction artistique globale du site.</p>
      <p>Cet évènement m’a permis d’apprendre de manière ludique le fonctionnement du JavaScript, ainsi que de m’améliorer dans la création de prompts afin d’obtenir une direction artistique cohérente dans les images générées.</p>
    `,
    images: [
      { src: 'NuitDeLInfo1.jpg', description: "Image de mon groupe prise durant la Nuit de l'Info 2025." },
      { src: 'NuitDeLInfo2.gif', description: "Vidéo montrant l'ensemble des étapes à franchir avant d'accéder à une page." }
    ],
    prev: 'project3',
    next: null
  }
};

// Router Logic
let currentProjectImages = [];

const render = (viewName) => {
  const main = document.getElementById('project-container');
  // 'home' is no longer a router state, we default to project1 or handle viewName
  if (content[viewName] && typeof content[viewName] === 'object') {
    const p = content[viewName];
    // Merge images - now they are objects, no need to merge extraImages differently except for structure
    // Note: I already merged the extra image into the main array in the previous content update for project 3!
    // But if I didn't, logic would be: [...p.images]
    const allImages = p.images;
    currentProjectImages = allImages; // Store objects

    // Generate Gallery HTML - Pass Index now
    // map uses img.src now
    const galleryHtml = allImages.map((imgObj, index) =>
      `<img src="/assets/${imgObj.src}" class="gallery-img" alt="${p.title}" onclick="window.openModal(${index})">`
    ).join('');

    main.innerHTML = `
      <section class="project-card">
        <h2>${p.title}</h2>
        <div class="project-content">
          ${p.description}
        </div>
        
        <h3>Galerie</h3>
        <div class="gallery">
          ${galleryHtml}
        </div>

        <div class="nav-buttons" style="margin-top: 2rem; display: flex; justify-content: space-between;">
          ${p.prev ? `<button class="btn nav-btn prev-btn" onclick="window.router.navigate('${p.prev}', event)">← Projet Précédent</button>` : `<button class="btn" disabled style="opacity:0.5; cursor: default;">Premier Projet</button>`}
          ${p.next ? `<button class="btn nav-btn next-btn" onclick="window.router.navigate('${p.next}', event)">Projet Suivant →</button>` : `<button class="btn" disabled style="opacity:0.5; cursor: default;">Fin des projets</button>`}
        </div>
      </section>
    `;
  } else {
    // Handle Home or other non-project views
    // No fixed controls to hide for home view anymore
  }

  // Clean up fixed controls if they existed (optional, but good for cleanup)
  document.body.classList.remove('has-controls');
};

window.router = {
  navigate: (viewName, event) => {
    let clickedButtonIndex = -1;
    let initialRect = null;

    // Temporarily disable smooth scroll for instant positioning
    document.documentElement.style.scrollBehavior = 'auto';

    if (event && event.target) {
      const btn = event.target.closest('button');
      if (btn) {
        initialRect = btn.getBoundingClientRect();
        // Find index of this button in the current set of nav buttons
        const currentButtons = document.querySelectorAll('.nav-buttons button');
        clickedButtonIndex = Array.from(currentButtons).indexOf(btn);
      }
    }

    // Render new content
    render(viewName);

    // Scroll Audit
    if (clickedButtonIndex !== -1 && initialRect) {
      // Find the equivalent button in the new DOM by index
      const buttons = document.querySelectorAll('.nav-buttons button');
      const targetBtn = buttons[clickedButtonIndex];

      if (targetBtn) {
        const newRect = targetBtn.getBoundingClientRect();
        const delta = newRect.top - initialRect.top;
        window.scrollBy(0, delta);
      }
    }

    // Re-enable smooth scroll after a short delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
  }
};

// Modal Logic
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementsByClassName('close-modal')[0];
const prevBtn = document.getElementById('modal-prev');
const nextBtn = document.getElementById('modal-next');
const closeFullscreenBtn = document.getElementsByClassName('close-fullscreen')[0];


let currentImageIndex = 0;
let currentZoom = 1;
// Pan state
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
let hasMoved = false;

const updateTransform = () => {
  modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
};

const updateModalState = () => {
  // Update Image
  modalImg.src = `/assets/${currentProjectImages[currentImageIndex]}`;
  const currentImgObj = currentProjectImages[currentImageIndex];
  modalImg.src = `/assets/${currentImgObj.src}`;

  // Update Description
  const descContainer = document.querySelector('.image-description');

  if (descContainer) {
    descContainer.innerHTML = `<h3>Description</h3><p>${currentImgObj.description}</p>`;
  }

  // Handle arrows visibility
  if (currentImageIndex === 0) {
    prevBtn.style.visibility = 'hidden';
  } else {
    prevBtn.style.visibility = 'visible';
  }

  if (currentImageIndex === currentProjectImages.length - 1) {
    nextBtn.style.visibility = 'hidden';
  } else {
    nextBtn.style.visibility = 'visible';
  }

  resetZoom();
};

window.openModal = (index) => {
  currentImageIndex = parseInt(index);
  modal.style.display = 'flex';
  updateModalState();
}

const closeModal = () => {
  modal.style.display = 'none';
  exitFullscreen(); // Ensure we reset if closing completely
}

const enterFullscreen = () => {
  modal.classList.add('fullscreen');
  // Reset Zoom/Pan for clean start in fullscreen
  currentZoom = 1;
  translateX = 0;
  translateY = 0;
  updateTransform();
}

const exitFullscreen = () => {
  modal.classList.remove('fullscreen');
  currentZoom = 1;
  translateX = 0;
  translateY = 0;
  updateTransform();
  modalImg.style.cursor = 'grab';
}

closeFullscreenBtn.onclick = (e) => {
  e.stopPropagation();
  exitFullscreen();
}

closeBtn.onclick = closeModal;


// Close on background click logic
let mouseDownOnBackground = false;

modal.onmousedown = function (e) {
  if (e.target === modal) {
    mouseDownOnBackground = true;
  } else {
    mouseDownOnBackground = false;
  }
}

modal.onclick = function (e) {
  if (mouseDownOnBackground && e.target === modal) {
    closeModal();
  }
  // Reset
  mouseDownOnBackground = false;
}

// Navigation Events
prevBtn.onclick = (e) => {
  e.stopPropagation();
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateModalState();
  }
}

nextBtn.onclick = (e) => {
  e.stopPropagation();
  if (currentImageIndex < currentProjectImages.length - 1) {
    currentImageIndex++;
    updateModalState();
  }
}

// Zoom Logic (Wheel)
modalImg.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY * -0.01;
  // Calculate new zoom
  const newZoom = Math.min(Math.max(1, currentZoom + delta), 8); // Min 1x, Max 8x

  if (newZoom === 1) {
    translateX = 0;
    translateY = 0;
  }

  currentZoom = newZoom;
  updateTransform();

  // Update cursor
  if (currentZoom > 1) {
    modalImg.style.cursor = 'grab';
  } else {
    modalImg.style.cursor = 'zoom-in'; // Optional polish
  }
});

// Mobile Menu Logic
const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.getElementById('nav-links');

if (burgerBtn && navLinks) {
  burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Drag Logic
modalImg.onmousedown = (e) => {
  if (currentZoom > 1) {
    isDragging = true;
    hasMoved = false;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    modalImg.style.cursor = 'grabbing';
    e.preventDefault(); // Prevent default drag behavior
  }
};


window.addEventListener('mousemove', (e) => {
  if (isDragging) {
    e.preventDefault();
    let x = e.clientX - startX;
    let y = e.clientY - startY;

    // Check if we actually moved significantly to consider it a drag (vs a click)
    if (Math.abs(x - translateX) > 2 || Math.abs(y - translateY) > 2) {
      hasMoved = true;
    }

    // Boundary Constraints
    const container = modalImg.parentElement;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // We use offsetWidth/Height for the base dimensions of the image
    const scaledWidth = modalImg.offsetWidth * currentZoom;
    const scaledHeight = modalImg.offsetHeight * currentZoom;

    // Calculate max translation allowed
    const maxX = Math.max(0, (scaledWidth - containerWidth) / 2);
    const maxY = Math.max(0, (scaledHeight - containerHeight) / 2);

    // Clamp values
    x = Math.min(Math.max(x, -maxX), maxX);
    y = Math.min(Math.max(y, -maxY), maxY);

    translateX = x;
    translateY = y;
    updateTransform();
  }
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    modalImg.style.cursor = 'grab';
  }
});

// Zoom Logic (Click to Toggle)
// Zoom/Fullscreen Logic (Click)
modalImg.onclick = (e) => {
  e.stopPropagation();
  // If we were dragging, do not action
  if (hasMoved) {
    hasMoved = false;
    return;
  }

  // If already fullscreen, maybe just zoom? Or do nothing (user can use wheel)
  // User request: "click ... to have it fullscreen".
  // If we are NOT fullscreen, go fullscreen.
  if (!modal.classList.contains('fullscreen')) {
    enterFullscreen();
  } else {
    // If already fullscreen, keeping click-to-zoom behavior is nice interaction
    if (currentZoom === 1) {
      currentZoom = 2;
      modalImg.style.cursor = 'grab';
    } else {
      currentZoom = 1;
      translateX = 0;
      translateY = 0;
      modalImg.style.cursor = 'zoom-in';
    }
    updateTransform();
  }
}

// Initial render: Default to Project 1 as the first project visible below the bio
// Initial render: Default to Project 1 as the first project visible below the bio
render('project1');

// Smart Navbar Logic
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
  let isTicking = false;
  let isHidden = false;
  let isHovering = false;

  // Track when cursor is on navbar
  navbar.addEventListener('mouseenter', () => {
    isHovering = true;
  });

  navbar.addEventListener('mouseleave', () => {
    isHovering = false;
  });

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDiff = scrollTop - lastScrollTop;

        // Ignore small movements
        if (Math.abs(scrollDiff) >= 5) {
          // Scroll down - hide navbar (only if not hovering)
          if (scrollDiff > 0 && scrollTop > 50 && !isHidden && !isHovering) {
            isHidden = true;
            setTimeout(() => {
              if (!isHovering) { // Double-check before hiding
                navbar.classList.remove('navbar-show');
                navbar.classList.add('navbar-hide');
              } else {
                isHidden = false; // Cancel hide if now hovering
              }
            }, 300);
            if (navLinks && navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
            }
          }
          // Scroll up - show navbar
          else if (scrollDiff < -10 && isHidden) {
            navbar.classList.remove('navbar-hide');
            navbar.classList.add('navbar-show');
            isHidden = false;
          }
          lastScrollTop = Math.max(0, scrollTop);
        }

        isTicking = false;
      });
      isTicking = true;
    }
  });
}
