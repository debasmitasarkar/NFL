import React,{ Component } from 'react';

import './Dropdown.scss';
class Dropdown extends Component{
    
    createOptions = () => {
        let optionArray = this.props.dataForOption.value;
        let optionlist=optionArray.map(function(option){
            return <option value={option}>{option}</option>;
          })
        return optionlist
      }
    render(){
        return(
            <div className="search_categories">
                <div className="select">
                    <select className='signup-calender-dropdown'>
                        <option value="hide">{this.props.dataForOption.label}</option>
                        {this.createOptions()}
                    </select>
            </div>
        </div>
        );
    }
}

export default Dropdown;