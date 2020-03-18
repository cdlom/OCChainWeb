import React, { Component } from 'react';
import { Container, Header, Grid, Segment, Image } from 'semantic-ui-react';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { MenuBar, Footer } from '../../components';
import '../../pages/home/Home.css';
import img1 from '../../images/ico-icon.png';
import img2 from '../../images/walletr-icon.png';
import img3 from '../../images/crypto-icon.png';
import img4 from '../../images/more-icon.png';
import img5 from '../../images/brainstorming.png';
import img6 from '../../images/technologies-img1.png';
import img7 from '../../images/languages-images1.png';
import img8 from '../../images/framework-and-protocols-image.png';



 

class Home extends Component {
  render() {
    return (
      <div className="Backg">

        <Container>

          {/*Menú de página*/}
          <MenuBar />

 
 
          <Container>
          <p className="ppppp">
                Blockchain Technologies</p>

          </Container>
 

          <div style={  { marginTop: '220px'  }}>
          <Container>
          <Grid stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img5} />
                       
                         
                  </Grid.Column>

                  <Grid.Column>
                         
                  <Segment>

                      <Header textAlign="center">Focus on Creativity</Header>
                       
                       <p> Helping to materialize our customer's 
                           ideas using blockchain technologies 
                           we help them to get their bussiness 
                           more efficients and cost less. 
                           Througt an agile process which focuses on their ideas, 
                           we apply new blockchain technologies to solve problems.                          
                       </p>
            
                       
                    </Segment>  
                             
                        
                  </Grid.Column>
                
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                    <Segment>

                        <Header textAlign="left">Technologies</Header>
 
                            <p> We use Ethereum and Hyperledger as our technologies. Ethereum is the most stable iteration of the technology used in blockchain so far and Hyperledger is an initiative by the Linux Foundation that is essentially exploring the possibilities that blockchain development technology can have on industrial processes
                          
                            </p>
 
                      </Segment>  
                       
                         
                  </Grid.Column>
                  <Grid.Column>               
                         <Segment>

                                <Image  src={img6} />            
                         </Segment>  
                  </Grid.Column>
                
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                    <Segment>

                            <Image  src={img7} />
                     
 
                      </Segment>  
                       
                         
                  </Grid.Column>
                  <Grid.Column>               
                         <Segment>
                         <Header textAlign="left">Technologies</Header>
 
                              <p> We use Ethereum and Hyperledger as our technologies. Ethereum is the most stable iteration of the technology used in blockchain so far and Hyperledger is an initiative by the Linux Foundation that is essentially exploring the possibilities that blockchain development technology can have on industrial processes

                              </p>
                                            
                         </Segment>  
                  </Grid.Column>
                
                </Grid.Row>


                <Grid.Row columns={2}>

                  <Grid.Column>               
                         <Segment>
                         <Header textAlign="left">Technologies</Header>
 
                              <p> We use Ethereum and Hyperledger as our technologies. Ethereum is the most stable iteration of the technology used in blockchain so far and Hyperledger is an initiative by the Linux Foundation that is essentially exploring the possibilities that blockchain development technology can have on industrial processes

                              </p>
                                            
                         </Segment>  
                  </Grid.Column>
                
                  <Grid.Column>
                    <Segment>

                            <Image  src={img8} />
                     
 
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
