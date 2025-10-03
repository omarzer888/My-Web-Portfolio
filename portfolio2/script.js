
// Translations
const translations = {
    fr: {
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-skills': 'Compétences',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        'hero-title': 'Salut, je suis Omar Zargani. Développeur Web Full Stack',
        'hero-subtitle': 'Créateur d\'expériences numériques exceptionnelles',
        'hero-portfolio': 'Voir mon Portfolio',
        'hero-contact': 'Me contacter',
        'about-title': 'À propos de moi',
        'about-passion': 'Passionné de technologie',
        'about-desc1': 'Développeur web full-stack avec plus de 5 ans d\'expérience dans la création d\'applications web modernes et performantes. Je me spécialise dans les technologies Html, Css, JavaScript, React et les bases de données modernes.',
        'about-desc2': 'Mon approche combine créativité et expertise technique pour livrer des solutions qui dépassent les attentes. J\'aime relever des défis complexes et transformer des idées en réalité numérique.',
        'about-desc3': 'Toujours à l\'affût des dernières tendances technologiques, je m\'efforce de créer des expériences utilisateur exceptionnelles et des architectures backend robustes.',
        'service-frontend': 'Développement Frontend',
        'service-frontend-desc': 'Création d\'interfaces utilisateur modernes et responsives avec les dernières technologies.',
        'service-backend': 'Développement Backend',
        'service-backend-desc': 'Construction d\'APIs robustes et de systèmes backend évolutifs pour vos applications.',
        'service-responsive': 'Design Responsive',
        'service-responsive-desc': 'Des sites web qui s\'adaptent parfaitement à tous les appareils et tailles d\'écran.',
        'skills-title': 'Mes Compétences',
        'projects-title': 'Mes Projets',
        'project1-title': 'E-commerce Platform',
        'project1-desc': 'Une plateforme e-commerce complète avec panier, paiements, gestion des stocks et tableau de bord administrateur.',
        'project2-title': 'Analytics Dashboard',
        'project2-desc': 'Tableau de bord d\'analyse en temps réel avec graphiques interactifs et rapports personnalisés.',
        'project3-title': 'Chat Application',
        'project3-desc': 'Application de messagerie en temps réel avec salles privées, notifications push et partage de fichiers.',
        'project4-title': 'Task Manager',
        'project4-desc': 'Gestionnaire de tâches collaboratif avec système de notifications, calendrier et statistiques de productivité.',
        'project5-title': 'Blog Platform',
        'project5-desc': 'Plateforme de blog moderne avec éditeur WYSIWYG, système de commentaires et SEO optimisé.',
        'project6-title': 'Weather App',
        'project6-desc': 'Application météo avec prévisions détaillées, cartes interactives et alertes personnalisées.',
        'demo': 'Demo',
        'code': 'Code',
        'contact-title': 'Me Contacter',
        'contact-email': 'Email',
        'contact-phone': 'Téléphone',
        'contact-location': 'Localisation',
        'contact-form-title': 'Envoyez-moi un message',
        'form-name': 'Nom complet',
        'form-email': 'Email',
        'form-subject': 'Sujet',
        'form-message': 'Message',
        'form-submit': 'Envoyer le message',
        'frontend': 'Frontend',
        'backend': 'Backend',
        'tools-frameworks': 'Outils & Frameworks',
        'footer-text': '© 2025 Portfolio. Tous droits réservés.'
    },
    ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'من أنا',
        'nav-skills': 'المهارات',
        'nav-projects': 'المشاريع',
        'nav-contact': 'اتصل بي',
        'hero-title': 'مرحباً، أنا عمر زركاني، مطور ويب متكامل',
        'hero-subtitle': 'منشئ تجارب رقمية استثنائية',
        'hero-portfolio': 'عرض أعمالي',
        'hero-contact': 'تواصل معي',
        'about-title': 'من أنا',
        'about-passion': 'شغوف بالتكنولوجيا',
        'about-desc1': 'مطور ويب متكامل بخبرة تزيد عن 5 سنوات في إنشاء تطبيقات ويب حديثة وعالية الأداء. أتخصص في تقنيات Htmlو Css وJavaScript وReact وقواعد البيانات الحديثة.',
        'about-desc2': 'منهجي يجمع بين الإبداع والخبرة التقنية لتقديم حلول تتجاوز التوقعات. أحب مواجهة التحديات المعقدة وتحويل الأفكار إلى واقع رقمي.',
        'about-desc3': 'دائماً أتابع أحدث الاتجاهات التقنية، وأسعى لإنشاء تجارب مستخدم استثنائية وهياكل خلفية قوية.',
        'service-frontend': 'تطوير الواجهة الأمامية',
        'service-frontend-desc': 'إنشاء واجهات مستخدم حديثة ومتجاوبة بأحدث التقنيات.',
        'service-backend': 'تطوير الخلفية',
        'service-backend-desc': 'بناء APIs قوية وأنظمة خلفية قابلة للتوسع لتطبيقاتك.',
        'service-responsive': 'تصميم متجاوب',
        'service-responsive-desc': 'مواقع ويب تتكيف بشكل مثالي مع جميع الأجهزة وأحجام الشاشات.',
        'skills-title': 'مهاراتي',
        'tools-frameworks': 'الأدوات والإطارات',
        'projects-title': 'مشاريعي',
        'project1-title': 'منصة تجارة إلكترونية',
        'project1-desc': 'منصة تجارة إلكترونية كاملة مع عربة التسوق والمدفوعات وإدارة المخزون ولوحة تحكم الإدارة.',
        'project2-title': 'لوحة التحليلات',
        'project2-desc': 'لوحة تحكم تحليلية في الوقت الفعلي مع رسوم بيانية تفاعلية وتقارير مخصصة.',
        'project3-title': 'تطبيق الدردشة',
        'project3-desc': 'تطبيق مراسلة في الوقت الفعلي مع غرف خاصة وإشعارات فورية ومشاركة الملفات.',
        'project4-title': 'مدير المهام',
        'project4-desc': 'مدير مهام تعاوني مع نظام إشعارات وتقويم وإحصائيات الإنتاجية.',
        'project5-title': 'منصة المدونات',
        'project5-desc': 'منصة مدونات حديثة مع محرر WYSIWYG ونظام تعليقات ومحسنة لمحركات البحث.',
        'project6-title': 'تطبيق الطقس',
        'project6-desc': 'تطبيق الطقس مع توقعات مفصلة وخرائط تفاعلية وتنبيهات مخصصة.',
        'demo': 'العرض',
        'code': 'الكود',
        'contact-title': 'تواصل معي',
        'contact-email': 'البريد الإلكتروني',
        'contact-phone': 'الهاتف',
        'contact-location': 'الموقع',
        'contact-form-title': 'أرسل لي رسالة',
        'form-name': 'الاسم الكامل',
        'form-email': 'البريد الإلكتروني',
        'form-subject': 'الموضوع',
        'form-message': 'الرسالة',
        'form-submit': 'إرسال الرسالة',
        'frontend': 'الواجهات الأمامية',
        'backend': 'الواجهات الخلفية',
        'footer-text': '© 2025 البورتفوليو. جميع الحقوق محفوظة.'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-title': 'Hi, i\'m Omar Zargani. Full-stack web developer.',
        'hero-subtitle': 'Creator of exceptional digital experiences',
        'hero-portfolio': 'View my Portfolio',
        'hero-contact': 'Contact me',
        'about-title': 'About me',
        'about-passion': 'Technology enthusiast',
        'about-desc1': 'Full-stack web developer with over 5 years of experience in creating modern and high-performance web applications. I specialize in Html, Css, JavaScript, React technologies and modern databases.',
        'about-desc2': 'My approach combines creativity and technical expertise to deliver solutions that exceed expectations. I love tackling complex challenges and turning ideas into digital reality.',
        'about-desc3': 'Always on the lookout for the latest technological trends, I strive to create exceptional user experiences and robust backend architectures.',
        'service-frontend': 'Frontend Development',
        'service-frontend-desc': 'Creation of modern and responsive user interfaces with the latest technologies.',
        'service-backend': 'Backend Development',
        'service-backend-desc': 'Building robust APIs and scalable backend systems for your applications.',
        'service-responsive': 'Responsive Design',
        'service-responsive-desc': 'Websites that adapt perfectly to all devices and screen sizes.',
        'skills-title': 'My Skills',
        'tools-frameworks': 'Tools & Frameworks',
        'projects-title': 'My Projects',
        'project1-title': 'E-commerce Platform',
        'project1-desc': 'A complete e-commerce platform with shopping cart, payments, inventory management and admin dashboard.',
        'project2-title': 'Analytics Dashboard',
        'project2-desc': 'Real-time analytics dashboard with interactive charts and custom reports.',
        'project3-title': 'Chat Application',
        'project3-desc': 'Real-time messaging application with private rooms, push notifications and file sharing.',
        'project4-title': 'Task Manager',
        'project4-desc': 'Collaborative task manager with notification system, calendar and productivity statistics.',
        'project5-title': 'Blog Platform',
        'project5-desc': 'Modern blog platform with WYSIWYG editor, comment system and SEO optimized.',
        'project6-title': 'Weather App',
        'project6-desc': 'Weather application with detailed forecasts, interactive maps and custom alerts.',
        'demo': 'Demo',
        'code': 'Code',
        'contact-title': 'Contact me',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        'contact-form-title': 'Send me a message',
        'form-name': 'Full name',
        'form-email': 'Email',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send message',
        'frontend': 'Frontend',
        'backend': 'Backend',
        'footer-text': '© 2025 Portfolio. All rights reserved.'
    }
};

