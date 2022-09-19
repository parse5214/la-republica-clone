import './App.css';
import './ContentHeader.css';
import './ContentPrincipalNews.css';
import ContentHeader from './ContentHeader';
import ContentPrincipalNews from './ContentPrincipalNews';

const mostSearched = [
  {keyword: "PEDRO CASTILLO", src: "https://larepublica.pe/politica/congreso/2022/09/17/congreso-casos-contra-pedro-castillo-y-dina-boluarte-por-retomarse-en-agenda-legislativa-lady-camones-subcomision-de-acusaciones-constitucionales/"},
  {keyword: "FORTNITE PARADISE", src: "https://larepublica.pe/videojuegos/juegos-gratis/2022/09/17/fortnite-evento-final-temporada-3-paradise-fecha-hora-y-donde-ver-en-vivo-desde-youtube/"},
  {keyword: "ELECCIONES 2022", src: "https://larepublica.pe/elecciones/"},
  {keyword: "BYRON CASTILLO", src: "https://larepublica.pe/deportes/2022/09/16/byron-castillo-peru-y-chile-no-se-rinden-en-el-caso-byron-castillo-y-presentaran-apelacion-ante-el-tas-seleccion-peruana-fifa/"},
  {keyword: "ETHEL POZO", src: "https://larepublica.pe/espectaculos/farandula/2022/09/17/ethel-pozo-usuarios-exponen-a-ethel-pozo-por-presuntamente-retocar-sus-fotos-le-salio-mal-julian-alexander-instagram/"},
  {keyword: "ANDYNSANE", src: "https://larepublica.pe/videojuegos/Actualidad/2022/09/17/fall-guys-torneo-de-thegrefg-a-que-hora-jugara-andynsane-y-a-quienes-enfrentara-twitch-elzeein/"},
  {keyword: "GEINER ALVARADO", src: "https://larepublica.pe/politica/congreso/2022/09/15/pedro-castillo-en-vivo-hoy-congreso-debate-solicitud-del-presidente-para-salir-del-pais-y-censura-contra-geiner-alvarado-ultimas-noticias-minuto-a-minuto/"},
  {keyword: "VACUNA COVID-19", src: "https://larepublica.pe/sociedad/2022/09/14/coronavirus-en-peru-minsa-evalua-aplicar-una-dosis-anual-de-la-vacuna-contra-la-covid-19-vacunacion-en-peru-cuarta-dosis-emergencia-sanitaria/"},
  {keyword: "HORÓSCOPO", src: "https://larepublica.pe/horoscopo/2022/09/17/horoscopo-de-hoy-y-predicciones-del-sabado-17-de-septiembre-conoce-lo-que-te-deparan-los-astros-en-el-amor-y-dinero-segun-tu-signo-del-zodiaco-cuantos-signos-zodiacales-hay-aries-tauro-geminis-cancer-leo-virgo-libra-escorpio-sagitario-capricornio-acuario-piscis-evat/"},
  {keyword: "ONPE", src: "https://larepublica.pe/sociedad/2022/09/01/donde-me-toca-votar-en-las-elecciones-municipales-del-2-de-octubre-link-onpe-elecciones-lima-local-de-votacion-atmp/"},
  {keyword: "TIKTOK", src: "https://larepublica.pe/tendencias/actualidad/2022/09/13/youtube-viral-pareja-celebra-boda-2-dias-asistieron-mil-invitados-y-compraron-1800-cajas-de-cervezas-redes-sociales-video/"},
  {keyword: "PARTIDOS DE HOY", src: "https://larepublica.pe/deportes/agenda/2022/09/12/en-vivo-partidos-de-hoy-ver-champions-league-copa-libertadores-copa-sudamericana-liga-1-futbol-peruano-la-liga-espanola-premier-league-serie-a-ligue-1-copa-de-la-liga-profesional-campeonato-nacional-liga-betplay/"},
  "TIKTOK",
  {keyword: "PRECIO DEL DÓLAR", src: "https://larepublica.pe/economia/precio-del-dolar/2022/09/17/dolar-precio-del-dolar-hoy-en-peru-tipo-de-cambio-de-este-17-de-septiembre-segun-bcr-dolares-a-soles-dolar-de-hoy-precio-del-dolar-hoy-compra-y-venta-atmp/"},
  {keyword: "MIEMBRO DE MESA", src: "https://larepublica.pe/elecciones/2022/09/13/onpe-elecciones-2022-consulta-si-eres-miembro-de-mesa-y-donde-te-toca-votar-local-de-votacion-multas-por-no-sufragar-y-ultimas-noticias-sobre-elecciones-municipales-peru-jne-minuto-a-minuto-scdd/"},
  {keyword: "DÓLAR VENEZUELA", src: "https://larepublica.pe/mundo/venezuela/2022/09/14/dolartoday-y-monitor-dolar-precio-del-dolar-hoy-miercoles-14-de-septiembre-venezuela-dolar-hoy-dolar-venezuela-banco-de-venezuela/"},
  {keyword: "LOCAL DE VOTACIÓN", src: "https://larepublica.pe/elecciones/2022/09/13/onpe-elecciones-2022-consulta-si-eres-miembro-de-mesa-y-donde-te-toca-votar-local-de-votacion-multas-por-no-sufragar-y-ultimas-noticias-sobre-elecciones-municipales-peru-jne-minuto-a-minuto-scdd/"},
  {keyword: "DÓLAR", src: "https://larepublica.pe/economia/precio-del-dolar/2022/09/16/dolar-hoy-precio-del-dolar-hoy-en-peru-tipo-de-cambio-compra-y-venta-bcrp-dolares-a-soles-de-hoy-cotizacion-dolar-estadounidense-atmp/"},
  {keyword: "PRECIO DEL EURO", src: "https://larepublica.pe/economia/2022/09/13/precio-del-euro-hoy-en-peru-martes-13-de-septiembre-de-2022-cual-es-la-cotizacion-de-la-moneda-euro-a-soles-euro-a-dolares-atmp/"},
  {keyword: "DÓLAR BCV", src: "https://larepublica.pe/mundo/venezuela/2022/09/14/dolar-bcv-en-el-banco-central-de-venezuela-hoy-14-de-septiembre-de-2022-dolar-en-venezuela-dolar-hoy-precio-dolar-hoy/"},
  {keyword: "TEMBLOR EN PERÚ", src: "https://larepublica.pe/sociedad/2022/09/14/temblor-de-hoy-en-peru-segun-igp-de-cuanto-fue-el-temblor-de-hoy-miercoles-14-de-septiembre-de-2022-sismo-de-hoy-en-peru-donde-fue-el-epicentro-centro-sismologico-nacional-sismate-atmp/"},
  {keyword: "FERIADOS EN PERÚ", src: "https://larepublica.pe/datos-lr/respuestas/2022/08/10/cuando-es-el-proximo-feriado-en-el-mes-de-agosto-en-peru-y-a-que-se-debe-atmp/"},
  {keyword: "QUINIELA DE HOY", src: "https://larepublica.pe/mundo/loterias-sorteos/2022/09/12/quiniela-hoy-en-vivo-12-de-septiembre-resultados-de-la-quiniela-nacional-y-provincia-de-hoy-en-argentina-quiniela-online-hoy-loteria-nacional-quiniela-de-hoy-todas-las-cabezas/"}
]

