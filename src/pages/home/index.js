import React, { Component } from 'react';
import { Container, Form, Header, Button, Icon, Grid, Segment, Image, Label } from 'semantic-ui-react';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { MenuBar, Footer } from '../../components';
import './Home.css';
import img1 from '../../images/ico-icon.png';
import img2 from '../../images/walletr-icon.png';
import img3 from '../../images/crypto-icon.png';
import img4 from '../../images/more-icon.png';
 


class Home extends Component {
  render() {
    return (
      <div className="Backg">

        <Container textAlign="center">

          {/*Menú de página*/}
          <MenuBar />

          <div style={{ marginTop: '50px' }}>
            <Container textAlign="justified" fluid >
              <Header  inverted  color="teal" size="huge">The future with Blockchain</Header>
             
                 <p style={{color: 'white'} } >
                 We use blockchain technology to make more effience the critical bussines process of organizations. 
                 </p>

              </Container>
          </div>





          <div style={{ marginTop: '80px' }}>
            <Container textAlign="justified" fluid >
              <Grid stackable>
                <Grid.Row columns={4}>
                  <Grid.Column>
                 
                  <Segment size="big"><Image verticalAlign="middle" src={img1} />

                      <Header as='h4'>Blockchain Consulting</Header>
                            <p style={{color: 'black'}}>Consulting and Architecture Design of all Bussines Cases. It is very important to understand the pros and cons of blockchain and all its implementaions, public and private </p>
            
                            <Button basic color='blue'  onClick={() => { document.location.href = "/consulting"; }} content='Read More' />

                      </Segment>
                  </Grid.Column>

                  <Grid.Column>
                    <Segment size="big"><Image verticalAlign="middle" src={img2} />
                      <Header as='h4'>Assestment</Header>
                      <p style={{color: 'black'}} > A Blockchain Solution Design for your Company</p>
                      <Button basic color='blue'  onClick={() => { document.location.href = "/assestment"; }} content='Read More' />
                    </Segment>
                  </Grid.Column>

                  
                  <Grid.Column>
                    <Segment size="big"><Image verticalAlign="middle" src={img2} />
                      <Header as='h4'>Smart Contract Development</Header>
                      <p style={{color: 'black'}}> We Create Smart Contracts with our Development Team</p>
                      <Button basic color='blue'  onClick={() => { document.location.href = "/smartcontracts"; }} content='Read More' />
                    </Segment>
                  </Grid.Column>

                  <Grid.Column>
                    <Segment size="big"><Image verticalAlign="middle" src={img3} />
                      <Header as='h4'>dApps Development</Header>
                      <p style={{color: 'black'}}> The new way of thinking aplications</p>
                      <Button basic color='blue'  onClick={() => { document.location.href = "/dapps"; }} content='Read More' />
                    </Segment>
                  </Grid.Column>
                 
                </Grid.Row>
              </Grid>
            </Container>
          </div>
          {/*Botón de scroll up*/}
          <ScrollUpButton EasingType="linear" ShowAtPosition={20} />

        </Container>

        {/*Pié de página*/}
        <Footer />

      </div>
    );
  }
}

export default Home;
