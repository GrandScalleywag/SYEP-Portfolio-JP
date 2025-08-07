const reviews = [{
        id: 1,
        name: "Akheel Dixon",
        img: 'IMG_20250806_153512_309.jpg',
        text: "JP. He's a creative person that listens pretty well. His intellect and personality is pretty cool and sometimes he's joking around and other times he switches to a smart person that genuinely knows what he's talking about. Overall JP is a smart, imaginative, and a very adaptive person.",
        date: "2023-10-01"
    },
    {
        id: 2,
        name: "Jane Smith",
        img: '#',
        text: "Very good experience, will come again.",
        date: "2023-10-02"          
    },
  {
        id: 1,
        name: "nohj Doe",
        img: '#',
        text: " friendly staff!",
        date: "2023-10-01"
    },
   


];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');
const date = document.getElementById('date');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
   
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
    date.textContent = item.date;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});