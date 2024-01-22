var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector('nav');

var navLinks = document.querySelectorAll('nav a');

hamburger.onclick = function () {
    nav.classList.toggle('active');
}

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('active');
    });
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
</div>
        `;
    }
    // English
    else if (selectedLanguage === "en") {
        contentDiv.innerHTML = `
        <div class="biografia">
        <h1 id="biografiaa" class="scroll-reveal2">Biography</h1>
        <p>Agustin Pengov, from 🇦🇷​, living in Senigallia 🇮🇹, Argentine DJ and producer born in Villa Mercedes
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
</div>
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
</div>
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
}

// Arrays que contienen los textos traducidos para cada idioma
var menuItemsSpanish = ["Inicio", "Biografia", "Primer Lanzamiento", "Apoyo", "Actualidad", "Galeria de imagenes", "Mi musica", "Contactame"];
var menuItemsEnglish = ["Home", "Biography", "First Release", "Support", "Current Status", "Image Gallery", "My Music", "Contact Me"];
var menuItemsItalian = ["Home", "Biografia", "Primo Lancio", "Supporto", "Attualità", "Galleria di immagini", "La mia musica", "Contattami"];
