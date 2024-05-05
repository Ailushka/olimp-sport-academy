import logo from '../images/logo.png'
function Price() {
    return (
       <div className="price_header container">
         <h2><span className="section-title">Абонементы</span></h2>

      <div className="price-list">
        
        <div className="price-option">
          <span className="price">
            5000 рублей
            <span className="price__description">12 тренировок/месяц</span>
          </span>
          <div className="icon">
            <img src={logo}/>
          </div>
        </div>
        <div className="price-option">
          <span className="price">
            4000 рублей
            <span className="price__description">8 тренировок/месяц</span>
          </span>
          <div className="icon">
            <img src={logo}/>
          </div>
        </div>
        <div className="price-option">
          <span className="price">
            700 рублей
            <span className="price__description price__description_type_single">
              Разовая тренировка
            </span>
          </span>
          <div className="icon">
            <img src={logo}/>
          </div>
        </div>
      </div>
      </div> 
    );
  }
  


  export default Price
  