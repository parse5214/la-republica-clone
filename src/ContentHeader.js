
const ContentHeader = (props) => {

  const displayList = () => {
    let x = document.getElementById("list-to-display-id")
    if(x.style.display === "none") x.style.display = "block"
    else x.style.display = "none"
  }

  return(
    <div className="container-header">
      <div className="horizontal-scrollable-container">
        <div className="before-horizontal-scrollable">'HOY'</div>
        <div className="horizontal-scrollable">
          {props.mostSearched.map(el => <div className="horizontal-scrollable-item" key={el.keyword}><a href={el.src}>{el.keyword}</a></div>)}
        </div>
      </div>
      <div className="second-container-header">
        <div className="container-btn">
          <button className="btn-sandwich" onClick={displayList}>
            <div className="btn-sandwich-li"></div>
            <div className="btn-sandwich-li"></div>
            <div className="btn-sandwich-li"></div>
          </button>
        </div>
        <div className="container-logo-header">
          <a href="/" className="logo-header">
            <img src="https://cdn.larepublica.pe/images/content/default/logo-lr.svg" alt="Últimas Noticias del Perú y el Mundo en larepublica.pe" title="La República" width="200" height="35"/>
          </a>
        </div>
        <div id="list-to-display-id" className="list-to-display">
          <input type="text" placeholder="Buscar en la República..."/>
          <ul>
            <li><a href="https://larepublica.pe/ultimas-noticias/">Inicio</a></li>
            <li><a href="https://larepublica.pe/politica/">Política</a></li>
            <li><a href="https://larepublica.pe/elecciones/">Elecciones 2022</a></li>
            <li><a href="https://larepublica.pe/economia/">Economía</a></li>
            <li><a href="https://larepublica.pe/sociedad/">Sociedad</a></li>
            <li><a href="https://larepublica.pe/mundo/">Mundo</a></li>
            <li><a href="https://impreso.larepublica.pe/impresa-archive/larepublica-lima/09-2022">Impreso</a></li>
            <li><a href="https://larepublica.pe/columnistas/">Columnistas</a></li>
            <li><a href="https://larepublica.pe/verificador/">Verificador</a></li>
            <li><a href="https://lrmas.larepublica.pe/">LR+</a></li>
            <li><a href="https://data.larepublica.pe/">LR Data</a></li>
            <li><a href="https://larepublica.pe/domingo/">Domingo</a></li>
            <li><a href="https://larepublica.pe/deportes/">Deportes</a></li>
            <li><a href="https://larepublica.pe/espectaculos/">Espectáculos</a></li>
            <li><a href="https://larepublica.pe/cine-series/">Cine y Series</a></li>
            <li><a href="https://larepublica.pe/ciencia/">Ciencia</a></li>
            <li><a href="https://larepublica.pe/tecnologia/">Tecnología</a></li>
            <li><a href="https://larepublica.pe/tendencias/">Redes Sociales</a></li>
          </ul>
        </div>
      </div>
      <div className="third-container-header">
        <ul className="menu-list">
          {props.menu.map(el => <li key={`li${el.keyword}`} className="menu-section-item"><a href={el.src}>{el.keyword}</a></li>)}
          <li className="menu-section-item"><a><svg data-content="menuBuscador" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" style={{width: "13px", fill: "rgb(0, 0, 0)", marginTop: "-4px"}}><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path></svg></a></li>
        </ul>
      </div>
      <div className="fourth-container-header">
        <div className="container-warning">
          <div className="blink"><div className="circle"></div></div>
          <div className="warning"><a href="https://data.larepublica.pe/mas-de-un-candidato-con-denuncias-policiales-se-presenta-en-41-de-las-42-alcaldias-distritales-de-lima-metropolitana/">{props.warning}</a></div>
        </div>
      </div>
    </div>
  )
}

export default ContentHeader;