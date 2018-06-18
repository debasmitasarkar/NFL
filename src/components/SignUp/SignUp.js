import React,{ Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Footer from '../Footer-SignUpPage/Footer';
import './SignUp.scss';

class SignUp extends Component{
    state = {
        dayObject:{
            label:'Day',
            value:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        },
        monthObject:{
            label:'Month',
            value:['January','Februry','March','April','May','June','July','August','September','October','November','December']
        },
        yearObject:{
            label:'Year',
            value:[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
        },
        whitebutton:true,
        customButtonClicked:false
    }
    deleteInputBox = () =>{
       this.state.customButtonClicked? this.setState({
            customButtonClicked: false
        }):null;
     }
     placeInputBox = () =>{
        this.setState({customButtonClicked: true})
     }
    render(){
        let btn_class = this.state.whitebutton ? "blackButton" : "whiteButton";
        return(
            <div className="container">
                <div className='signUpPage'>
                    <div className='signUpContainer'>
                        <div className='headerDiv'><h1>LET'S GET STARTED</h1></div>
                        <p className='signUpText'>
                            <span>We saw you accross the room and we don't</span>
                            <span>usually do this but...</span>
                        </p>
                        <button className='btn-prepSchool'>
                        <i className="left"></i>
                        <span>Prep School</span>
                        <span></span>
                        </button>
                        <div className='signUpForm'>
                            <div>
                                <label>Sport</label>
                                <input type='text' placeholder='Baseball'/>
                            </div>
                            <div>
                                <label>Position</label>
                                <input type='text' placeholder='Choose your Position'/>
                            </div>
                            <div>
                                <label>High School</label>
                                <input type='text' placeholder='Baseball'/>
                            </div>
                            <div>
                                <label>Birth Date</label>
                                <div className='dropdownContainer'>
                                    <Dropdown dataForOption={this.state.dayObject} />
                                    <Dropdown dataForOption={this.state.monthObject}/>
                                    <Dropdown dataForOption={this.state.yearObject}/>
                                </div>
                            
                            </div>
                            <div className='gender-div'>
                                <label>Gender</label>
                                <div className='genderContainer'>
                                    <button onClick={this.deleteInputBox.bind(this)}>Male</button>
                                    <button onClick={this.deleteInputBox.bind(this)}>Female</button>
                                    <button onClick={this.placeInputBox.bind(this)}>Custom</button>
                                </div>
                                {this.state.customButtonClicked?<input className='custom-gender-input' type='text' placeholder='What pronoun do you prefer?'></input>:null}
                            </div>
                        </div>
                </div>  
                <Footer />
            </div> 
            <div className='onboarding-img'>
                <div className='chat-img'></div>
            </div>
            </div>
            
            
        );
    }
}

export default SignUp;