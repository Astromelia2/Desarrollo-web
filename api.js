'use strict'

const galery = document.querySelector('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQWRQZA2VmMWNkT2VYNk8tWmJ3c1VVbTNiX3lsYkFrR2hsLXJCenpaQ0h3WVVUS0kzQkFVM3VSYnphZAnlRWF9sRFlBcEh2bHU4R004SmQ4b29GX0hNOXQzTGZAHY09OTDI4SGxXN0xGRWNNSnp2SlBkUFN1eDJzN28ZD'

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,media_typecaption,permalink&access_token=${token}`;

fetch(url)
.then(res => res.json() )
.then(data => CrearHtml(data.data))

function CrearHtml(data){
    for (const img of data) {
        galery.innerHTML += `
        <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="">
        <div class="opacity-hover" >
    
            <a href="${img.permalink}" class="caption">
             
            </a>
        </div>
         </div>

        `;
    }
}

next.addEventListener('click', moveGalery);
prev.addEventListener('click', moveGalery);

function moveGalery(e){
    if(e.target.id = 'next'|| e.target.parenElement.id == 'next'){
        feed.scrollLeft += feed.offsetWidth;
    }
    else{
        feed.scrollLeft -= feed.offsetWidth;
    }
}