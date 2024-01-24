var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector('nav');

var navLinks = document.querySelectorAll('nav a');

hamburger.onclick = function () {
    nav.classList.toggle('active');
}

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('active');
    })
})

ScrollReveal().reveal('.scroll-reveal', {
    origin: 'left',
    distance: '40px',
    easing: 'cubic-bezier(0.5,0,0,1.2)',
    duration: 1000,
    interval: 200
});

ScrollReveal().reveal('.scroll-reveal2', {
    origin: 'top',
    distance: '40px',
    easing: 'cubic-bezier(0.5,0,0,1)',
    duration: 1000,
    interval: 200
});

ScrollReveal().reveal('.scroll-revealLeft', {
    origin: 'left',
    distance: '10px',
    easing: 'cubic-bezier(0.5,0,0,1)',
    duration: 1000,
    interval: 200
});

ScrollReveal().reveal('.scroll-revealRight', {
    origin: 'right',
    distance: '10px',
    easing: 'cubic-bezier(0.5,0,0,1)',
    duration: 1000,
    interval: 200
});


function changeLanguage() {
    var selectedLanguage = document.getElementById("language").value;
    var contentDiv = document.getElementById("conteinerAllContent");
    var menuItems = document.querySelectorAll("ul li a");

    // Spanish
    if (selectedLanguage === "es") {
        contentDiv.innerHTML = `
        <div class="biografia">
        <h1 id="biografiaa" class="scroll-reveal2">Biografia</h1>
       
        <p>Agustin Pengov, de 🇦🇷​, viviendo en 🇮🇹, dj productor Argentino nacido en Villa
            Mercedes
            (San Luis), sus primeros pasos fueron
            por el 2016
            con
            géneros como el <span class="span-color">tech house</span> y house luego con el transcurso del
            tiempo conoció el <span class="span-color">Progressive House</span>
            con
            el cual quedó fascinado por la manera que tiene de contar una historia atravez de su melodía y
            armonía a
            bajos bpm.</p>
        <hr class="scroll-reveal2" style="width: 100%;">
    </div>

    <div class="biografia">
        <h1 id="primerL" class="scroll-reveal2" style="margin-top: 2rem;">Primer lanzamiento</h1>
      
        <p>Su primer lanzamiento fue en 2020 en el sello <span class="span-color">Balkan Connection</span> <span
                class="span-color">(</span>sello de bélgica que está dentro de los <span class="span-color">top
                100</span> del género<span class="span-color">)</span>.</p>
        <hr class="scroll-reveal2" style="width: 100%;">
    </div>

    <div class="biografia">
        <h1 id="apoyo" class="scroll-reveal2" style="margin-top: 2rem;">Apoyo</h1>

        <p>Ya cuenta con el apoyo de grandes artistas como: Hernan Cattaneo, Gustin, K Loveski, Paul Van Dyk,
            Ziger, Marcelo Vasami, Mike Griego, entre otros grandes artistas.</p>
        <hr class="scroll-reveal2" style="width: 100%;">
    </div>

    <div class="biografia">
        <h1 id="actuality" class="scroll-reveal2" style="margin-top: 2rem;">Actualidad</h1>

        <p>En la actualidad ya ha trabajado con sellos como:
            Droid9, Massive Harmony Records, AH Digital, Another Life Music, Sounds and Frequencies Recordings,
            Balkan Connection, Strangers Beats, 3rd Avenue, Dopamine White, Balkan Connection South America,
            Lake Underground Music, Venture Records, Starlight Music Group, Arey, Sound Avenue, Soluna Music,
            Future Avenue, onedotsixtwo, SoundAvenue.</p>

        <hr class="scroll-reveal" style="width: 100%;">
        <h1 id="galerry-imgs" class="scroll-reveal">Galeria de imagenes</h1>
    </div>
    <section class="photos">
    <article class="gallery">
        <div class="img-1 scroll-revealLeft">

        </div>

        <div class="img-2 scroll-revealRight">

        </div>

        <div class="img-3  scroll-revealLeft">

        </div>

        <div class="img-4 scroll-revealRight">

        </div>

        <div class="img-5  scroll-revealLeft">

        </div>

        <div class="img-6 scroll-revealRight">

        </div>

        <div class="img-7  scroll-revealLeft">

        </div>

        <div class="img-8 scroll-revealRight">

        </div>

        <div class="img-9  scroll-revealLeft">

        </div>

        <div class="img-10 scroll-revealRight">

        </div>

        <div class="img-11  scroll-revealLeft">

        </div>

        <div class="img-12 scroll-revealRight">

        </div>


    </article>
</section>

            <h1 id="my-music" class="titul scroll-reveal">Musica creada por Agustin Pengov</h1>
            <hr class="hr-music">
            <div class="container">
                <audio></audio>

                <h1 class="h1-js">Musica</h1>

                <div class="time-font" id="current_time">0:00</div>

                <div class="buttons">
                    <button id="prev">
                        <i class="fas fa-backward"></i>
                    </button>
                    <button id="play">
                        <i class="fas fa-play"></i>
                    </button>
                    <button id="next">
                        <i class="fas fa-forward"></i>
                    </button>
                </div>

                <div class="time-font" id="current_audio"></div>

                <div class="progress_container">
                    <div id="progress"></div>
                </div>

            </div>

</div>

<footer>



<div id="conteinerAllContent" class="conteinerAllContent">

    <hr class="scroll-reveal" style="width: 100%;">

    <a href="index.html">
        <h2 id="contact" class="scroll-reveal">Agustin Pengov <i class="fa-solid fa-address-book"></i></h2>
    </a>

    <div class="flex-redes2">
        <div class="flex">
            <a class="scroll-reveal" href="#">

                <i class="fa-solid fa-envelope"></i>
            </a>


            <a class="scroll-reveal" href="https://www.facebook.com/Agustin.Pengodj">
                <i class="bi bi-facebook"></i>
            </a>

            <a class="scroll-reveal" href="https://www.instagram.com/agustinpengov.dj">
                <i class="bi bi-instagram"></i>
            </a>

            <a class="scroll-reveal" href="https://open.spotify.com/intl-es/artist/3SW8dSQ8bd0CfmpSDM9u2L">
                <i class="bi bi-spotify"></i>
            </a>

            <a class="scroll-reveal" href="https://soundcloud.com/agustinpengov98">
                <i class="fa-brands fa-soundcloud"></i>
            </a>
        </div>
    </div>
    <hr style="width: 100%;">
</div>
</footer>
            
        `;

    }

    // English

    else if (selectedLanguage === "en") {
        contentDiv.innerHTML = `
        <div class="biografia">
        <h1 id="biografiaa" class="scroll-reveal2">Biography</h1>
        <p>Agustin Pengov, from 🇦🇷​, living in 🇮🇹, Argentine DJ and producer born in Villa Mercedes
            (San Luis), took his first steps around 2016
            with genres such as <span class="span-color">tech house</span> and house; later, with the passage of
            time, he discovered <span class="span-color">Progressive House</span>,
            which fascinated him for the way it tells a story through its melody and harmony at lower bpm.</p>
        <hr class="scroll-reveal2" style="width: 100%;">
        
        <div class="biografia">
            <h1 id="primerL" class="scroll-reveal2" style="margin-top: 2rem;">First Release</h1>
            <p>His first release was in 2020 on the label <span class="span-color">Balkan Connection</span> <span
                    class="span-color">(</span>a Belgian label that is among the <span class="span-color">top
                    100</span> in the genre<span class="span-color">)</span>.</p>
            <hr class="scroll-reveal2" style="width: 100%;">
        </div>

        <div class="biografia">
            <h1 id="apoyo" class="scroll-reveal2" style="margin-top: 2rem;">Support</h1>
            <p>He already has the support of great artists such as: Hernan Cattaneo, Gustin, K Loveski, Paul Van Dyk,
                Ziger, Marcelo Vasami, Mike Griego, among other great artists.</p>
            <hr class="scroll-reveal2" style="width: 100%;">
        </div>

        <div class="biografia">
            <h1 id="actuality" class="scroll-reveal2" style="margin-top: 2rem;">Current Status</h1>
            <p>Currently, he has worked with labels such as:
                Droid9, Massive Harmony Records, AH Digital, Another Life Music, Sounds and Frequencies Recordings,
                Balkan Connection, Strangers Beats, 3rd Avenue, Dopamine White, Balkan Connection South America,
                Lake Underground Music, Venture Records, Starlight Music Group, Arey, Sound Avenue, Soluna Music,
                Future Avenue, onedotsixtwo, SoundAvenue.</p>
            <hr class="scroll-reveal" style="width: 100%;">
            <h1 id="galerry-imgs" class="scroll-reveal">Image Gallery</h1>
        </div>
        <section class="photos">
    <article class="gallery">
        <div class="img-1 scroll-revealLeft">

        </div>

        <div class="img-2 scroll-revealRight">

        </div>

        <div class="img-3  scroll-revealLeft">

        </div>

        <div class="img-4 scroll-revealRight">

        </div>

        <div class="img-5  scroll-revealLeft">

        </div>

        <div class="img-6 scroll-revealRight">

        </div>

        <div class="img-7  scroll-revealLeft">

        </div>

        <div class="img-8 scroll-revealRight">

        </div>

        <div class="img-9  scroll-revealLeft">

        </div>

        <div class="img-10 scroll-revealRight">

        </div>

        <div class="img-11  scroll-revealLeft">

        </div>

        <div class="img-12 scroll-revealRight">

        </div>


    </article>
</section>
<h1 id="my-music" class="titul scroll-reveal">Music create by Agustin Pengov</h1>
            <hr class="hr-music">
            <div class="container">
                <audio></audio>

                <h1 style="color: rgb(255,255,255); font-size: 1rem;" class="h1-js">Musica</h1>

                <div class="time-font" id="current_time">0:00</div>

                <div class="buttons">
                    <button id="prev">
                        <i class="fas fa-backward"></i>
                    </button>
                    <button id="play">
                        <i class="fas fa-play"></i>
                    </button>
                    <button id="next">
                        <i class="fas fa-forward"></i>
                    </button>
                </div>

                <div class="time-font" id="current_audio"></div>

                <div class="progress_container">
                    <div id="progress"></div>
                </div>

            </div>


        </div>
</div>


</div>

<footer>



<div id="conteinerAllContent" class="conteinerAllContent">

    <hr class="scroll-reveal" style="width: 100%;">

    <a href="index.html">
        <h2 id="contact" class="scroll-reveal">Agustin Pengov <i class="fa-solid fa-address-book"></i></h2>
    </a>

    <div class="flex-redes2">
        <div class="flex">
            <a class="scroll-reveal" href="#">

                <i class="fa-solid fa-envelope"></i>
            </a>


            <a class="scroll-reveal" href="https://www.facebook.com/Agustin.Pengodj">
                <i class="bi bi-facebook"></i>
            </a>

            <a class="scroll-reveal" href="https://www.instagram.com/agustinpengov.dj">
                <i class="bi bi-instagram"></i>
            </a>

            <a class="scroll-reveal" href="https://open.spotify.com/intl-es/artist/3SW8dSQ8bd0CfmpSDM9u2L">
                <i class="bi bi-spotify"></i>
            </a>

            <a class="scroll-reveal" href="https://soundcloud.com/agustinpengov98">
                <i class="fa-brands fa-soundcloud"></i>
            </a>
        </div>
    </div>
    <hr style="width: 100%;">
</div>
</footer>
        `;
    }
    // Italian
    else if (selectedLanguage === "it") {
        contentDiv.innerHTML = `
        <div class="biografia">
        <h1 id="biografiaa" class="scroll-reveal2">Biografia</h1>
        <p>Agustin Pengov, da 🇦🇷​, vive a 🇮🇹, DJ e produttore argentino nato a Villa Mercedes
            (San Luis), i suoi primi passi sono stati nel 2016
            con generi come il <span class="span-color">tech house</span> e house, successivamente nel corso del
            tempo ha scoperto il <span class="span-color">Progressive House</span>
            del quale è rimasto affascinato per il modo in cui racconta una storia attraverso la sua melodia e
            armonia a bassi bpm.</p>
        <hr class="scroll-reveal2" style="width: 100%;">
    </div>

    <div class="biografia">
        <h1 id="primerL" class="scroll-reveal2" style="margin-top: 2rem;">Primo lancio</h1>
       
        <p>Il suo primo lancio è stato nel 2020 con l'etichetta <span class="span-color">Balkan
                Connection</span> <span class="span-color">(</span>etichetta belga che è tra le <span
                class="span-color">prime 100</span> del genere<span class="span-color">)</span>.</p>
        <hr class="scroll-reveal2" style="width: 100%;">
    </div>

    <div class="biografia">
        <h1 id="apoyo" class="scroll-reveal2" style="margin-top: 2rem;">Supporto</h1>

        <p>Ha già ricevuto il supporto di grandi artisti come: Hernan Cattaneo, Gustin, K Loveski, Paul Van Dyk,
            Ziger, Marcelo Vasami, Mike Griego, tra gli altri grandi artisti.</p>
        <hr class="scroll-reveal2" style="width: 100%;">
    </div>

    <div class="biografia">
        <h1 id="actuality" class="scroll-reveal2" style="margin-top: 2rem;">Attualità</h1>
        
        <p>Attualmente ha collaborato con etichette come:
            Droid9, Massive Harmony Records, AH Digital, Another Life Music, Sounds and Frequencies Recordings,
            Balkan Connection, Strangers Beats, 3rd Avenue, Dopamine White, Balkan Connection South America,
            Lake Underground Music, Venture Records, Starlight Music Group, Arey, Sound Avenue, Soluna Music,
            Future Avenue, onedotsixtwo, SoundAvenue.</p>

        <hr class="scroll-reveal" style="width: 100%;">
        <h1 id="galerry-imgs" class="scroll-reveal">Galleria di immagini</h1>
    </div>
    <section class="photos">
    <article class="gallery">
        <div class="img-1 scroll-revealLeft">

        </div>

        <div class="img-2 scroll-revealRight">

        </div>

        <div class="img-3  scroll-revealLeft">

        </div>

        <div class="img-4 scroll-revealRight">

        </div>

        <div class="img-5  scroll-revealLeft">

        </div>

        <div class="img-6 scroll-revealRight">

        </div>

        <div class="img-7  scroll-revealLeft">

        </div>

        <div class="img-8 scroll-revealRight">

        </div>

        <div class="img-9  scroll-revealLeft">

        </div>

        <div class="img-10 scroll-revealRight">

        </div>

        <div class="img-11  scroll-revealLeft">

        </div>

        <div class="img-12 scroll-revealRight">

        </div>


    </article>
</section>

            <h1 id="my-music" class="titul scroll-reveal">Musica creata da Agustin Pengov</h1>
            <hr class="hr-music">
            <div class="container">
                <audio></audio>

                <h1 class="h1-js">Musica</h1>

                <div class="time-font" id="current_time">0:00</div>

                <div class="buttons">
                    <button id="prev">
                        <i class="fas fa-backward"></i>
                    </button>
                    <button id="play">
                        <i class="fas fa-play"></i>
                    </button>
                    <button id="next">
                        <i class="fas fa-forward"></i>
                    </button>
                </div>

                <div class="time-font" id="current_audio"></div>

                <div class="progress_container">
                    <div id="progress"></div>
                </div>

            </div>


        </div>
</div>

<footer>



<div id="conteinerAllContent" class="conteinerAllContent">

    <hr class="scroll-reveal" style="width: 100%;">

    <a href="index.html">
        <h2 id="contact" class="scroll-reveal">Agustin Pengov <i class="fa-solid fa-address-book"></i></h2>
    </a>

    <div class="flex-redes2">
        <div class="flex">
            <a class="scroll-reveal" href="#">

                <i class="fa-solid fa-envelope"></i>
            </a>


            <a class="scroll-reveal" href="https://www.facebook.com/Agustin.Pengodj">
                <i class="bi bi-facebook"></i>
            </a>

            <a class="scroll-reveal" href="https://www.instagram.com/agustinpengov.dj">
                <i class="bi bi-instagram"></i>
            </a>

            <a class="scroll-reveal" href="https://open.spotify.com/intl-es/artist/3SW8dSQ8bd0CfmpSDM9u2L">
                <i class="bi bi-spotify"></i>
            </a>

            <a class="scroll-reveal" href="https://soundcloud.com/agustinpengov98">
                <i class="fa-brands fa-soundcloud"></i>
            </a>
        </div>
    </div>
    <hr style="width: 100%;">
</div>
</footer>
        `;
    }
    for (var i = 0; i < menuItems.length; i++) {
        if (selectedLanguage === "es") {
            // Spanish
            menuItems[i].textContent = menuItemsSpanish[i];
        } else if (selectedLanguage === "en") {
            // English
            menuItems[i].textContent = menuItemsEnglish[i];
        } else if (selectedLanguage === "it") {
            // Italian
            menuItems[i].textContent = menuItemsItalian[i];
        }
    }


    ScrollReveal().reveal('.scroll-reveal', {
        origin: 'left',
        distance: '40px',
        easing: 'cubic-bezier(0.5,0,0,1.2)',
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal('.scroll-reveal2', {
        origin: 'top',
        distance: '40px',
        easing: 'cubic-bezier(0.5,0,0,1)',
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal('.scroll-revealLeft', {
        origin: 'left',
        distance: '10px',
        easing: 'cubic-bezier(0.5,0,0,1)',
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal('.scroll-revealRight', {
        origin: 'right',
        distance: '10px',
        easing: 'cubic-bezier(0.5,0,0,1)',
        duration: 1000,
        interval: 200
    });

    const audio = document.querySelector("audio");
    const title = document.querySelector(".h1-js");
    const play = document.getElementById("play");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const current_time = document.getElementById("current_time");
    const current_audio = document.getElementById("current_audio");
    const progressContainer = document.querySelector(".progress_container");
    const progress = document.getElementById("progress");

    const songs = ["Agustin Pengov - Cloudy [AH Digital]", "Agustin Pengov - Exile [Droid9]", "Agustin Pengov - Etias [3rd Avenue]", "Agustin Pengov - That [Sound Avenue]", "Agustin Pengov - Concordia [AH Digital]", "Agustin Pengov - SEIA [onedotsixtwo]"];

    let audioIndex = 0;

    loadAudio(songs[audioIndex]);

    function loadAudio(song) {
        title.textContent = song;
        audio.src = `audio/${song}.mp3`;

        audio.addEventListener("loadedmetadata", () => {
            timeSong(audio.duration, current_audio);
        });
    }

    function playSong() {
        play.classList.add("play");

        const icon = play.querySelector("i.fas");
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");

        audio.play();

    }

    function pauseSong() {
        play.classList.remove("play");

        const icon = play.querySelector("i.fas");
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");

        audio.pause();

    }

    function prevSong() {
        audioIndex--;

        if (audioIndex < 0) {
            audioIndex = songs.length - 1;
        }

        loadAudio(songs[audioIndex]);
        playSong();

    }
    function nextSong() {
        audioIndex++;

        if (audioIndex > songs.length - 1) {
            audioIndex = 0
        }

        loadAudio(songs[audioIndex]);
        playSong();

    }

    function updateBarPorgress(e) {
        const { duration, currentTime } = e.srcElement;

        const progressPercent = (currentTime / duration) * 100;

        progress.style.width = `${progressPercent}%`;

    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickPosition = e.offsetX;
        const duration = audio.duration;

        audio.currentTime = (clickPosition / width) * duration;
    }

    function timeSong(audio, element) {

        const totalSeconds = Math.round(audio);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        element.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    play.addEventListener("click", () => {
        const isPlaying = play.classList.contains("play");

        if (!isPlaying) {
            playSong();
        } else {
            pauseSong();
        }
    });

    prev.addEventListener("click", prevSong);
    next.addEventListener("click", nextSong);

    audio.addEventListener("timeupdate", (e) => {
        updateBarPorgress(e)
        timeSong(audio.currentTime, current_time);
    });

    progressContainer.addEventListener("click", setProgress);
    audio.addEventListener("ended", nextSong);
}

// Arrays que contienen los textos traducidos para cada idioma
var menuItemsSpanish = ["Inicio", "Biografia", "Primer Lanzamiento", "Apoyo", "Actualidad", "Galeria de imagenes", "Mi musica", "Contactame"];
var menuItemsEnglish = ["Home", "Biography", "First Release", "Support", "Current Status", "Image Gallery", "My Music", "Contact Me"];
var menuItemsItalian = ["Home", "Biografia", "Primo Lancio", "Supporto", "Attualità", "Galleria di immagini", "La mia musica", "Contattami"];

/* MUSIC */

const audio = document.querySelector("audio");
const title = document.querySelector(".h1-js");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current_time = document.getElementById("current_time");
const current_audio = document.getElementById("current_audio");
const progressContainer = document.querySelector(".progress_container");
const progress = document.getElementById("progress");

const songs = ["Agustin Pengov - Cloudy [AH Digital]", "Agustin Pengov - Exile [Droid9]", "Agustin Pengov - Etias [3rd Avenue]", "Agustin Pengov - That [Sound Avenue]", "Agustin Pengov - Concordia [AH Digital]", "Agustin Pengov - SEIA [onedotsixtwo]"];

let audioIndex = 0;

loadAudio(songs[audioIndex]);

function loadAudio(song) {
    title.textContent = song;
    audio.src = `audio/${song}.mp3`;

    audio.addEventListener("loadedmetadata", () => {
        timeSong(audio.duration, current_audio);
    });
}

function playSong() {
    play.classList.add("play");

    const icon = play.querySelector("i.fas");
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");

    audio.play();

}

function pauseSong() {
    play.classList.remove("play");

    const icon = play.querySelector("i.fas");
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");

    audio.pause();

}

function prevSong() {
    audioIndex--;

    if (audioIndex < 0) {
        audioIndex = songs.length - 1;
    }

    loadAudio(songs[audioIndex]);
    playSong();

}
function nextSong() {
    audioIndex++;

    if (audioIndex > songs.length - 1) {
        audioIndex = 0
    }

    loadAudio(songs[audioIndex]);
    playSong();

}

function updateBarPorgress(e) {
    const { duration, currentTime } = e.srcElement;

    const progressPercent = (currentTime / duration) * 100;

    progress.style.width = `${progressPercent}%`;

}

function setProgress(e) {
    const width = this.clientWidth;
    const clickPosition = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickPosition / width) * duration;
}

function timeSong(audio, element) {

    const totalSeconds = Math.round(audio);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    element.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

play.addEventListener("click", () => {
    const isPlaying = play.classList.contains("play");

    if (!isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", (e) => {
    updateBarPorgress(e)
    timeSong(audio.currentTime, current_time);
});

progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);