import { connect } from 'react-redux';
import SerieIndexItem from './serie_index_item';
import { updateRating, createRating, updateBody, createBody } from '../../actions/review_actions';
import { receiveSerie } from '../../actions/serie_actions';
import { fetchGenres } from '../../actions/genre_actions';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

const mapDispatchToProps = (dispatch) => ({
  updateRating: (reviewId, rating) => dispatch(updateRating(reviewId, rating)),
  createRating: (serie) => dispatch(createRating(serie)),
  updateReviewBody: (reviewId, body, rating) => dispatch(updateBody(reviewId, body, rating)),
  createReviewBody: (serie) => dispatch(createBody(serie)),
  receiveSerie: (serie) => dispatch(receiveSerie(serie)),
  fetchGenres: () => dispatch(fetchGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerieIndexItem);
