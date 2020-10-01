import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";

var schema = yup.object().shape({
    userName: yup.string().required("No username has been entered"),
    passWord: yup.string()
        .required("No password has been entered")
        .min(4, "Password must be a minimum of 4 characters")
});

function LoginForm() {

    var { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(input) {
        console.log("input", input);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="userName" placeholder="user name" ref={register} />

            {errors.userName && <p>{errors.userName.message}</p>}

            <input name="passWord" placeholder="password" ref={register} />

            {errors.passWord && <p>{errors.passWord.message}</p>}

            <button type="submit">Login</button>
        </form> 
    );
}

export default LoginForm;