import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    state = {  }

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
                            
                    </div>
                    <div className="menutengah">
                        {
                            this.menuTengah()
                        }
                        {/* <div className="daftarmenu">
                            {val}
                        </div> */}
                    </div>
                    <div className="menukanan">
                        <div className="otentifikasi">
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;