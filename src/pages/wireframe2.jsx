import React, { Component } from 'react';
// import {
//    NavLink
// } from "react-router-dom";
import './wireframe2.css'
import _, { filter } from 'lodash'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
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
        start:0,
        end:0
    }

    componentDidMount(){
        this.setState({
            filter:this.state.data,
            totalPage: Math.ceil(this.state.data.length/this.state.limit),
            end:this.state.limit 
        })
        // this.state.page===1?this.setState({start:0,end:this.state.limit}):null
    }    

    renderTable=()=>{
        var data=this.tablePerPage()
        return data.map((val,index)=>{
            return(
                <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td >{val.api}</td>
                    <td>{val.description}</td>
                    <td>{val.auth}</td>
                    <td>{val.https}</td>
                    <td><a href={val.link}>visit</a> </td>
                </tr>
            )
        })
    }

    tablePerPage=()=>{
        var {data,start,end}=this.state
        var datapage=data.slice(start,end)
        return datapage                
    }

    options=['apiKey', 'OAuth', 'No']
    renderOptions=()=>{
        return this.options.map((val)=>{
            return <option key={val} value={val}>{val}</option>
        })
    }

    sortTable=()=>{
        const { sort, data } = this.state
        // var datapage=this.tablePerPage()
        this.setState({sort:!sort})
        if(sort){
            this.setState({
            data: _.sortBy(data, ['api']),
            direction:'descending'
            })
        }else{
            this.setState({
                data: _.sortBy(data, ['api']).reverse(),
                // data:data.reverse(),
                direction: 'ascending'    
            })
        }
    }
    onFilterSelect=(e)=>{
        var {filter,limit}= this.state
        console.log('filter jalan')
        var authFilter=e.target.value
        var filter=filter.filter((val)=>{
            if(authFilter==='all'){
                return filter
            }else{
                return(
                    val.auth.toLowerCase().includes(authFilter.toLowerCase())
                    )
                }
            })
        // var totalPage=Math.ceil(filter.length)
        this.setState({page:1, start:0, end:limit, data:filter, totalPage:Math.ceil(filter.length/limit)})
    }

    loopTableBody=()=>{
        let bodytab = []
        this.state.data.map((val, index) => {
            bodytab.push([
                val.api,
                val.description,
                val.auth,
                val.https,
                val.link
            ])
        })
        return bodytab
    }

    exportPdf=()=>{
        const doc = new jsPDF()
        doc.autoTable({
            head: [['API', 'Description', 'Auth', 'HTTPS', 'Link']],
            body: this.loopTableBody()
        })

        doc.save('Table.pdf')
    }

    printPdf=()=>{
        const doc = new jsPDF()
        doc.autoTable({
            head: [['API', 'Description', 'Auth', 'HTTPS', 'Link']],
            body: this.loopTableBody()
        })

        // doc.autoPrint()
        doc.output('dataurlnewwindow')
    }

    render() { 
        var {direction, page, totalPage, start, end, limit}=this.state
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
                        <div className="export" onClick={() => this.exportPdf()}>
                           <p> Export </p>                           
                        </div>
                        <p><FaPrint onClick={() => this.printPdf()} style={{fontSize:'25px'}}/></p>
                    </div>
                </div>
                <div className='tabledata'>
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
                            {/* {this.tablePerPage()} */}
                        </tbody>
                    </table>
                </div>
                <div className='pagination'>
                    <div className="iconpagination">
                        <button disabled={page===1} onClick={()=>{this.setState({page:1,start:0,end:limit})}} >
                            <FaAngleDoubleLeft />
                        </button>
                    </div>
                    <div className="iconpagination" >
                        <button disabled={page===1} 
                            onClick={ ()=>{this.setState({start:start-limit, end:end-limit, page:page-1})}}>
                            <FaAngleLeft />
                        </button>
                    </div>
                    <p>{page} of {totalPage}</p>
                    <div className="iconpagination">
                        <button disabled={page===totalPage} onClick={()=>{this.setState({start:end, end:end+limit, page:page+1})}}>
                            <FaAngleRight /> 
                        </button>
                    </div>
                    
                    <div className="iconpagination">
                        <button disabled={page===totalPage} onClick={()=>{this.setState({page:totalPage,start:(limit*totalPage)-limit,end:limit*totalPage})}}>
                            <FaAngleDoubleRight/>
                        </button>
                    </div>
                </div>
                <a href='/'>Go To Home</a> 
            </div>
        );
    }
}
 
export default Wireframe2;