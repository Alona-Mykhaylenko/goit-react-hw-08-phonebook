import PropTypes from "prop-types";

import { connect } from "react-redux";
import { handleChange } from "../../redux/app-actions";
import { getFilterSelector } from "../../redux/contacts-selectors";
import styles from "./filter.module.css";

const Filter = ({ filter, handleChange }) => {
  return (
    <div className={styles.formBox}>
      <label>
        Find contacts by name <br />
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: getFilterSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(handleChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
