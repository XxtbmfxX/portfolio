import "../styles/Card.css";

export default function Card({ title, description, imageUrl }) {
  return (
    <div className="Card rounded-lg shadow-lg bg-gray-100 m-4 p-4 flex flex-col justify-between">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover object-center"
      />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  );
}
