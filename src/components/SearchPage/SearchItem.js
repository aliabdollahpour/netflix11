import React from 'react';
import {Link} from 'react-router-dom'

class SearchItem extends React.Component {

  handleClick() {
    this
      .props
      .actions
      .fetchTheMovie(this.props.movie.id)
    this
      .props
      .actions
      .fetchCast(this.props.movie.id);
  }
  render() {

    return (

      <li >

        <div className="search-tile">
          <img src={`http://image.tmdb.org/t/p/w300//${this.props.movie.backdrop_path}`}/>
          <div className=" photo-overlay">

            <div className="tile-text-container">
              <div className="playbtn-container">

                <Link
                  className="playBtn "
                  to='/movie'
                  onClick={this
                  .handleClick
                  .bind(this)}>▶</Link>

              </div>
              <p className="search-tile-title">
                {this.props.movie.title}</p>
              <p className="tile-desc">
                {this.props.movie.overview}</p>
            </div>
            <div className="tile-btn-container">
              <button className="addListBtn">+</button>
            </div>
          </div>
        </div>

      </li>
    )
  }

}

export default SearchItem;