
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';



class App extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        title: 'Victoria Moore',
        headerLinks: [
          { title: 'Home', path: '/'},
          { title: 'About', path: '/about'},
        ],
        home: {
          title: 'Be Relentless', 
          subTitle: 'Projects that make a difference',
          text: 'Checkout my projects below'
        },
        about: {
          title: 'About Me',
        },
      }
  }

  // getInitialState () {
  //   return {
  //     navExpanded: false
  //   }
  // }

  // setNavExpanded(expanded) {
  //   this.setState({ navExpanded: expanded });
  // }

  // closeNav() {
  //   this.setState({ navExpanded: false });
  // }

  // setExpanded(e) {
  //   const [expanded, setExpanded] = useState(false);
  // }

  render(){
    
    return (
      <Router> 
        <Container className='p-0' fluid={true}>
          
          <Navbar /*expanded={expanded}*/ className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Victoria Moore</Navbar.Brand>
          
            <Navbar.Toggle
              // onClick={() => setExpanded(expanded ? false : "expanded")}
              className='border-0'
              aria-controls='navbar-toggle' />

            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link /*onClick={() => setExpanded(false)}*/ className='nav-link' to='/'>Home</Link>
                <Link /*onClick={() => setExpanded(false)}*/ className='nav-link' to='/about'>About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/'
            exact
            render={() =>
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
            
            />} 
          />
          <Route
            path='/about'
            render={() => 
              <AboutPage
                title={this.state.about.title}
            />} 
          />

          <Footer />

        </Container>

      </Router>
    );
  }
  
}

export default App;
