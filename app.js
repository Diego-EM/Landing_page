//Scrollreveal behavior
const elements = document.querySelectorAll('.sr');
const options = {
    reset: true,
    distance: "10px",
    viewOffset: {
        top: 140,
        bottom: 140
    }
}
const scrollreveal = ScrollReveal(options);
scrollreveal.reveal(elements);