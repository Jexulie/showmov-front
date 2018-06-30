import React from 'react';

const Main = props => {
    let content;
    if(props.curMain === null){
      content = (
        <div className="empty">
          <p className="empty-text">Select A Movie From List...</p>
        </div>
      )
    }else{
      var stars = props.curMain.stars.map(s => (<li key={Math.floor(Math.random()*100)}>{s}</li>))
      var genre = props.curMain.genre.map(g => (<li key={Math.floor(Math.random()*100)}>{g}</li>))
      content = (
        <div className="mainwrapper container">
            <div className="card image">
                <img src={props.curMain.image} alt="movie_image"/>
            </div>
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title">{props.curMain.title}</span>
                  <p className="movie-info">{props.curMain.info}</p>
                  <div className="card-action">
                    <a className="waves-effect waves-light btn amber darken-1 trailer"  href=  {props.curMain.video} target="_blank">
                      <i className="material-icons medium">videocam</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="info-wrapper">
                  <div className="movie_info">
                    <div className="stars">
                      <label>Stars</label>
                      <ul>
                        {stars}
                      </ul>
                    </div>
                    <div className="director">
                      <label>Director</label>
                      <p>{props.curMain.director}</p>
                    </div>
                  </div>
                  <div className="movie_info2">
                    <div className="genre">
                      <label>Genre</label>
                      <ul>
                        {genre}
                      </ul>
                    </div>
                    <div className="score">
                      <label>Score</label>
                      {/* Add a score based stars */}
                      <p>{props.curMain.score === "" ? "Not Rated Yet": props.curMain.score}  </p>
                    </div>
                    <div className="time">
                      <label>Time</label>
                      <p>{props.curMain.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }
    return (
        <div className="Main">
          {content}
        </div>
      );
}

export default Main;