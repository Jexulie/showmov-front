import React from 'react';

const List = props => {
    let movies = props.movieList.map(m => (
      <li className="collection-item avatar list-item" onClick={() => props.selected(m._id, 'M')} key={m._id}>
        <img src={m.image} alt="movie_img" className="circle"/>
        <span className="title"><p>{m.title}</p></span>
      </li>
    ))

    let comingsoons = props.comingsoonList.map(c => (
      <li className="collection-item avatar list-item" onClick={() => props.selected(c._id, 'C')} key={c._id}>
        <img src={c.image} alt="movie_img" className="circle"/>
        <span className="title"><p>{c.title}</p></span>
      </li>
    ))

    return (
        <div className="List">
          <ul className="collection">
            {props.isMovies === true ? movies : comingsoons}
          </ul>
        </div>
      );
}

export default List;
