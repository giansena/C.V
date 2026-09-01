// --- DICCIONARIO DE IDIOMAS ---
const translations = {
  es: {
    navProjects: "Proyectos",
    navAbout: "Sobre mí",
    navContact: "Contacto",
    menuBtn: "Menú",
    heroSubtitle: "Portfolio Personal",
    heroDesc: "Especialista en datos con enfoque en análisis, ingeniería y ciencia de datos. Transformo datos en conocimiento, desarrollando soluciones que permiten comprender, optimizar y anticipar fenómenos reales a partir de la información.",
    titleProjects: "Proyectos",
    
    // Proyecto Azure
    proj6Title: "Azure Data Factory - Azure Databricks",
    proj6Desc: "Arquitectura Data Lakehouse: Pipeline de Ingesta y Procesamiento de Datos de Retail con Azure y PySpark",

    // Nuevo Proyecto Local Merchants
    newProjTitle: "Local Merchants Data Pipeline",
    newProjDesc: "Pipeline de datos diseñado para la ingesta y análisis de información de comercios locales.",

    btnView: "Ver proyecto",
    btnVideo: "Ver video",
    btnRepo: "Repositorio",
    titleAbout: "Sobre mí",
    aboutText: "Soy un profesional en datos con formación orientada al desarrollo de soluciones basadas en información. Mi trabajo se centra en el procesamiento, estructuración y análisis de datos para descubrir patrones, explicar comportamientos y generar proyecciones confiables. Tengo experiencia construyendo pipelines, realizando análisis exploratorio y desarrollando modelos que convierten datos crudos en resultados claros y útiles. Me caracterizo por un enfoque riguroso, pensamiento crítico y una fuerte orientación a la resolución de problemas mediante el uso inteligente de los datos.",
    titleContact: "Contacto",
    contactText: "¿Quieres contactarme? Escríbeme a",
    footerRights: "Gian Carlo Sena. Todos los derechos reservados."
  },
  en: {
    navProjects: "Projects",
    navAbout: "About me",
    navContact: "Contact",
    menuBtn: "Menu",
    heroSubtitle: "Personal Portfolio",
    heroDesc: "Data specialist focused on data analysis, engineering, and data science. I transform data into knowledge, developing solutions to understand, optimize, and anticipate real-world phenomena through information.",
    titleProjects: "Projects",

    // Proyecto Azure
    proj6Title: "Azure Data Factory - Azure Databricks",
    proj6Desc: "Data Lakehouse Architecture: Retail Data Ingestion and Processing Pipeline using Azure and PySpark",
    
    // Nuevo Proyecto Local Merchants
    newProjTitle: "Local Merchants Data Pipeline",
    newProjDesc: "Data pipeline designed for the ingestion and analysis of information from local merchants.",

    btnView: "View project",
    btnVideo: "Watch video",
    btnRepo: "Repository",
    titleAbout: "About me",
    aboutText: "I am a data professional with training geared towards developing information-based solutions. My work focuses on processing, structuring, and analyzing data to discover patterns, explain behaviors, and generate reliable projections. I have experience building pipelines, performing exploratory analysis, and developing models that turn raw data into clear and useful results. I am characterized by a rigorous approach, critical thinking, and a strong orientation to problem-solving through the intelligent use of data.",
    titleContact: "Contact",
    contactText: "Want to get in touch? Email me at",
    footerRights: "Gian Carlo Sena. All rights reserved."
  }
};

// --- LÓGICA DE CAMBIO DE IDIOMA ---
const langToggleBtn = document.getElementById('langToggle');
// Revisa si el usuario ya había elegido un idioma antes, si no, usa 'es'
let currentLang = localStorage.getItem('portfolioLang') || 'es';

function setLanguage(lang) {
  // Cambiar el texto de todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Cambiar el lang del HTML para SEO y accesibilidad
  document.documentElement.lang = lang;
  
  // Guardar preferencia
  localStorage.setItem('portfolioLang', lang);

  // Actualizar el texto del botón de idioma
  langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
}

// Inicializar el idioma al cargar la página
setLanguage(currentLang);

// Evento click para el botón
langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(currentLang);
});


// --- Menú móvil (toggle abrir/cerrar) ---
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
    // Mantiene el idioma actual al cerrar/abrir
    menuBtn.textContent = isOpen ? translations[currentLang].menuBtn : 'Cerrar/Close';
  });
}

// Cierra el menú al seleccionar un enlace (mejora UX en móvil)
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu && menuBtn) {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = translations[currentLang].menuBtn;
    }
  });
});

// --- Smooth scroll para los enlaces internos ---
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    const targetEl = targetId ? document.querySelector(targetId) : null;

    if (!targetEl) return;

    event.preventDefault();
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
