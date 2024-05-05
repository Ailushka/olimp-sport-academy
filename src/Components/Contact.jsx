function ContactInfo() {
    return (
      <div className="contact-info container" style={{ color: 'white' }}>
        <h2><span className="section-title">Контакты</span></h2>
        <address className="contact-info__content">
          <a className="contact-info__telephone" href="tel:+79264343041" >Телефон: +7-926-434-30-41</a>
          <p className="contact-info__address">Адрес: Новочеркасский б-р, 20к5, Москва</p>
        </address>
      </div>
    );
}


function Map() {
  return (
    <div className="map">
    <iframe
          title="Карта"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.5132117481376!2d37.718732077479935!3d55.64528217304466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d27800ab92d%3A0x7fe9bc049509caa6!2z0JrQu9GD0LEg0JXQtNC40L3QvtCx0L7RgNGB0YLQsiAi0JLQntCh0KLQntCaIg!5e0!3m2!1sru!2sru!4v1714434633370!5m2!1sru!2sru&t=dark"
          width="100%"
          height="650"
          style={{ border: 0, color: 'white' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  }
  
  
  function ContactPage() {
    return (
      <div className="contact-page">
        <ContactInfo />
        <Map />
      </div>
    );
  }
  
  export default ContactPage;
  