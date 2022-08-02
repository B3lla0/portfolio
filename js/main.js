window.addEventListener('DOMContentLoaded', () => {
    console.log('%c Hello, wellcome to my portfolio!', 
    'background: #222; color: #0052FF; font-size: 18px; font-weight: 700;');

    // loading
    function loadingAni() {
        const header = document.querySelector('header');
        const container = document.querySelector('#root');
        const loadingCube = document.querySelector('.sk-folding-cube');

        aniTimer = setTimeout(function() {
            header.style.display = 'block';
            container.style.display = 'block';
            loadingCube.classList.add('fadeout');
        }, 3000);
    }

    loadingAni();

    // loading word box animation
    const title = document.querySelectorAll('.title');
    aniTimer = setTimeout(function() {
        for (let j = 0; j < title.length; j ++) {
            title[j].classList.add('start');
        }
    }, 4000);

    // viewport resize
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
      
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    // fullpage scroll
    const scrollSection = document.querySelectorAll('.scrollSection');
    const sectionCount = scrollSection.length;
    scrollSection.forEach(function(item, index) {
        item.addEventListener('wheel', function(event) {
            event.preventDefault();
            let delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
            delta = -event.detail / 3;
            let moveTop = window.scrollY;
            let elmSelector = scrollSection[index];
            if (delta < 0){
                if (elmSelector !== sectionCount - 1){
                    try{
                        moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                    }catch(e){}
                }
            } else {
                if (elmSelector !== 0){
                    try{
                        moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                    }catch(e){}
                }
            }
            window.scrollTo({
                top: moveTop,
                left:0,
                behavior:'smooth'
            });
        });
    });

    // about animation
    window.addEventListener('scroll', () => {
        const contentHeight = document.querySelector('.main-visual');
        const contentNowHeight = contentHeight.clientHeight / 2;
        const contentAbout = document.querySelector('.about');
        const headerNav = document.querySelectorAll('.header-nav');
        let nowScroll = window.scrollY;

        if (nowScroll >= contentNowHeight) {
            contentAbout.classList.add('on');
        } else {
            contentAbout.classList.remove('on');
        }
    });

    // fixed nav show
    const closeIcon = document.querySelector('.close-icon');
    const fixedNav = document.querySelector('.fixed-nav');
    const fixedNavItem = document.querySelector('.fixed-nav-item');
    const navWrap = document.querySelector('.fixed-nav-wrap');
    const navActiveIcon = document.querySelector('.mobile-nav');

    navActiveIcon.addEventListener('click', () => {
        fixedNav.classList.toggle('show');
        setTimeout(function() {
            navWrap.classList.toggle('ani');
            closeIcon.style.display = 'block';
        }, 1000);
    });

    closeIcon.addEventListener('click', () => {
        fixedNav.classList.toggle('show');
        navWrap.classList.toggle('ani');
        closeIcon.style.display = 'none';
    });

    fixedNavItem.addEventListener('click', () => {
        fixedNav.classList.toggle('show');
    });

    console.log(navWrap.children);

    // about menu img src change
    const aboutIcon = document.querySelector('.blog-icon');
    const blog = aboutIcon.parentNode;
    blog.addEventListener('mouseover', () => {
        aboutIcon.src = './images/blog_icon_active.svg';
    });
    blog.addEventListener('mouseout', () => {
        aboutIcon.src = './images/blog_icon.svg';
    });
});

