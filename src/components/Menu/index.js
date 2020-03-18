import React from 'react';
import { Dropdown, Menu, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../../images/overchainlogo.png';
import styles from '../../pages/home/Home.css';

const MenuBar = () => {
  return (
    <Menu stackable secondary>




      <Menu.Item>
        <Link to="/"><Image size="small" src={logo} style={{ marginRight: '1.5em' }} /></Link>
      </Menu.Item>
      <Menu.Menu position="right"  >

<Menu.Item><Link to="/" className="menublanco" >Home</Link></Menu.Item>
<Menu.Item><Link to="/technology" className="menublanco" >Technologies</Link></Menu.Item>

<Dropdown item text="Services" style={{color: 'white', fontSize: '1.2rem', fontStyle: 'Ubuntu'}}>

  <Dropdown.Menu>
    <Dropdown.Item><Link to="/consulting" >Blockchain Consulting</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/assestment">Assestment</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/smartcontracts">Smart Contract</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/dapps">dApps</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> 

<Menu.Item><Link to="/casestudies" className="menublanco" >Case Studies</Link></Menu.Item>
<Menu.Item><Link to="/QuieroColaborar" className="menublanco" >Contact Us</Link></Menu.Item>


</Menu.Menu>

     
    </Menu>
  )
}

export default MenuBar;