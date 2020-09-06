import React, { Component } from 'react';
// import {
//    NavLink
// } from "react-router-dom";
import './wireframe2.css'
import _, { filter } from 'lodash'

import { FaPrint,FaCaretDown, FaCaretUp,FaAngleDoubleLeft,FaAngleLeft,FaAngleDoubleRight, FaAngleRight} from "react-icons/fa";

class Wireframe2 extends Component {
    state = { 
        sort:false,
        direction:'ascending',
        data:[
            {
                api:'Charity Search',
                description:'Non-profit charity data',
                auth:'apiKey',
                https:'No',
                link:'#'
            },
            {
                api:'Clearbit Logo API',
                description:'Search for company logos and embed them in your project',
                auth:'No',
                https:'Yes',
                link:'#'
            },
            {
                api:'Domainsdb.info',
                description:'Registered Domain Names Search',
                auth:'No',
                https:'Yes',
                link:'#'
            },
            {
                api:'Gmail',
                description:"NFlexible, RESTful access to the user's inbox",
                auth:'OAuth',
                https:'Yes',
                link:'#'
            },
            {
                api:'Google Analytics',
                description:'Collect, configure, and analyze your data to reach the right',
                auth:'OAuth',
                https:'Yes',
                link:'#'
            },
            {
                api:'Markerapi',
                description:'Trademark Search',
                auth:'No',
                https:'No',
                link:'#'
            },
            {
                api:'Trello',
                description:'Boards, lists, and cards to help you organize and prioritize',
                auth:'OAuth',
                https:'Yes',
                link:'#'
            },
            {
                api:'Lorem',
                description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto',
                auth:'No',
                https:'Yes',
                link:'#'
            },
            {
                api:'Ipsum',
                description:'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.',
                auth:'OAuth',
                https:'Yes',
                link:'#'
            },
            {
                api:'Dolor Sit Amet',
                description:'Et harum quidem rerum facilis est et expedita distinctio.',
                auth:'apiKey',
                https:'No',
                link:'#'
            }
        ],
        filter:[],
        totalPage:0,
        limit:3,
        page:1,
        offset:0
    }

    componentDidMount(){
        this.setState({
            filter:this.state.data,
            totalPage: Math.ceil(this.state.data.length/this.state.limit) 
        })
    }

    renderTable=()=>{
        return this.state.data.map((val,index)=>{
            return(
                <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{val.api}</td>
                    <td>{val.description}</td>
                    <td>{val.auth}</td>
                    <td>{val.https}</td>
                    <td><a href={val.link}>visit</a> </td>
                </tr>
            )
        })
    }

    tablePerPage=()=>{
        var {data,offset,limit}=this.state
        var data=data.slice(offset,limit)

    }

    options=['apiKey', 'OAuth', 'No']
    renderOptions=()=>{
        return this.options.map((val)=>{
            return <option key={val} value={val}>{val}</option>
        })
    }

    sortTable=()=>{
        const { sort, data } = this.state
        this.setState({sort:!sort})
        if(sort){
            this.setState({
            data: _.sortBy(data, ['api']),
            direction:'descending'
            })
        }else{
            this.setState({
                data: _.sortBy(data, ['api']),
                data:data.reverse(),
                direction: 'ascending'    
            })
        }
    }
    onFilterSelect=(e)=>{
        console.log('filter jalan')
        var authFilter=e.target.value
        var filter=this.state.filter.filter((val)=>{
            if(authFilter==='all'){
                return this.state.filter
            }else{
                return(
                    val.auth.toLowerCase().includes(authFilter.toLowerCase())
                    )
                }
            })
        // var totalPage=Math.ceil(filter.length)
        this.setState({data:filter, totalPage:Math.ceil(filter.length/this.state.limit)})
    }


    render() { 
        var {direction, page, totalPage, offset, limit}=this.state
        return ( 
            <div className="tablewf2">
                <div className='tableMenu'>
                    <div className="pilihankiri">
                        <label>Auth type: &ensp; </label>  
                        <select name='auth' id='auth' onChange={this.onFilterSelect} >
                            <option key='all' value="all">All</option>
                            {this.renderOptions()}
                        </select>                      
                    </div>
                    <div className="pilihankanan">
                        <div className="export">
                           <p> Export </p>                           
                        </div>
                        <p><FaPrint style={{fontSize:'25px'}}/></p>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <p>API</p>
                                        <p onClick={()=>{this.sortTable()}}>{direction==='ascending'?<FaCaretDown/>:<FaCaretUp/>} </p>
                                    </div>
                                </th>
                                <th>Description</th>
                                <th>Auth</th>
                                <th>HTTPS</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
                <div className='pagination'>
                    <div className="iconpagination">
                        <FaAngleDoubleLeft />
                    </div>
                    <div >
                        <button disabled onClick={()=>{this.setState({offset:limit, limit:limit-3})}}>
                            <FaAngleLeft />
                        </button>
                    </div>
                    <p>{page} of {totalPage}</p>
                    <div className="iconpagination">
                        <FaAngleRight onClick={()=>{this.setState({offset:limit, limit:limit+3})}}/> {this.state.offset}, {this.state.limit}
                    </div>
                    
                    <div className="iconpagination">
                        <FaAngleDoubleRight/>
                    </div>
                </div>
                <a href='/'>Go To Home</a> 
            </div>
        );
    }
}
 
export default Wireframe2;