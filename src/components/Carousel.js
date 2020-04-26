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
                    link: 'https://get-meals-app.now.sh/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'BookNation',
                    subTitle: 'An all in one stop to review books',
                    imgSrc: BookNation,
                    link: 'https://booknation-app.now.sh/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Doctor Who Quiz App',
                    subTitle: 'For all those Whovians out there',
                    imgSrc: DoctorWho,
                    link: 'https://jaggersofia.github.io/Quiz-App/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Trail Finder',
                    subTitle: 'Find the Perfect Trail For You',
                    imgSrc: TrailFinder,
                    link: 'https://jaggersofia.github.io/Trail-Finder/',
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
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;