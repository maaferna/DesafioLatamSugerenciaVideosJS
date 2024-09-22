// Módulo para manejar la reproducción de videos
const videoModule = (function() {
    // Función privada para establecer la URL del video en el iframe correspondiente
    const setVideoUrl = function(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        } else {
            console.error(`El elemento con id ${id} no se encontró.`);
        }
    };

    // Retornar la función pública que hace uso de la función privada
    return {
        playVideo: function(url, id) {
            setVideoUrl(url, id);
        }
    };
})();

// Clase padre Multimedia
class Multimedia {
    constructor(url) {
        let _url = url; // Atributo protegido
        this.getUrl = function() {
            return _url;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video.";
    }
}

// Clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        videoModule.playVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const newUrl = `${this.getUrl()}?start=${tiempo}`;
        videoModule.playVideo(newUrl, this.id);
    }
}

// URLs de videos en formato embed
const musicUrl = "https://www.youtube.com/embed/6DeDzsCGbsQ?si=cLsRqmUaqciOwqlc";
const movieUrl = "https://www.youtube.com/embed/V75dMMIW2B4?si=tflP-b9GrBGARmGQ";
const seriesUrl = "https://www.youtube.com/embed/ewgCqJDI_Nk";

// Instancias de Reproductor para cada categoría
const musica = new Reproductor(musicUrl, 'musica');
const pelicula = new Reproductor(movieUrl, 'peliculas');
const serie = new Reproductor(seriesUrl, 'series');

// Mostrar videos en cada categoría
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el inicio de un video
musica.setInicio(60); // Empieza en el segundo 60


function verificarUrl(url, id) {
    console.log(`Verificando URL para ${id}: ${url}`);
    const iframe = document.getElementById(id);
    if (iframe) {
        iframe.src = url;
        console.log(`URL asignada correctamente a ${id}`);
    } else {
        console.error(`No se encontró el iframe con id: ${id}`);
    }
}

// Prueba con URLs alternativas
verificarUrl("https://www.youtube.com/embed/dpmAY059TTY?si=YcpW6MCA5W80IiaP", "musica");
verificarUrl("https://www.youtube.com/embed/V75dMMIW2B4?si=tflP-b9GrBGARmGQ", "peliculas");
verificarUrl("https://www.youtube.com/embed/ewgCqJDI_Nk", "series");
