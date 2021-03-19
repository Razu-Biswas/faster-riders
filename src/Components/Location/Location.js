import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';


const Location = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser]  = useContext(UserContext);
    const onSubmit = data => {
        console.log('from submit', data)

    };
  
    console.log(watch("example"));

    return (
      <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name" />
        {errors.name && <span className="error">Name is required</span>}

        <input name="email" defaultValue={loggedInUser.email}  ref={register({ required: true })} placeholder="Your email" />
        {errors.email && <span className="error">Email is required</span>}

        <input name="address" ref={register({ required: true })} placeholder="Your address" />
        {errors.address && <span className="error">address is required</span>}

        <input name="phone" ref={register({ required: true })} placeholder="Your phone no" />
        {errors.phone && <span className="error">phone no is required</span>}


        <input type="submit" />
      </form>
    );
};

export default Location;