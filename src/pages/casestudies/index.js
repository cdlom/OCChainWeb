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
import img9 from '../../images/finanzas-menos-es-mas-ideas-890x500_c.jpg';

import img11 from '../../images/Trazabilidad-1024x452.jpg';
import img12 from '../../images/identidad digital.jpg';
import img13 from '../../images/healthcare.jpg';
import img14 from '../../images/Supply-chain-demand-chain.jpg';

 

class Home extends Component {
  render() {
    return (
      <div className="Backg">

        <Container>

          {/*Menú de página*/}
          <MenuBar />

 
 
          <Container>
          <p className="ppppp">
                Case Studies</p>

          </Container>
 

          <div style={  { marginTop: '220px'  }}>
          <Container>
          <Grid stackable>
 
                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img9} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Finantial Services</Header>      
                       <p> 
                       The user personal information and their transactions are nowdays 
                       registered in the banks databases. 
                       </p>
                       <p>
                       The individual has no control over the security of that information. 
                       Authentication and secure data transmission is the mayor issue facing the finance industry.
                       </p>
                       <p>

                      With Blockchain, the individual owns his information by using 
                      the benefits of descentrelizacion.Transaction information will 
                      remain immutable and traceable over time.
                      </p>
                       <p>
                        The individual, also, may transaction with others individuals, 
                        peer to peer, without the need of  a third party.       

                       </p>

                    </Segment> 
                  </Grid.Column>
                </Grid.Row>
             
  

      

                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img12} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Digital Identity</Header>      
                       <p> 
                       Nowdays, there is an issue  with how  way personal information is
                       managed.
                       </p>
                       <p>
                       In recentes news, we could see the infromation leak scandal regarding facebook.
                        Allways identity systems associate personal information with the website, 
                        but this information does not belong to his really owner.
                        </p>
                       <p>
                        Blockchain drives the concept of sovereign self identity. 
                        The data associated with a person, such as name, date of birth,
                         height, weight, biometric data, telephone, email, ID, 
                         are registered in the distributed database, and the person is 
                          the sole owner of this data.                         
                       </p>

                    </Segment> 
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img13} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Healthecare</Header>      
                       <p> Information about patients diseases and consultations are nowdays
                          managed by the healthcare institutions. 
                          </p>
                          <p>
                          Every patient does not have the ability to obtein 
                          that information online. The patient has a medical history 
                          in each clinic in which he is treated. 
                          </p>
                          <p>
                            With blockchain, as a distributed and immutable database, 
                            the patient owns their data and can take them to all
                             healthcare institutions and doctors. 
                          </p>
                          <p>
                             The information will be decrypted by the patient 
                             providing the private key for access.                          
                       </p>

                    </Segment> 
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img14} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Supply Chain</Header>      
                       <p> Several stakeholders are involved in supply chains,
                           documents needs to be completed and payments done. 
                           Every transaction takes significant time. 

                           </p>
                          <p>

                           Also, it's very difficult to track the product involved 
                           during all the chain steps, so it's imposible to detect
                            quality problemas. 
                            This whole process become tedius nowdays.
                            
                            </p>
                          <p>
                           Smart contract on blockchain, help to do payments between 
                           clients and vendors without thir parties. 
                           </p>
                          <p>
                           Also, with smart contracts, all paint point of products 
                           transtacion can be saved in blockchain, 
                           and can be traced to control quality.                         
                       </p>

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
