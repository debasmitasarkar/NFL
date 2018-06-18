import React,{ Component } from 'react';


import './Header.scss';

class Header extends Component{
    render(){
        return(
            <div className='header'>
                <span className='ballpark'><span>B A L L P R K</span></span>
                <button className='btn-logout'>LOGOUT</button>
            </div>
        );
    }
}

export default Header;