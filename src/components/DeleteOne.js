import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteOneAction } from "../actions/deleteOne";

export class DeleteOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  componentWillMount() {
    this.deleteOne = this.deleteOne.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteOne() {
    this.props.deleteOne(this.state.num);
  }

  handleChange(e) {
    this.setState({
      num: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Delete cat :(</h2>
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="enter id here"
        />
        <button id="deleteBtn" onClick={this.deleteOne}>
          Delete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}
export const mapDispatchToProps = (dispatch) => {
  return {
    deleteOne: id => dispatch(deleteOneAction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteOne);
