// window.addEventListener('DOMContentLoaded', () => {
    // viewport
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
      
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
      
    setScreenSize();

    // main-visual word-box show
    const title = document.querySelectorAll('.title');
    for (let j = 0; j < title.length; j ++) {
        title[j].classList.add('start');
    }

    // profile menu show
    const profileMenu = document.querySelector('.menu-icon');
    const profileClose = document.querySelector('.close');
    const profileArea = document.querySelector('.profile');
    const progressBar = document.querySelectorAll('.progress-bar');

    profileMenu.addEventListener('click', () => {
        profileArea.classList.add('show');
        for (let i = 0; i < progressBar.length; i ++) {
            progressBar[i].classList.add('raise');
        }
    });
    
    profileClose.addEventListener('click', () => {
        profileArea.classList.remove('show');
        for (let i = 0; i < progressBar.length; i ++) {
            progressBar[i].classList.remove('raise');
        }
    });

    function setting(currentPageNumber, totalPageNumber, pages) {
        this.currentPageNumber = currentPageNumber;
        this.totalPageNumber = totalPageNumber;
        this.pages = pages;
        this.viewHeight = document.documentElement.clientHeight;
    }
    function viewResize() {
        this.viewHeight = document.documentElement.clientHeight;
        this.pages.style.height = this.viewHeight + 'px';
        this.pages.style.top = - this.viewHeight * (this.currentPageNumber - 1) + 'px';
    }

    setting(1, 2, document.querySelector('.scrollBox-area'));
    window.addEventListener('resize', viewResize);

    // window.addEventListener("wheel", function(e){
    //     e.preventDefault();
    // } ,{passive : false});

    // scroll-box area
    // const scrollBox = document.querySelector('.scrollBox-area');
    // const contentCount = scrollBox.children;
    // let contents = scrollBox.childNodes[1].clientHeight;
    // let page = 0;
    // let wheelTimer;

    // scrollBox.style.transform = `translateY(0px)`;
    // scrollBox.addEventListener('wheel', (e) => {
    //     clearTimeout(wheelTimer);
    //     wheelTimer = setTimeout(function() {
    //         if(e.deltaY > 0) {
    //             if(page == contentCount.length) return;
    //             page++;
    //         } else if(e.deltaY < 0) {
    //             if(page == 1) return;
    //             page--;
    //         }
    //         let s_pos = (page - 1) * contents;
    //         scrollBox.style.transform = `translateY(-${s_pos}px)`;
    //     }, 40);
    // });
// });