import React, { Component } from 'react';

/**
 * Class that represents an item in the container.
 * @extends Component
 */
class Item extends Component {
  /**
   * Constructs the item.
   *
   * @constructor
   * @param {object} props A set of props to attach to this object.
   */
  constructor(props) {
    super(props);
    // Exits will be [1,2] instead of [1,1].
    if (this.props.itemType === 'exit') this.dimensions = [2, 2];
    else this.dimensions = [1, 1];
  }

  /**
   * When the component mounts, update the style after 1ms
   * to allow the Container to render. Additionally, add the
   * event listener to update this component's style on resize.
   */
  componentDidMount() {
    window.setTimeout(this.updateSty, 1);
    window.addEventListener('resize', this.updateSty);
  }

  /**
   * When the component is going to unmount, remove the listener
   * from the window. This is to prevent unnecessary calls to
   * no-longer-existing objects.
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSty);
  }

  /**
   * Update the style of this component. This gets passed into Container,
   * which passes it into Level. Read more about this method there.
   */
  updateSty = () => {
    this.props.updateSty(this);
  };

  /**
   * Rendering method.
   *
   * @returns JSX that represents an item.
   */
  render() {
    if (this.props.itemType === 'lever') {
      const selfState = this.props.selfState;
      const leverSty = Object.assign({}, selfState.sty, selfState.lever, {
        backgroundColor: '',
      });
      const baseSty = Object.assign({}, selfState.sty, selfState.base);
      return (
        <>
          <div
            className={`Item switch ${this.props.color}`}
            style={leverSty}
          ></div>
          <div className='Item base' style={baseSty}></div>
        </>
      );
    } else if (
      this.props.itemType === 'collectible' &&
      this.props.selfState.activated
    ) {
      return <></>;
    } else if (this.props.itemType === 'plate') {
      return (
        <div
          className={`Item plate ${this.props.color}`}
          style={this.props.selfState.sty}
        ></div>
      );
    } else
      return (
        <div
          className={`Item ${this.props.itemType}`}
          style={this.props.selfState.sty}
        ></div>
      );
  }
}

export default Item;
