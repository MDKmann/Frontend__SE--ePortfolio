// template_p99t2jl
// service_952vprc
// 4GMijwLQzs35iRqNm

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

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
