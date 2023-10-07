/**MENU  */

/**mostra qual a pagina esta com link active */
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a ');

    sections.forEach(function (section, index) {
        const top = section.offsetTop - 98; // Ajuste de deslocamento para tornar a ativação mais precisa

        if (window.scrollY >= top) {
            navLinks.forEach(function (link) {
                link.classList.remove('active'); // Remove a classe active de todos os links
            });

            // Adiciona a classe active ao link correspondente à seção atual
            navLinks[index].classList.add('active');

            if (section.classList.contains('topo')) {
                // Se a seção atual tiver a classe 'topo', remova a classe active do link 'Sobre'
                navLinks[1].classList.remove('active');
            }
        }
    });
});





/*=====================Menu Hamburguer======================= */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


/*============================================ */

/*=====================typing animation======================= */

var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Front end Developer", "Back end Developer", "QA Software Engineer"],
    typeSpeed: 60,
    BackSpeed: 60,
    loop: true
})
/*============================================ */

/**<<<<<<<<Função slide>>>>>>>>>>>>> */
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;

const slides1 = document.querySelectorAll('#conteudo1 .slide');
const slides2 = document.querySelectorAll('#conteudo2 .slide');
const slides3 = document.querySelectorAll('#conteudo3 .slide');
const slides4 = document.querySelectorAll('#conteudo4 .slide');

function updateBullets(slideIndex, totalSlides, containerId) {
    const bulletsContainer = document.querySelector(`#${containerId} .slider-bullets`);
    bulletsContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const bullet = document.createElement('span');
        bullet.classList.add('bullet');
        if (i === slideIndex) {
            bullet.classList.add('active');
        }
        bulletsContainer.appendChild(bullet);
    }
}

function showSlides1() {
    for (let i = 0; i < slides1.length; i++) {
        slides1[i].style.display = 'none';
    }

    slides1[slideIndex1].style.display = 'block';
    updateBullets(slideIndex1, slides1.length, 'conteudo1');
}

function showSlides2() {
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none';
    }
    slides2[slideIndex2].style.display = 'block';
    updateBullets(slideIndex2, slides2.length, 'conteudo2');
}

function showSlides3() {
    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.display = 'none';
    }
    slides3[slideIndex3].style.display = 'block';
    updateBullets(slideIndex3, slides3.length, 'conteudo3');
}

function showSlides4() {
    for (let i = 0; i < slides4.length; i++) {
        slides4[i].style.display = 'none';
    }
    slides4[slideIndex4].style.display = 'block';
    updateBullets(slideIndex4, slides4.length, 'conteudo4');
}

function nextSlide1() {
    if (slideIndex1 < slides1.length - 1) {
        slideIndex1++;
    } else {
        slideIndex1 = 0;
    }
    showSlides1();
}

function prevSlide1() {
    if (slideIndex1 > 0) {
        slideIndex1--;
    } else {
        slideIndex1 = slides1.length - 1;
    }
    showSlides1();
}

function nextSlide2() {
    if (slideIndex2 < slides2.length - 1) {
        slideIndex2++;
    } else {
        slideIndex2 = 0;
    }
    showSlides2();
}

function prevSlide2() {
    if (slideIndex2 > 0) {
        slideIndex2--;
    } else {
        slideIndex2 = slides2.length - 1;
    }
    showSlides2();
}

function nextSlide3() {
    if (slideIndex3 < slides3.length - 1) {
        slideIndex3++;
    } else {
        slideIndex3 = 0;
    }
    showSlides3();
}

function prevSlide3() {
    if (slideIndex3 > 0) {
        slideIndex3--;
    } else {
        slideIndex3 = slides3.length - 1;
    }
    showSlides3();
}

function nextSlide4() {
    if (slideIndex4 < slides4.length - 1) {
        slideIndex4++;
    } else {
        slideIndex4 = 0;
    }
    showSlides4();
}

function prevSlide4() {
    if (slideIndex4 > 0) {
        slideIndex4--;
    } else {
        slideIndex4 = slides4.length - 1;
    }
    showSlides4();
}

showSlides1();
showSlides2();
showSlides3();
showSlides4();


/**######################################### */
/*projtos */
const listAll = document.querySelectorAll('.row-cols-1.row-cols-md-3.g-4 .col');
        const buttonGeral = document.querySelectorAll('#menu-desktop li');

        function removeClick(index) {
            buttonGeral.forEach((item) => {
                item.classList.remove('ativo');
            });
            buttonGeral[index].classList.add('ativo');
        }

        buttonGeral.forEach((item, index) => {
            item.addEventListener('click', () => {
                removeClick(index);
                filterProjects(item.classList[0]);
            });
        });

        function filterProjects(category) {
            listAll.forEach((item) => {
                item.style.display = 'none';
                if (category === 'todos' || item.id === category) {
                    item.style.display = 'block';
                }
            });
        }



/**######################################### */

/**Formulario */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var alertTrigger = document.getElementById('liveAlertBtn');
    'use strict';

    // Função para exibir alertas
    function showAlert(message, type) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.innerHTML = ''; // Limpar alertas anteriores
        alertPlaceholder.appendChild(wrapper);
         // Definir um temporizador para remover o alerta após 30 segundos (30000 milissegundos)
        setTimeout(function () {
            alertPlaceholder.innerHTML = ''; // Remover o alerta após 30 segundos
        }, 3000);
    }

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();

                    showAlert('Por favor, preencha todos os campos corretamente!', 'danger');
                } else {
                    showAlert('Mensagem enviada com sucesso!', 'success');
                }

                form.classList.add('was-validated');
            }, false);
        });

    // Adicione um evento de clique ao botão de alerta, se necessário
    if (alertTrigger) {
        alertTrigger.addEventListener('click', function () {
            showAlert('Nice, you triggered this alert message!', 'success');
        });
    }
})();



