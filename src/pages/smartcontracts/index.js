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
               
                Smart Contract Development</p>

          </Container>
         
 

          <div style={{ marginTop: '250px' } }>
        
                    <Segment size="huge" ><Image verticalAlign="middle"  />
                      <Header as='h4'>Smart Contracts</Header>
                      <p as='h4'>
                      Smart Contracts are applications that run over the blockchain 

                      Once we detecte the benefits of  blockchain on a business process, 
                      we develop these smart contracts to reach the goals. 
                      
                      In this way, we make possible the elimination of any third party 
                      on that business process and therefore, the reduction of costs.

                      We have a large team of developers on ethereum and hyperledger.

                        </p>
                   
                    </Segment>
                   
          </div>

          <div style={{ marginTop: '50px' } }>
        
        <Segment size="huge" ><Image verticalAlign="middle"  />
          <Header as='h4'>More information</Header>
          <p>
          A computer program code that is capable of facilitating, executing, and enforcing the negotiation or performance of an agreement  using blockchain technology.

The entire process is automated can act as a complement, or substitute, for legal contracts, where the terms of the smart contract are recorded in a computer language as a set of instructions.            </p>
       
        </Segment>
       
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
