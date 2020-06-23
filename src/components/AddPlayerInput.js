import React, { Component } from 'react';
//import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './AddPlayerInput.css';
import {Select,Input,Button} from "antd";
const {Option} = Select


class AddPlayerInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      player:'SF'
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addPlayer(name);
      this.setState({ name: '' });
    }
  }
  render() {
    const {name,player} = this.state
    const SubmitForm = ()=>{
      if (name.trim().length > 0){
        this.props.addPlayer(name,player);
        this.setState({name:''})
      }
    }
    const changePlayer = (player)=>{
      this.setState({player})
    }
    return (
      <div className="wrapBox">
        {/*<input
          type="text"
          autoFocus={true}
          className={classnames('form-control', styles.addPlayerInput)}
          placeholder="Type the name of a player"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />*/}
        <Input
          type="text"
          placeholder='Type the name of a player'
          onChange={this.handleChange.bind(this)}
          value={this.state.name}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <Select
          style={{width:200}}
          placeholder="Select a Team"
          defaultValue="SF"
          onChange={changePlayer}
        >
          <Option value="SF">SF</Option>
          <Option value="PG">PG</Option>
        </Select>
        <Button type="primary" style={{marginLeft:20}} onClick={SubmitForm}>Submit</Button>
      </div>
    );
  }



}

AddPlayerInput.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default AddPlayerInput;
