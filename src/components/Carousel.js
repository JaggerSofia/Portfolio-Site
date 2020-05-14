import React from 'react';

import Card from '../components/Card';

import DoctorWho from '../assets/images/Doctor-Who.png';
import TrailFinder from '../assets/images/Trail-Finder.png';
import GetMeals from '../assets/images/Get-Meals.png';
import BookNation from '../assets/images/BookNation.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Get Meals',
                    subTitle: 'Never go hungry',
                    imgSrc: GetMeals,
                    description: 'A platform to find and share locations serving food and meals to those in need.',
                    tech: 'React, JSX, JavaScript, CSS, NodeJS, ExpressJS, PostgresSQL',
                    link: 'https://get-meals-app.now.sh/',
                    repoFront: 'https://github.com/zzboncak/get-meals-client',
                    selected: false
                },
                {
                    id: 1,
                    title: 'BookNation',
                    subTitle: 'An all in one stop to review books',
                    imgSrc: BookNation,
                    description: 'This app allows the user to rate their favorite books.',
                    tech: 'React, JSX, JavaScript, CSS, NodeJS, ExpressJS, PostgreSQL',
                    link: 'https://booknation-app.now.sh/',
                    repoFront: 'https://github.com/JaggerSofia/booknation-client',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Doctor Who Quiz App',
                    subTitle: 'For all those Whovians out there',
                    imgSrc: DoctorWho,
                    description: 'This is a quiz regarding the iconic British television show Doctor Who spanning all 57 years of it\'s runtime on BBC.',
                    tech: 'HTML, CSS, JavaScript, jQuery',
                    link: 'https://jaggersofia.github.io/Quiz-App/',
                    repoFront: 'https://github.com/JaggerSofia/Quiz-App',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Trail Finder',
                    subTitle: 'Find the Perfect Trail For You',
                    imgSrc: TrailFinder,
                    description: 'This app allows the user to search for hiking trails based on a geological search.',
                    tech: 'HTML, CSS, JavaScript, jQuery',
                    link: 'https://jaggersofia.github.io/Trail-Finder/',
                    repoFront: 'https://github.com/JaggerSofia/Trail-Finder',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;