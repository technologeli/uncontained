import React, { Component } from 'react';

/**
 * Class that represents an opening in the container.
 * @extends Component
 */
class Opening extends Component {

  /**
   * When the component mounts, update the style after 10ms
   * to allow the Container to render. Additionally, add the
   * event listener to update this component's style on resize.
   */
  componentDidMount() {
    window.setTimeout(this.updateSty, 11);
    window.addEventListener('resize', this.updateSty);
  }

  /**
   * When the component is going to unount, remove the listener
   * from the window. This is to prevent unnecessary calls to
   * no-longer-existing objects.
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSty);
  }

  updateSty = () => {
    this.props.updateSty(this);
  }

  /**
   * Rendering method.
   * 
   * @returns a <div> that represents an opening in a Container.
   */
  render() {
    return <div className='Opening' style={this.props.selfState.sty}></div>;
  }
}

export default Opening;