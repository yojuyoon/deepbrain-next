/* eslint-disable react/destructuring-assignment */
import { Component } from "react";
import Router from "next/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleButtonClick = () => {
    Router.push("/list");
    Router.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative" style={{ margin: "60px auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              style={{
                textAlign: "center",
                fontSize: "18px",
                cursor: "pointer",
              }}
              href="/"
            >
              메인으로 이동하기
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
