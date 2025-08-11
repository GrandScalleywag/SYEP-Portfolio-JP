const reviews = [{
        id: 1,
        name: "Akheel Dixon",
        img: 'IMG_20250806_153512_309.jpg',
        text: "JP. He's a creative person that listens pretty well. His intellect and personality is pretty cool and sometimes he's joking around and other times he switches to a smart person that genuinely knows what he's talking about. Overall JP is a smart, imaginative, and a very adaptive person.",
        date: "2025-09-08"
    },
    {
        id: 2,
        name: "Eddie Hines",
        img: '#',
        text: "JP is a nice guy who knows how to lighten the mood. He can also be silly sometimes, but he also knows when to be serious. He's always there for you and has a really charming personality.",
        date: "2025-10-08"
    },
  {
        id: 1,
        name: "Jaylen Brunsen",
        img: 'IMG_20250806_154400_322.jpg',
        text: "JP is a guy you can joke around with and trust to lighten the mood. Overall a cool guy and great team player.",
        date: "2025-10-08"
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