// Global variables
let currentTheme = 'light';
let currentLang = 'fr';

// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const colorPickerBtn = document.querySelector('.color-picker-btn');
const colorPicker = document.querySelector('.color-picker');
const colorOptions = document.querySelectorAll('.color-option');
const langToggle = document.querySelector('.lang-toggle');
const langPicker = document.querySelector('.lang-picker');
const langOptions = document.querySelectorAll('.lang-option');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.querySelector('.back-to-top');
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.querySelector('.contact-form');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupEventListeners();
    updateSkillBars();
    updateLanguage(currentLang);
});

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Color picker
    colorPickerBtn.addEventListener('click', toggleColorPicker);
    colorOptions.forEach(option => {
        option.addEventListener('click', changeColors);
    });

    // Language picker
    langToggle.addEventListener('click', toggleLanguagePicker);
    langOptions.forEach(option => {
        option.addEventListener('click', changeLanguage);
    });

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Mobile menu
    mobileToggle.addEventListener('click', toggleMobileMenu);

    // Back to top
    backToTop.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Close pickers when clicking outside
    document.addEventListener('click', function(e) {
        if (!colorPicker.contains(e.target) && !colorPickerBtn.contains(e.target)) {
            colorPicker.classList.remove('active');
        }
        if (!langPicker.contains(e.target) && !langToggle.contains(e.target)) {
            langPicker.classList.remove('active');
        }
    });
}

