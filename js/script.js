const animeNavBar = () => {
    const olivierRLink = document.getElementById("linkOlivierR");
    const competencesLink = document.getElementById("linkCompetences");
    const expeLink = document.getElementById("linkExpe");
    const contactLink = document.getElementById("linkContact");
    const formationLink = document.getElementById("linkFormations");
    const lienLink = document.getElementById("linkFooter");

    olivierRLink.addEventListener("click", () =>{
        competencesLink.classList.remove('active');
        expeLink.classList.remove('active');
        contactLink.classList.remove('active');
        formationLink.classList.remove('active');
        lienLink.classList.remove('active');
        // alert("test");
    })

    competencesLink.addEventListener("click", () =>{
        competencesLink.classList.add('active');
        expeLink.classList.remove('active');
        contactLink.classList.remove('active');
        formationLink.classList.remove('active');
        lienLink.classList.remove('active');
    })

    expeLink.addEventListener("click", () =>{
        competencesLink.classList.remove('active');
        expeLink.classList.add('active');
        contactLink.classList.remove('active');
        formationLink.classList.remove('active');
        lienLink.classList.remove('active');
    })

    contactLink.addEventListener("click", () =>{
        competencesLink.classList.remove('active');
        expeLink.classList.remove('active');
        contactLink.classList.add('active');
        formationLink.classList.remove('active');
        lienLink.classList.remove('active');
    })

    formationLink.addEventListener("click", () =>{
        competencesLink.classList.remove('active');
        expeLink.classList.remove('active');
        contactLink.classList.remove('active');
        formationLink.classList.add('active');
        lienLink.classList.remove('active');
    })

    lienLink.addEventListener("click", () =>{
        competencesLink.classList.remove('active');
        expeLink.classList.remove('active');
        contactLink.classList.remove('active');
        formationLink.classList.remove('active');
        lienLink.classList.add('active');
    })
};

animeNavBar();