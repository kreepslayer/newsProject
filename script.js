let news = document.querySelector('.news')

/* let title = ''; */
let category;
let kol;
let kolich = document.querySelectorAll('.kol option')
let categoryes = document.querySelectorAll('#select option')
let searchBlock = document.querySelector('.search')
let search = document.querySelector('.search')
let searchButton = document.querySelector('.searchButton')


const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  }
  
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);
  


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

function tosearch() {
    let searchValue = search.value;
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

    let searchVal = search.value;


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





searchButton.addEventListener('click', getCat)