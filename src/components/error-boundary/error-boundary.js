import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <ErrorIndicator /> : this.props.children;
  }
}
