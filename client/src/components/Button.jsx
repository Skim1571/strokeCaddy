class Button {
  constructor(props) {
    this.state = {
      property: 'value'
    }
    this.text = { text: "Click Here" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ property: 'value' });
  }

}
export default Button