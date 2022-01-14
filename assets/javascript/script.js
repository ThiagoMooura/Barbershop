function toggle(){
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('.line1').classList.toggle('active')
    document.querySelector('.line2').classList.toggle('active')
    document.querySelector('.line3').classList.toggle('active')
    document.querySelector('body').classList.toggle('active')
    document.querySelector('.whatsapp').classList.toggle('active')
}

// OWL CAROUSEL
$(".carousel").owlCarousel({
    margin: 20,
    loop:true,
    autoplay:true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        500:{
            items: 2.2,
            nav: false
        },
        1000:{
            items: 3.2,
            nav: false
        },
    }
});




//AUTO-SCROLL
const menuLinks = document.querySelectorAll('.menu a[href^="#"]')

function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 80;
    nativeScroll(distanceFromTheTop);
}

function al(){
    alert('vcx')
}

menuLinks.forEach((link) => {
   link.addEventListener("click", scrollToSection);
});









//ACTIVE SCROLL

function hov(){
    if(window.scrollY < 370 && innerWidth > 960){
    document.querySelector('#home').style.color='#FECC01';
    document.querySelector('#home').style.borderBottom='5px solid #FECC01';

    document.querySelector('#servicos').style.color='#fff';
    document.querySelector('#servicos').style.borderBottom='5px solid #000';
    document.querySelector('#sobre').style.color='#fff';
    document.querySelector('#sobre').style.borderBottom='5px solid #000';
    document.querySelector('#equipe').style.color='#fff';
    document.querySelector('#equipe').style.borderBottom='5px solid #000';
    document.querySelector('#galeria').style.color='#fff';
    document.querySelector('#galeria').style.borderBottom='5px solid #000';
    document.querySelector('#precos').style.color='#fff';
    document.querySelector('#precos').style.borderBottom='5px solid #000';
    document.querySelector('#local').style.color='#fff';
    document.querySelector('#local').style.borderBottom='5px solid #000';
    }
    if(window.scrollY > 370 && innerWidth > 960){
    document.querySelector('#servicos').style.color='#FECC01';
    document.querySelector('#servicos').style.borderBottom='5px solid #FECC01';
    
    document.querySelector('#home').style.color='#fff';
    document.querySelector('#home').style.borderBottom='5px solid #000';
    document.querySelector('#sobre').style.color='#fff';
    document.querySelector('#sobre').style.borderBottom='5px solid #000';
    document.querySelector('#equipe').style.color='#fff';
    document.querySelector('#equipe').style.borderBottom='5px solid #000';
    document.querySelector('#galeria').style.color='#fff';
    document.querySelector('#galeria').style.borderBottom='5px solid #000';
    document.querySelector('#precos').style.color='#fff';
    document.querySelector('#precos').style.borderBottom='5px solid #000';
    document.querySelector('#local').style.color='#fff';
    document.querySelector('#local').style.borderBottom='5px solid #000';
    }
    if(window.scrollY > 800 && innerWidth > 960){
    document.querySelector('#sobre').style.color='#FECC01';
    document.querySelector('#sobre').style.borderBottom='5px solid #FECC01';

    document.querySelector('#home').style.color='#fff';
    document.querySelector('#home').style.borderBottom='5px solid #000';
    document.querySelector('#servicos').style.color='#fff';
    document.querySelector('#servicos').style.borderBottom='5px solid #000';
    document.querySelector('#equipe').style.color='#fff';
    document.querySelector('#equipe').style.borderBottom='5px solid #000';
    document.querySelector('#galeria').style.color='#fff';
    document.querySelector('#galeria').style.borderBottom='5px solid #000';
    document.querySelector('#precos').style.color='#fff';
    document.querySelector('#precos').style.borderBottom='5px solid #000';
    document.querySelector('#local').style.color='#fff';
    document.querySelector('#local').style.borderBottom='5px solid #000';
    }
    if(window.scrollY > 1155 && innerWidth > 960){
    document.querySelector('#equipe').style.color='#FECC01';
    document.querySelector('#equipe').style.borderBottom='5px solid #FECC01';

    document.querySelector('#home').style.color='#fff';
    document.querySelector('#home').style.borderBottom='5px solid #000';
    document.querySelector('#servicos').style.color='#fff';
    document.querySelector('#servicos').style.borderBottom='5px solid #000';
    document.querySelector('#sobre').style.color='#fff';
    document.querySelector('#sobre').style.borderBottom='5px solid #000';
    document.querySelector('#galeria').style.color='#fff';
    document.querySelector('#galeria').style.borderBottom='5px solid #000';
    document.querySelector('#precos').style.color='#fff';
    document.querySelector('#precos').style.borderBottom='5px solid #000';
    document.querySelector('#local').style.color='#fff';
    document.querySelector('#local').style.borderBottom='5px solid #000';
    }
    if(window.scrollY > 1800 && innerWidth > 960){
    document.querySelector('#galeria').style.color='#FECC01';
    document.querySelector('#galeria').style.borderBottom='5px solid #FECC01';

    document.querySelector('#home').style.color='#fff';
    document.querySelector('#home').style.borderBottom='5px solid #000';
    document.querySelector('#servicos').style.color='#fff';
    document.querySelector('#servicos').style.borderBottom='5px solid #000';
    document.querySelector('#sobre').style.color='#fff';
    document.querySelector('#sobre').style.borderBottom='5px solid #000';
    document.querySelector('#equipe').style.color='#fff';
    document.querySelector('#equipe').style.borderBottom='5px solid #000';
    document.querySelector('#precos').style.color='#fff';
    document.querySelector('#precos').style.borderBottom='5px solid #000';
    document.querySelector('#local').style.color='#fff';
    document.querySelector('#local').style.borderBottom='5px solid #000';
    }
    if(window.scrollY > 2800 && innerWidth > 960){
    document.querySelector('#precos').style.color='#FECC01';
    document.querySelector('#precos').style.borderBottom='5px solid #FECC01';

    document.querySelector('#home').style.color='#fff';
    document.querySelector('#home').style.borderBottom='5px solid #000';
    document.querySelector('#servicos').style.color='#fff';
    document.querySelector('#servicos').style.borderBottom='5px solid #000';
    document.querySelector('#sobre').style.color='#fff';
    document.querySelector('#sobre').style.borderBottom='5px solid #000';
    document.querySelector('#equipe').style.color='#fff';
    document.querySelector('#equipe').style.borderBottom='5px solid #000';
    document.querySelector('#galeria').style.color='#fff';
    document.querySelector('#galeria').style.borderBottom='5px solid #000';
    document.querySelector('#local').style.color='#fff';
    document.querySelector('#local').style.borderBottom='5px solid #000';
    }
    if(window.scrollY > 3637 && innerWidth > 960){
    document.querySelector('#local').style.color='#FECC01';
    document.querySelector('#local').style.borderBottom='5px solid #FECC01';

    document.querySelector('#home').style.color='#fff';
    document.querySelector('#home').style.borderBottom='5px solid #000';
    document.querySelector('#servicos').style.color='#fff';
    document.querySelector('#servicos').style.borderBottom='5px solid #000';
    document.querySelector('#sobre').style.color='#fff';
    document.querySelector('#sobre').style.borderBottom='5px solid #000';
    document.querySelector('#equipe').style.color='#fff';
    document.querySelector('#equipe').style.borderBottom='5px solid #000';
    document.querySelector('#galeria').style.color='#fff';
    document.querySelector('#galeria').style.borderBottom='5px solid #000';
    document.querySelector('#precos').style.color='#fff';
    document.querySelector('#precos').style.borderBottom='5px solid #000';
    }
    if(window.scrollY < 400){
        document.querySelector('.whatsapp').style.opacity='0'
    }if(window.scrollY > 400){
        document.querySelector('.whatsapp').style.opacity='1'
    }
}


window.addEventListener('scroll', hov);