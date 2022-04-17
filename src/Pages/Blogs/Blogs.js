import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Blogs Site</h1>
            <h2>Difference Between Authorization and authentication.</h2>
            <h3>Authorization</h3>
            <p>
                1. While in this process, users or persons are validated.<br />
                2. While this process is done after the authentication process.<br />
                3. While it needs user's privilege or security levels.<br />
                4. While it determines What permission do user have?<br />
                5. While in authorization process, person's or user's authorities are checked for accessing the resources.
            </p>
            <h3>Authentication</h3>
            <p>
                1. In authentication process, users or persons are verified.<br />
                2. It is done before the authorization process.<br />
                3. It needs usually user's login details.<br />
                4. Authentication determines whether the person is user or not.<br />
                5. In authentication process, the identity of users are checked for providing the access to the system.
            </p>
            <h2>Why are you using firebase?What other option do you have to implement authentication?</h2>
            <p>
                Firebase is a complete package of products that allows to build web and mobile apps, improve the app quality and help your clients grow their business. Firebase is made with a developer in mind to solve all the issues they might face when making an app. It's easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.
            </p>
            <p>
                If we have a need to expose our API's outside of our system like third party app or even to access it from mobile apps we end up in two common ways to share the user information.Via API-token which is same as JWT token, where the token will be send via Authorization header which will get handled at API gateway to authenticate the user.And the other option is via Open Authentication(OAuth),OAuth is a protocol that allows an application to authenticate against server as a user.  The client then uses the token to access the resource on behalf of that user.
            </p>
            <h2>What other services does firebase provide other than authentication?</h2>
            <p>
                This Firebase Realtime Database URL is accessible without authentication. If the database contains sensitive information it's recommended to restrict access to this database.
            </p>
        </div>
    );
};

export default Blogs;