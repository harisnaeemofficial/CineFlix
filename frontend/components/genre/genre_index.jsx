import React from 'react';
import { Link, withRouter } from 'react-router';
import GenreIndexItem from './genre_index_item';
import { fetchGenres } from '../../actions/genre_actions';

const PAGE = 3;

class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
   }

  render() {
    const favorites = (
      [<ul key={0} className="genre-carousel-row group">
        <li className="genre-title">My List</li>
        <li className="serie-index-item group">
          <GenreIndexItem
            genre={ this.props.favorites }
            addSerieToMyList={ this.props.createMyListItem }
            removeSerieFromMyList={ this.props.removeMyListItem }
            favorites={ this.props.favorites }>
          </GenreIndexItem>
        </li>
      </ul>]);
    const genreIndexItems = this.props.genres.map((genre, id) => {
      return (
        <ul key={genre.id} className="genre-carousel-row group">
          <li className="genre-title">{genre.name}</li>
          <li className="serie-index-item group">
            <GenreIndexItem
              genre={genre}
              addSerieToMyList={this.props.createMyListItem}
              removeSerieFromMyList={ this.props.removeMyListItem }
              favorites={ this.props.favorites }
            />
          </li>
        </ul>
      );
    });
    return (
      <div className='genre-index group'>
        { favorites.concat(genreIndexItems) }
      </div>
    );
  }
}

export default withRouter(GenreIndex);
