// template_p99t2jl
// service_952vprc
// 4GMijwLQzs35iRqNm

let isModalOpen = false;
let isModeDark = false;

function toggleContrast() {
    if (isModeDark) {
        isModeDark = false;
        return document.documentElement.classList += " dark";
    }
    isModeDark = true;
    return document.documentElement.classList.remove("dark");
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('#loading');
    const success = document.querySelector('#success');
    loading.classList += " z-10"
    emailjs
        .sendForm(
            'service_952vprc',
            'template_p99t2jl',
            event.target,
            '4GMijwLQzs35iRqNm'
    ).then(() => {
        loading.classList.remove('-z-10');
        success.classList += " z-10";
    }).catch(() => {
        loading.classList.remove('-z-10');
        alert(
            "The email service is temporarily unavailable. Please contact me directly at MDKuhlmann@zoho.com"
        );
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}


// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
  
//   // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')