import React, { Component } from 'react';
import './home.css'
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";

class Home extends Component {
    state = { 

    }

    subcon=[1,2,3,4]
    
    renderSubcon1=()=>{
        return this.subcon.map((val)=>{
            return(
                <div className="contentSubcon1">
                    <div className='iconSubcon1'></div>
                    {/* <div className="headerSubcon1"></div> */}
                    <div className="line" style={{width:'15vw'}}></div> 
                    <div className="line" style={{width:'18vw', background:'#97d9f8'}}></div>
                    <div className="line" style={{width:'18vw', background:'#97d9f8'}}></div>
                    <div className="line" style={{width:'12vw', background:'#97d9f8'}}></div>
                    
                </div>
            )
        })
    }

    renderSubcon2=()=>{
        return(
            <div className="contentSubcon2">                    
                <div className="line" style={{width:'200px', background:'#40bcf2'}}></div> <br/>
                <div className="line" style={{width:'60vw', background:'#97d9f8'}}></div>
                <div className="line" style={{width:'60vw', background:'#97d9f8'}}></div>
                <div className="line" style={{width:'40vw', background:'#97d9f8'}}></div>
            </div>
        )    
    }
    
    subcontent3=[1,2,3,4,5,6]
    renderSubcontentSubcon3=()=>{
        return this.subcontent3.map((val)=>{
            return(
                <div className='isiSubcontentSubcon3'>
                    <div className="line" style={{width:'100px', background:'#7fd2f5'}}></div>
                    <div className="line" style={{width:'23vw', background:'#afe3f9'}}></div>
                    <div className="line" style={{width:'23vw', background:'#afe3f9'}}></div>
                    <div className="line" style={{width:'15vw', background:'#afe3f9'}}></div>
                </div>

            )
        })
    }

    subcon4=[1,2,3]

    contentSubcon4=()=>{
        return this.subcon4.map((val)=>{
            return(
                <div className="divSubcon4">
                    <div className="line" style={{width:'100%', height:'200px', marginBottom:'20px', backgroundColor:'#70cbf7'}}></div>
                    <div className="line" style={{backgroundColor:'#92dbf8', width:'100%'}}></div>
                    <div className="line" style={{backgroundColor:'#92dbf8', width:'100%'}}></div>
                    <div className="line" style={{backgroundColor:'#92dbf8', width:'100%'}}></div>
                    <div className="line" style={{backgroundColor:'#92dbf8', width:'22%'}}></div>
                </div>
            )
        })
    }

    render() { 
        return ( 
            <div className="containerHome">
                <div className="jumbotron">
                    <div className="line" style={{width:'300px'}} ></div>
                    <div className="line" style={{width:'300px'}} ></div>
                    <div className="line" style={{width:'200px'}} ></div>
                </div>

                <div className="subcon1">
                    {this.renderSubcon1()}
                </div>

                <div className="subcon2">
                    <div className="slide" style={{textAlign:'left'}}> <FaAngleLeft/> </div>
                    {this.renderSubcon2()}
                    <div className="slide"> <FaAngleRight/></div>
                </div>

                <div className="subcon3">
                    <div className="line" style={{width:'200px'}}></div> <br/>
                    <div className="contentSubcon3">
                        <div className="subcontentSubcon3">
                            {this.renderSubcontentSubcon3()}
                        </div>
                        <div className="jumbotronSubcon3"></div>
                    </div>
                </div>

                <div className="subcon4">
                    <div className="line" style={{width:'200px'}}></div> <br/>
                    <div className="contentSubcon4">
                        {this.contentSubcon4()}
                    </div>
                </div>
                <a href='/wireframe2'>Go To Wireframe 2</a>
            </div>
        );
    }
}
 
export default Home;