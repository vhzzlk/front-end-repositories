import './styles.css';

function Card(params) {
  return (
    <div className="card">
      <img className="card-image" src={params.src} alt={params.alt} />
      <div className="card-content">
        <h2 className="card-title">{params.title}</h2>
        <p className="card-description">{params.description}</p>
        <p className="card-price">{params.price}</p>
      </div>
    </div>
  );
}
export default Card;
