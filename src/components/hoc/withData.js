import React, { Component } from "react";
import Loader from "../loader";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      getData()
        .then((data) => this.setState({ data }))
        .catch(this.onError);
    }

    onError = () => {
      this.setState({ error: true, loading: false });
    };

    render() {
      const { data, loading, error } = this.state;

      if (!data) {
        return <Loader />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
