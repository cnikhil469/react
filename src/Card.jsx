function Card(props) {
    return (
      <div className="card">
        <img src={props.url} alt="image text" />
        <h2 className="title">{props.title}</h2>
        <a href={props.thumbnailUrl} className="button">submit</a>
      </div>
    );
  }

  export default Card