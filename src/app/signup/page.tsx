import React from 'react';

const SignUpPage = () => {
    return (
        <div>
            <form className=''>
                <fieldset className="fieldset rounded-box p-4">
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input w-md" placeholder="Name"/>

                    <label className="label">ImageUrl</label>
                    <input name='image' type="url" className="input w-md" placeholder="Image" />

                    <label className="label">Email</label>
                    <input name='emil' type="email" className="input w-md" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input w-md" placeholder="Password" />

                    <button className="btn btn-neutral mt-4 w-md">Sign Up</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;