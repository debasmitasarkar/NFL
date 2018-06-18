import React, { Component } from 'react';

 import Header from '../../components/Header/Header';
 import SignUp from '../../components/SignUp/SignUp';
 import './Register.scss';


class Register extends Component {
   
    render () {
        return (
            <div className='page-container'>
                <Header />
                <SignUp /> 
            </div>
        );
    }
}
export default Register;