import photo from "../images/gallery_photo.jpeg";

function Gallery() {
  return (
    <section className="gallery container">
      <h2><span className="section-title">Фотогалерея</span></h2>

      <ul className="gallery__list">
        <li className="gallery__item">
          <img
            className="gallery__img"
            src={photo}
            alt=""
          />
        </li>
        <li className="gallery__item">
          <img
            className="gallery__img"
            src="https://imgholder.ru/320x240/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson"
            alt=""
          />
        </li>
        <li className="gallery__item">
          <img
            className="gallery__img"
            src="https://imgholder.ru/320x240/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson"
            alt=""
          />
        </li>
        <li className="gallery__item">
          <img
            className="gallery__img"
            src="https://imgholder.ru/320x240/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson"
            alt=""
          />
        </li>
        <li className="gallery__item">
          <img
            className="gallery__img"
            src="https://imgholder.ru/320x240/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson"
            alt=""
          />
        </li>
        <li className="gallery__item">
          <img
            className="gallery__img"
            src="https://imgholder.ru/320x240/8493a8/adb9ca.jpg&text=IMAGE+HOLDER&font=kelson"
            alt=""
          />
        </li>
      </ul>
    </section>
  );
}

export default Gallery;
