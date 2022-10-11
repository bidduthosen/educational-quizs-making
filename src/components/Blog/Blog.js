import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <Container>
            <div className='blog-container'>
                <h1>Important question!</h1>
            <div>
                <h3><strong>Question 1:</strong> What is the purpose of the react router?</h3>
                <p><strong>Ans: </strong>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div>
                <h3><strong>Question 2:</strong> How does context API works?</h3>
                <p><strong>Ans: </strong>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div>
                <h3><strong>Question 3:</strong> How does works hook usehref in react router?</h3>
                <p><strong>Ans: </strong>useHref - The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. useResolvedPath - This hook resolves the pathname of the location in the given to value against the pathname of the current location. This is useful when building links from relative values.</p>
            </div>
        </div>
        </Container>
    );
};

export default Blog;