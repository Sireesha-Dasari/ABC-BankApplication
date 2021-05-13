import './App.css';
import React, { Component, Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className="main" style={{ backgroundImage: `url("https://tse4.mm.bing.net/th/id/OIP.ik239fmPuCzYjX546nnrHQHaES?pid=ImgDet&rs=1")` }}>
                <Fragment>
                    <Card className="card1">
                        
                        <Card.ImgOverlay>
                            <Card.Title style={{ color: 'Yellow', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '50px' }}>Welcome to ABC Retail Bank!</Card.Title>
                        </Card.ImgOverlay>
                        
                     </Card>
                    
                    <br />
                   
                </Fragment>
            </div>
        )
    }
}
export default Home;