// Theme functions
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = currentTheme;
    
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Animate the toggle
    themeToggle.style.transform = 'scale(0.8)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
}

// Color picker functions
function toggleColorPicker() {
    colorPicker.classList.toggle('active');
    langPicker.classList.remove('active');
}

function changeColors(e) {
    const primary = e.target.dataset.primary;
    const secondary = e.target.dataset.secondary;
    
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
    
    // Update active state
    colorOptions.forEach(option => option.classList.remove('active'));
    e.target.classList.add('active');
    
    // Close color picker
    colorPicker.classList.remove('active');
    
    // Animate color change
    document.body.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);
}

// Language functions
function toggleLanguagePicker() {
    langPicker.classList.toggle('active');
    colorPicker.classList.remove('active');
}

function changeLanguage(e) {
    const lang = e.target.closest('.lang-option').dataset.lang;
    if (lang && lang !== currentLang) {
        currentLang = lang;
        updateLanguage(lang);
        
        // Update active state
        langOptions.forEach(option => option.classList.remove('active'));
        e.target.closest('.lang-option').classList.add('active');
        
        // Update button text
        const langText = {
            'fr': 'FR',
            'ar': 'AR', 
            'en': 'EN'
        };
        document.querySelector('.current-lang').textContent = langText[lang];
        
        // Close language picker
        langPicker.classList.remove('active');
        
        // Update direction for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', lang);
        }
    }
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Navigation functions
function handleNavigation(e) {
    e.preventDefault();
    const targetSection = e.target.getAttribute('href');
    
    if (targetSection && targetSection.startsWith('#')) {
        const section = document.querySelector(targetSection);
        if (section) {
            // Update active nav
            navLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
            
            // Smooth scroll to section
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    }
}

// Mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
}

// Scroll functions
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Back to top button
    if (scrollTop > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Update active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
    
    // Navbar background
    const navbar = document.querySelector('.navbar');
    if (scrollTop > 50) {
        navbar.style.background = currentTheme === 'dark' 
            ? 'rgba(26, 26, 26, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = currentTheme === 'dark' 
            ? 'rgba(26, 26, 26, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Skills animation
function updateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFills = entry.target.querySelectorAll('.skill-fill');
                skillFills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 200);
                });
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Form handling
function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Get loading text based on current language
    const loadingTexts = {
        'fr': 'Envoi en cours...',
        'ar': 'جاري الإرسال...',
        'en': 'Sending...'
    };
    
    const successTexts = {
        'fr': 'Message envoyé!',
        'ar': 'تم إرسال الرسالة!',
        'en': 'Message sent!'
    };
    
    // Animate submit button
    submitBtn.textContent = loadingTexts[currentLang];
    submitBtn.style.transform = 'scale(0.98)';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = successTexts[currentLang];
        submitBtn.style.background = '#10ac84';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.style.transform = 'scale(1)';
            submitBtn.disabled = false;
            e.target.reset();
        }, 2000);
    }, 1500);
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-button') || 
        e.target.classList.contains('project-link') || 
        e.target.classList.contains('submit-btn')) {
        
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for all anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update active nav
            navLinks.forEach(link => link.classList.remove('active'));
            const correspondingNavLink = document.querySelector(`[href="${targetId}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
            }
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading states
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Typing effect for hero title
function typeWriter() {
    const heroTitle = document.querySelector('[data-translate="hero-title"]');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid rgba(255,255,255,0.8)';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    setTimeout(typeWriter, 1000);
});

// Add intersection observer for counter animations
function animateCounters() {
    const counters = document.querySelectorAll('.skill-name span:last-child');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current) + '%';
                    }, 30);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', animateCounters);





const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});