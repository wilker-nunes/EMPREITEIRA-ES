// Animações com ScrollReveal
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
        reset: false
    });
    
    // Animações para elementos específicos
    
    // Hero Section
    sr.reveal('.hero-content h1', {
        origin: 'left',
        delay: 300
    });
    
    sr.reveal('.hero-content p', {
        origin: 'right',
        delay: 500
    });
    
    sr.reveal('.hero-content .btn', {
        delay: 700
    });
    
    // Section Headers
    sr.reveal('.section-header', {
        distance: '20px'
    });
    
    // Sobre Section
    sr.reveal('.sobre-text', {
        origin: 'left',
        delay: 300
    });
    
    sr.reveal('.sobre-images', {
        origin: 'right',
        delay: 500
    });
    
    sr.reveal('.valor', {
        interval: 200
    });
    
    // Serviços Section
    sr.reveal('.servico-card', {
        interval: 200
    });
    
    // Galeria Section
    sr.reveal('.galeria-filter', {
        delay: 300
    });
    
    sr.reveal('.galeria-item', {
        interval: 200
    });
    
    // Depoimentos Section
    sr.reveal('.depoimentos-slider', {
        delay: 300
    });
    
    // Contato Section
    sr.reveal('.contato-form', {
        origin: 'left',
        delay: 300
    });
    
    sr.reveal('.contato-info', {
        origin: 'right',
        delay: 500
    });
    
    sr.reveal('.info-item', {
        interval: 200
    });
    
    // Footer
    sr.reveal('.footer-logo', {
        delay: 200
    });
    
    sr.reveal('.footer-links, .footer-services, .footer-social', {
        interval: 200
    });
    
    // Efeitos de partículas para o hero (opcional)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('hero', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Efeito de paralaxe no hero
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.getElementById('hero');
        
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Efeito de glassmorphism para elementos específicos
    const glassElements = document.querySelectorAll('.servico-card, .depoimento-content');
    
    glassElements.forEach(function(element) {
        element.classList.add('glass-effect');
    });
});

