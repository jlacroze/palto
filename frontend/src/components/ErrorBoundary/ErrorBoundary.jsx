import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "60px", textAlign: "center", fontFamily: "sans-serif" }}>
          <p>Une erreur est survenue. Veuillez recharger la page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
