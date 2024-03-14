
function skrypt() {
    let hsl=document.getElementById('hsl').value
    const tabela =document.getElementById('tabela')
    tabela.rows[0].cells[0].style.background ='hsl('+hsl+',100%,50%)'
    tabela.rows[1].cells[0].style.background ='hsl('+hsl+',80%,50%)'
    tabela.rows[1].cells[1].style.background ='hsl('+hsl+',60%,50%)'
    tabela.rows[1].cells[2].style.background ='hsl('+hsl+',40%,50%)'
    tabela.rows[1].cells[3].style.background ='hsl('+hsl+',20%,50%)'

}
const images = [
    { src: 'sunset.jpg', description: 'Grafika rastrowa.' },
    { src: 'portret.jpg', description: 'Grafika wektorowa.' },
    { src: 'motyl.jpg', description: 'Grafika rastrowa.' },
    { src: 'vector.jpg', description: 'Grafika wektorowa.' }
];

// Aktualny indeks wyświetlanego zdjęcia
let currentIndex = 0;

// Funkcja zmieniająca aktualnie wyświetlane zdjęcie
function changeImage() {
    // Zwiększ indeks o 1 (przejście do kolejnego zdjęcia)
    currentIndex++;

    // Jeśli osiągnięto koniec listy, wróć do pierwszego zdjęcia
    if (currentIndex === images.length) {
        currentIndex = 0;
    }

    // Pobierz elementy obrazu i opisu z HTML
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');

    // Zmień źródło obrazu i opis na nowe zdjęcie
    mainImage.src = images[currentIndex].src;
    imageDescription.textContent = images[currentIndex].description;
  //  W tym przykładzie, każde zdjęcie ma teraz skojarzony opis,
// który jest wyświetlany pod obrazem.
 // Funkcja changeImage() nadal zmienia obraz, 
 // ale teraz również aktualizuje opis.
}
