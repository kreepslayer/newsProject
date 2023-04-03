let news = document.querySelector('.news')

/* let title = ''; */
let category;
let kol;
let kolich = document.querySelectorAll('.kol option')
let categoryes = document.querySelectorAll('#select option')
let searchBlock = document.querySelector('.search')
let search = document.querySelector('.search')
let searchButton = document.querySelector('.searchButton')
let i = document.querySelector('.fa-search')
console.log(i);

function createCard(text, art, newsurl, img) {



    let card = document.createElement('div');
    card.classList.add('card');
    card.style.maxHeight = `80vh`;
    /* card.style.minHeight = `80vh`; */


    let cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');
    cardImg.src = img;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardH5 = document.createElement('h5');
    cardH5.classList.add('card-title')
    cardH5.innerHTML = art;


    let cardP = document.createElement('p');
    cardP.classList.add('card-text');
    cardP.innerHTML = text;

    let cardA = document.createElement('a');
    cardA.classList.add('btn');
    cardA.classList.add('btn-primary');
    cardA.classList.add('newsBtn');
    cardA.innerText = 'Read All';
    cardA.href = newsurl;
    cardA.target = "_blank";


    news.append(card);
    card.append(cardImg);
    card.append(cardBody);
    cardBody.append(cardH5);
    cardBody.append(cardP);
    cardBody.append(cardA);

    if (kol == 1) {
        card.style.width = `300px`
    } else if (kol == 2) {
        card.style.width = `275px`
    } else if (kol == 3) {
        card.style.width = `250px`
    } else if (kol == 4) {
        card.style.width = `225px`
    } else if (kol == 5) {
        card.style.width = `230px`
    }


}


function getCat() {
    console.clear();
    news.innerHTML = '';
    for (let i = 0; i < categoryes.length; i++) {
        if (categoryes[i].selected) {
            category = categoryes[i].value;
        }
    }
    for (let i = 0; i < kolich.length; i++) {
        if (kolich[i].selected) {
            kol = kolich[i].value;
        }
    }
    apikey = '02d2c091ba46a08fdae41d771512886c';
    url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=' + kol + '&apikey=' + apikey;



    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            articles = data.articles;

            for (i = 0; i < articles.length; i++) {
                let title = articles[i]['title'];
                console.log(title);
                let des = articles[i]['description'];
                console.log(des);
                let newsurl = articles[i]['url'];
                console.log(newsurl);
                let img = articles[i]['image'];
                console.log(img);
                createCard(des, title, newsurl, img);
            }
        });

}


function searchFun() {
    let input = document.querySelector('input');
    let val = input.value;
    let allCategs = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];
    let i = 0;
    let timerGet = setInterval(() => {
        /* url = 'https://gnews.io/api/v4/top-headlines?category=' + allCategs[item] + '&lang=en&country=us&max=10&apikey=02d2c091ba46a08fdae41d771512886c';
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                articles = data.articles;

                for (i = 0; i < articles.length; i++) {
                    
                    let description = articles[i]['description'];
                    if (description.includes(val)) {
                        let title = articles[i]['title'];
                        console.log(title);
                        let description = articles[i]['description'];
                        console.log(description);
                        let newsurl = articles[i]['url'];
                        console.log(newsurl);
                        let img = articles[i]['image'];
                        console.log(img);
                        createCard(description, title, newsurl, img);
                    }
                }
            }); */
            console.log(i);
            i++;
            if(i == allCategs.length + 1){
                clearInterval(timerGet);
            }
        }, 1000)
    }




i.addEventListener('click', searchFun)
searchButton.addEventListener('click', getCat)