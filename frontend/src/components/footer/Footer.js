import './footer.css';

const Footer = () => {
    return (
        <div className="footer pt-3 rodape footerContainer">
            <div className="container-footer">
                <div>
                    <div className="footer-img">
                        <a href="http://www.poli.br/">
                            <img src="http://www.ecomp.poli.br/wp-content/themes/TemaECompResponsivo/lib/img/poli.svg" className="img-responsive center-block" alt="Imagem responsiva"/>
                        </a>

          <a href="http://www.upe.br/"><img
              src="http://www.ecomp.poli.br/wp-content/themes/TemaECompResponsivo/lib/img/upe.svg"
              className="img-responsive center-block" alt="Imagem responsiva"/></a>
        </div>
        <div className="footer-text">
          <a href="https://goo.gl/maps/fzvjJhEvchE2">
            <p>Rua Benfica, 455 - Madalena <br/>
              CEP:50720-001 <br/>
              Recife-PE</p>
          </a>
          <p>Telefone: 81 3184 7501<br/>
            graduacao@ecomp.poli.br
          </p>
          <p>Copyright © 2021 Engenharia da Computação.<br/>All rights reserved.<br/></p>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Footer;