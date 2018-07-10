import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { setDifficulty } from '../../../../store/actions/actions';

const DifficultyList = ({ difficultySetting, setDifficulty }) => {
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
  return difficulties.map((difficulty, i) => (
    <Menu.Item
      key={difficulty}
      name={difficulty}
      active={difficultySetting === difficulty}
      onClick={() => setDifficulty(difficulty, 0)}
    />
  ));
};

const mapStateToProps = ({ view: { difficulty } }) => ({ difficultySetting: difficulty });
const mapDispatchToProps = dispatch => ({
  setDifficulty: (difficulty, currentSlide) => dispatch(setDifficulty(difficulty, currentSlide)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DifficultyList);