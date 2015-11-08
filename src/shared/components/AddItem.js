import React, { PropTypes } from 'react';

export default class AddItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "",
      description: ""
    };
  }

  static propTypes = {
    handleAddItem: PropTypes.func.isRequired
  }

  handleInputChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleInputChangeDesc(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.name.length > 0 && this.state.description.length > 0) {
      this.props.handleAddItem(this.state);
      this.setState({ name: "", description: "" });
    }
    else {
      alert("Please Fill Out All Fields");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset className="form-group">
          <label htmlFor="itemInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="itemInput"
            placeholder="Enter Item Name"
            value={this.state.name}
            onChange={this.handleInputChangeName.bind(this)} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="itemDescription">Description</label>
          <textarea
            className="form-control static-size"
            id="itemDescription"
            rows="4"
            value={this.state.description}
            onChange={this.handleInputChangeDesc.bind(this)}>
          </textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