const menu = [
  {keyword: "ÚLTIMAS NOTICIAS", src: "https://larepublica.pe/ultimas-noticias/"},
  {keyword: "POLÍTICA", src: "https://larepublica.pe/politica/"},
  {keyword: "ECONOMÍA", src: "https://larepublica.pe/economia/"},
  {keyword: "SOCIEDAD", src: "https://larepublica.pe/sociedad/"},
  {keyword: "MUNDO", src: "https://larepublica.pe/mundo/"},
  {keyword: "DEPORTES", src: "https://larepublica.pe/deportes/"},
  {keyword: "ESPECTÁCULOS", src: "https://larepublica.pe/espectaculos/"},
  {keyword: "REDES SOCIALES", src: "https://larepublica.pe/tendencias/"},
  {keyword: "|", src: ""},
  {keyword: "PERÚ", src: "https://larepublica.pe/peru/"},
  {keyword: "DÓLAR", src: "https://larepublica.pe/economia/precio-del-dolar/"},
  {keyword: "SUSCRÍBETE", src: "https://larepublica.pe/newsletter/"}]

const warning = "Elecciones 2022 - Más de un candidato con denuncias policiales se presentan en 41 de las 42 alcaldías distritales de Lima Metropolitana"

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <ContentHeader mostSearched={mostSearched} menu={menu} warning={warning}/>
        <ContentPrincipalNews />
      </div>
    </div>
  );
}

export default App;
