window.addEventListener('load', init)

function init(){

    const header = document.querySelector('header');

    window.addEventListener('scroll',(event) => {
        if( window.scrollY != 0 ){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    });

    // dark mode

    const darkModeBtn = document.querySelector('.dark-mode img');
    const root = document.querySelector(':root');

    darkModeBtn.addEventListener('click', () => {

        if( darkModeBtn.classList.contains('active') ){
            root.style.setProperty('--font-color', '#000000');
            root.style.setProperty('--bg-color', '#ffffff');
            darkModeBtn.classList.remove('active');
        }else{
            root.style.setProperty('--font-color', '#ffffff');
            root.style.setProperty('--bg-color', '#000000');
            darkModeBtn.classList.add('active');
        }
    });

}

