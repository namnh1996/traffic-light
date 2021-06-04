import React, {Component} from 'react';
import './TodoItem.css';
import checkImg from '../images/check.svg';
import checkComplete from '../images/check-complete.svg';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render(){
        //console.log(this.props);
        const {item, onClick} = this.props; //destructring
        let url = checkImg;
        console.log(item);
        if(item.isComplete){
            url = checkComplete;
        }
        let className = 'TodoItem';
        if(item.isComplete){
            className += ' TodoItem-complete';
        }
        return(
            <div onClick={onClick} className={className}>
                <img src={url} width={32}></img>
                <p>{item.title}</p>
            </div>
        );
    }
}
TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string
    }),
    onClick: PropTypes.func
}

export default TodoItem;