import React from 'react';
import PropTypes from 'prop-types';

export class ScrollDrag extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      isScrolling: false,
      clientY: 0,
      scrollY: 0,
    };
  }
  onMouseDown = e => {
    this.setState({ ...this.state, isScrolling: true, 
     clientY: e.clientY });
  };
  onMouseUp = () => {
    this.setState({ ...this.state, isScrolling: false });
  };
  onMouseMove = e => {
    const { clientY, scrollY } = this.state;
    if (this.state.isScrolling) {
      this.ref.current.scrollLeft = scrollY + e.clientX - clientY;
      this.state.scrollX = scrollY + e.clientY - clientY;
      this.state.clientY = e.clientY;
    }
  };
  render() {
    const { ref, rootClass } = this.props;
    return (
      <div
        ref={ref}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        className={rootClass}
      >
        {React.Children.map(this.props.children, child =>
            React.Children.only(child))}
      </div>
    );
  }
}
ScrollDrag.defaultProps = {
  ref: { current: {} },
  rootClass: '',
};
ScrollDrag.propTypes = {
  ref: PropTypes.object,
  rootClass: PropTypes.string,
  children: PropTypes.string,
};
export default ScrollDrag;