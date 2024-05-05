import React from 'react';

function About() {
  return (
    <div className="about-container container">
      <h2 className="club-name">Детский клуб единоборств "Олимп Спорт Академия"</h2>
      <p className="club-description">Добро пожаловать в детский клуб единоборств "ОСА"! Мы предлагаем уникальные возможности для детей разного возраста и уровня подготовки. Наш клуб создан с целью не только развития физических навыков, но и формирования характера, дисциплины и уверенности в себе.</p>
      <div className="sections">
        <h2 className="sections-heading">Секции</h2>
        <ul className="sections-list">
          <li className="section-item">
            <strong>ДЗЮДО:</strong> Японское боевое искусство, основанное на принципах самоконтроля и уважения к сопернику.
          </li>
          <li className="section-item">
            <strong>БОКС:</strong> Классическое занятие, способствующее развитию координации, силы и выносливости.
          </li>
          <li className="section-item"><strong>КАРАТЭ:</strong> Традиционное японское искусство самозащиты, развивающее гибкость и координацию.</li>
          <li className="section-item">
            <strong>ММА (смешанные единоборства):</strong> Комбинация различных стилей боевых искусств, включая ударные и грепплинговые техники.
          </li>
          <li className="section-item">
            <strong>САМБО:</strong> Российское боевое искусство, объединяющее элементы борьбы на земле и стоя.
          </li>
          <li className="section-item">
            <strong>ВОЛЬНАЯ БОРЬБА:</strong> Олимпийский вид спорта, требующий высокой физической подготовки и стратегического мышления.
          </li>
          <li className="section-item">
            <strong>ТХЭКВОНДО:</strong> Корейское боевое искусство, включающее ударные и блочные техники, а также упражнения на растяжку и гибкость.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
