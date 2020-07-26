import React, {useState} from 'react';
import {connect} from "react-redux";
import Form from './Form'
import {signUp} from '../actions/userAction'
import {emailValidation} from '../utils/validators'
import './Style.css'

const Signup = (props) => {
    const [user, setState] = useState({
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            conFpassword:"",
            address:"",
            city:"",
            zip:"",
            state:"",
            isMismatch:false,
            isValidate:false
        }
    );
    const [submitted, setSubmitted] = useState(false);
    //
    const onChangeHandle = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(name==='email'){
            let isValid= emailValidation(e.target.value);
            setState({...user,[name]: value,isValidate:isValid});
        }else{
            setState({...user,[name]: value});
        }
    };
    //
    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if(user.password && user.conFpassword && (user.password !== user.conFpassword)){
            setState({...user,isMismatch:true});
            return
        }
        setState({...user,isMismatch:false});
        if(user
            && user.firstname
            && user.lastname
            && user.email
            && user.password
            && user.conFpassword
            && user.address
            && user.city
            && user.zip
            && user.state
            && user.isValidate
        ){
            const {isMismatch,isValidate,...data}=user;
            props.signUp(data).then(success=>{
                alert("You have successfully submitted !!!")
            },error=>{
                alert("Server Error !!!")
            })
        }

    };

    return (
        <React.Fragment>
            <Form
                user={user}
                submitted={submitted}
                onChange={onChangeHandle}
                onClick={submitHandler}/>
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {
        userInfo: state.user
    }
}
const mapDispatchToProps = dispatch => ({
    signUp(data) {
        return dispatch(signUp(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);