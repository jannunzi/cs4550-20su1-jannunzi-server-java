'use strict';

const e2 = React.createElement;

class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this 2.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like 2
      </button>
    );
  }
}

const domContainer2 = document.querySelector('#like_button_container2');
ReactDOM.render(e2(LikeButton2), domContainer2);
