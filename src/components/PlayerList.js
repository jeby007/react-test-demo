import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerList.css';
//import PlayerListItem from './PlayerListItem';

import {List } from "antd";
import classnames from "classnames";

const paginationConfig = {
  defaultPageSize : 5,
}
class PlayerList extends Component {
  render() {
    const {players,actions} = this.props

    return (
      <div>
        {/*<ul className={styles.playerList}>
          {this.props.players.map((player, index) => {
            return (
                <PlayerListItem
                  key={index}
                  id={index}
                  name={player.name}
                  team={player.team}
                  position={player.position}
                  starred={player.starred}
                  {...this.props.actions}
                />
            );
          })}
        </ul>*/}
      <List
        itemLayout="horizontal"
        dataSource={players}
        pagination={paginationConfig}
        renderItem={(item,index)=>(
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={`${item.team} · ${item.position}`}
            />
            <div className={styles.playerActions}>
              <button
                className={`btn btn-default ${styles.btnAction}`}
                onClick={() => actions.starPlayer(index)}
              >
                <i
                  className={classnames('fa', {
                    'fa-star': item.starred,
                    'fa-star-o': !item.starred,
                  })}
                />
              </button>
              <button
                className={`btn btn-default ${styles.btnAction}`}
                onClick={() => actions.deletePlayer(index)}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </List.Item>
        )}
      >
      </List>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default PlayerList;
