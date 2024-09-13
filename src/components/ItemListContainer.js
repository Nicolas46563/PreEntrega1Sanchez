import React from 'react';
import './css/ItemListContainer.css'; // Asegúrate de añadir estilos si es necesario

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <header className="header">
        <h1>{greeting}</h1>
      </header>
      <section className="intro">
        <h2>¿Por qué tomar mate?</h2>
        <p>
          El mate es mucho más que una simple bebida; es una tradición profundamente arraigada en la cultura de América del Sur. Originario de las tierras fértiles de Paraguay, Argentina, Uruguay y Brasil, el mate se elabora a partir de las hojas secas de la yerba mate, una planta con propiedades únicas. Su sabor, caracterizado por una mezcla de notas herbales y terrosas, es apreciado por millones de personas que disfrutan de su ritual diario. Pero el mate no es solo una cuestión de sabor; también ofrece una serie de beneficios para la salud que lo hacen una elección inteligente para aquellos que buscan un impulso natural y saludable.
        </p>
        <p>
          Consumir mate es una manera excelente de mantenerte energizado y alerta durante el día. Contiene cafeína, teobromina y otros compuestos que ayudan a mejorar la concentración y la resistencia física. Además, el mate está cargado de antioxidantes que combaten el estrés oxidativo y protegen las células del daño causado por los radicales libres. La tradición del mate va más allá de su preparación; es un símbolo de comunidad y amistad, compartido en reuniones sociales y familiares.
        </p>
      </section>
      <section className="benefits">
        <h2>Ventajas del Mate</h2>
        <ul>
          <li><strong>Fuente de Energía Natural:</strong> El mate proporciona una dosis de energía que te ayudará a mantenerte activo y productivo durante todo el día, sin los picos de energía y caídas que a menudo vienen con el café.</li>
          <li><strong>Rico en Antioxidantes:</strong> La yerba mate está repleta de antioxidantes que ayudan a combatir el daño celular y fortalecen tu sistema inmunológico.</li>
          <li><strong>Mejora la Concentración:</strong> Gracias a su contenido de cafeína, el mate puede mejorar la concentración y la claridad mental, ayudándote a enfrentar tus tareas diarias con mayor enfoque.</li>
          <li><strong>Promueve una Digestión Saludable:</strong> El mate tiene propiedades digestivas que pueden ayudar a aliviar la indigestión y promover una digestión más eficiente.</li>
          <li><strong>Beneficios Diuréticos:</strong> La bebida tiene efectos diuréticos que pueden ayudar a eliminar toxinas del cuerpo y mantenerte hidratado.</li>
        </ul>
      </section>
    </div>
  );
};

export default ItemListContainer;
