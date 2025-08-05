const review = [
    {
        id: 1,
        name: 'Susan Smith',
        img: '#',
        text: 'uhydfigdbh ugtdjnfbhb jdfhu erijkdf khurnj',
    },

     {
        id: 2,
        name: 'John Pork',
        img: '#',
        text: 'uhydfigdbh ugtdjnfbhb jdfhu erijkdf khurnj',
    },

     {
        id: 3,
        name: 'Peter Jones',
        img: '#',
        text: 'uhydfigdbh ugtdjnfbhb jdfhu erijkdf khurnj',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});

function showPerson() {
    const item = review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener(
    'click',
    function () {
        currentItem++;
        if (currentItem > review.length - 1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    }
);

prevBtn.addEventListener(
    'click',
    function () {
        currentItem--;
        if (currentItem < 0) {
            currentItem = review.length - 1;
        }
        showPerson(currentItem);
    }
);