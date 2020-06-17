import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>Logo</div>
        <span>Nick's Library!</span>
        <button>+</button>
        <button>Edit</button>
      </header>
    );
  }
}
export default Header;
