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
               
                Assestment Services</p>

          </Container>
         
 

          <div style={{ marginTop: '250px' } }>
        
                    <Segment size="huge" ><Image verticalAlign="middle"  />
                      <Header as='h4'>Assestment Services</Header>
                      <p as='h4'>
                      Work Sessions, on site or remote, to explain what blockchain is,
                      benefits and also to receive information about our customer's business processes. 
                      We detect pain points and explain how blockchain can help. As delivery document 
                      we provide architecture document, plan and budget for the project.
 
                        Customers use this services when they want to understand 
                        how much money to invest to solve the pain points. 
                        </p>
                   
                    </Segment>
                   
          </div>

          <div style={{ marginTop: '50px' } }>
        
        <Segment size="huge" ><Image verticalAlign="middle"  />
          <Header as='h4'>More information</Header>
          <p>
          Blockchain technology enables distributed public ledgers that hold immutable data in a secure and encrypted way and ensure that transactions can never be altered. While Bitcoin and other cryptocurrencies are the most popular examples of blockchain usage, this “distributed ledger technology” (DLT) is finding a broad range of uses. Data storage, financial transactions, real estate, asset management and many more uses are being explored.
            </p>
       
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
