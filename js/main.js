// Espera o DOM ser carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const backToTop = document.querySelector('.back-to-top');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galeriaItems = document.querySelectorAll('.galeria-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    const depoimentoItems = document.querySelectorAll('.depoimento-item');
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
    });
    
    // Menu toggle para mobile
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.menu a').forEach(function(link) {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
    
    // Filtro da galeria
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            filterBtns.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            // Obtém o valor do filtro
            const filter = this.getAttribute('data-filter');
            
            // Filtra os itens da galeria
            galeriaItems.forEach(function(item) {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Slider de depoimentos
    let currentSlide = 0;
    
    function showSlide(index) {
        // Esconde todos os slides
        depoimentoItems.forEach(function(item) {
            item.style.display = 'none';
        });
        
        // Remove a classe active de todos os dots
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        // Mostra o slide atual
        depoimentoItems[index].style.display = 'block';
        
        // Adiciona a classe active ao dot atual
        dots[index].classList.add('active');
        
        // Atualiza o índice atual
        currentSlide = index;
    }
    
    // Inicializa o slider
    showSlide(currentSlide);
    
    // Event listeners para os botões de navegação
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + depoimentoItems.length) % depoimentoItems.length;
        showSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % depoimentoItems.length;
        showSlide(currentSlide);
    });
    
    // Event listeners para os dots
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto slide para os depoimentos
    setInterval(function() {
        currentSlide = (currentSlide + 1) % depoimentoItems.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Formulário de contato
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar o formulário
            // Por exemplo, usando fetch API ou XMLHttpRequest
            
            // Simulação de envio bem-sucedido
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            formContato.reset();
        });
    }
    
    // Formulário de newsletter
    const formNewsletter = document.getElementById('form-newsletter');
    if (formNewsletter) {
        formNewsletter.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de inscrição bem-sucedida
            alert('Inscrição realizada com sucesso!');
            formNewsletter.reset();
        });
    }
    
    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

