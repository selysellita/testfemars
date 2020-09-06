import React, { Component } from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import { FaBars, FaPlus } from 'react-icons/fa';

class Header extends Component {
    state = { 
        showMenu:false
    }

    listMenu=[1,2,3,4]

    menuTengah=()=>{
        return this.listMenu.map((val,index)=>{
            return(
                <div key={index} className="daftarmenu">
                    
                </div>
            )
        })
    }


    render() { 
        return ( 
            <div className="containerHeader">
                <div className="header">
                    <div className="menukiri">
                            <div style={{width:'100px', height:'25px', background:'#97daf7'}} className="line"></div>
                    </div>
                    <div className="menutengah">
                        {
                            this.menuTengah()
                        }
                        {/* <div className="daftarmenu">
                            {val}
                        </div> */}
                    </div>
                    <div className="menukanan"></div>

                    {
                        this.state.showMenu?
                        <div className="burgermenu" onClick={()=>{
                            this.setState({showMenu:!this.state.showMenu})
                        }}>
                            <FaPlus style={{transform:'rotate(45deg)'}}/>
                        </div>
                        :
                        <div className="burgermenu" onClick={()=>{
                            this.setState({showMenu:!this.state.showMenu})
                        }}>
                            <FaBars/>
                        </div>
                    }
                    {
                    this.state.showMenu?
                    <div className='menuList'>
                        <NavLink onClick={()=>{this.setState({showMenu:false})}} to='#'><div style={{width:'15vw'}} className="line"></div></NavLink>
                        <NavLink onClick={()=>{this.setState({showMenu:false})}} to='#'><div style={{width:'15vw'}} className="line"></div></NavLink>
                        <NavLink onClick={()=>{this.setState({showMenu:false})}} to='#'><div style={{width:'15vw'}} className="line"></div></NavLink>
                        <NavLink onClick={()=>{this.setState({showMenu:false})}} to='#'><div style={{width:'15vw'}} className="line"></div></NavLink>
                    </div>
                    :
                    null
                }
                </div>
            </div>
        );
    }
}
 
export default Header;