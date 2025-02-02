import React, { Component } from "react";
import "./item-details.css";
import ErrorButton from "../error-button";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {


  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  };

  render() {
    if (!this.state.item) {
      return <span>Select person from a list</span>;
    }

    const {
      item,
      image,
    } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt="details" />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map((this.props.children), (child, idx) => {
                return React.cloneElement(child, {item})
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
