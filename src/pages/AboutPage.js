import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Victori. I'm a full stack engineer with experience in HTML, CSS, JavaScrip, React, NodeJS, PostgreSQL, and ExpressJS.</p>

                <p>I always love learing new things, so I will continue to develop my skills in React, as well as other languages that I have yet to touch.</p>

                <p>My most recent project is Get Meals, a public source to find free food in your area. The app was born in the midst of the COVID-19 out of a want to help people easily find places where they can get free meals, the location of food banks. You can take a look at it <a href="https://get-meals-app.now.sh/" target="_blank" rel="noopener noreferrer">here</a>, or on the home page.</p>

                <p>I love reading in my spare time, and even listening to books if I don't have time to sit down and read. I love attending movies in theaters. I have a cat named Grimmjow, though I call her Grimmy. I also knit on occasion.</p>
            </Content>
        </div>
    )
}

export default AboutPage;