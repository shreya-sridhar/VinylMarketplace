import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer.js'
import RecordPage from './RecordPage.js'
import {
    Switch,
    Route
} from "react-router-dom"
import NavBar from "./NavBar"
import NotFound from "../components/NotFound"
import Main from "../pages/main/Main"
import Login from "./Login"
import Cart from "./Cart"
import UserHome from "../containers/UserHome"
import Friends from "./ChatFriends"
import AllRecords from "../pages/all-records/AllRecords"
import Search from "../pages/search/Search";
import { Link } from 'react-router-dom'
const API = "http://localhost:3001/"

class MainContainer extends React.Component{
   
  state = {
    records:[],
    users:[],
    sell_records:[],
    cover:true,
    page:1,
    recordPage:0,
    user1Page:0,
    user2Page:0,
    cart:[]
  }

getRecordsData () {
    fetch("http://localhost:3001/records")
    .then(res => res.json())
    .then(data => this.setState({records:data}))
}

getUsersData () {
  fetch("http://localhost:3001/users")
  .then(res => res.json())
  .then(data => this.setState({users:data}))
}

getSellData () {
  fetch("http://localhost:3001/sell_records")
  .then(res => res.json())
  .then(data => this.setState({sell_records:data}))
}

  componentDidMount() {
    // this.getUsersData()
    fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data1 => fetch("http://localhost:3001/records")
    .then(res => res.json())
    .then(data2 => fetch("http://localhost:3001/sell_records")
    .then(res => res.json())
    .then(data3 => this.setState(
      {sell_records:data3,
      records:data2,
    users:data1}
      ))))
}

  handleTabClick = (tab) => {
    let newPage
    if (tab === "friends")
    {
     newPage = 2
    }

    handleRightClick = (pg, n) => {
        let changePage = pg + `Page`
        let pageNum = this.state[changePage] + 4
        if (pageNum >= n) {
            pageNum = 0
        }
        this.setState({
            [`${changePage}`]: pageNum
        })
    }

    handleLeftClick = (pg, n) => {
        let changePage = pg + `Page`
        let pageNum = this.state[changePage] - 4
        if (pageNum <= 0) {
            pageNum = n - 4
        }
        this.setState({
            [`${changePage}`]: pageNum
        })
    }

    render() {
        return (
            <div>
                <NavBar search={this.state.search}/>
                <Switch>
                    <Route exact path="/record"
                           component={() => <RecordPage record={this.state.records[0]} records={this.state.records}
                                                        handleClick={this.handleClick} cover={this.state.cover}
                                                        handleRightClick={this.handleRightClick}
                                                        handleLeftClick={this.handleLeftClick} users={this.state.users}
                                                        recordPage={this.state.recordPage}/>}/>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/records" component={AllRecords}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/user"
                           component={() => <UserHome records={this.state.records} nums={this.state.records.length}
                                                      content1={"Recently Bought"} content2={"Currently Selling"}
                                                      size={200} page={this.state.page}
                                                      handleTabClick={this.handleTabClick}
                                                      handleRightClick={this.handleRightClick}
                                                      handleLeftClick={this.handleLeftClick}
                                                      user1Page={this.state.user1Page}
                                                      user2Page={this.state.user2Page}/>}/>
                    <Route exact path="/friends" component={Friends}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
    this.setState({
      page: newPage
    })
  }

  handleClick = () => {
   let newCover = !this.state.cover[0]
   let newTitle
   if (this.state.cover[1]==="View Album Cover")
   {
    newTitle = "View List Of Songs"
   }
   else
   {
    newTitle = "View Album Cover"
   }
   this.setState({
     cover:[newCover,newTitle]
   })
  }

  handleRightClick = (pg,n) => {
    let changePage = pg + `Page`
    let pageNum = this.state[changePage] + 4
    if (pageNum >= n)
      {pageNum = 0}
    this.setState({
      [`${changePage}`]: pageNum
    })
  }

  handleLeftClick = (pg,n) => {
    let changePage = pg + `Page`
    let pageNum = this.state[changePage] - 4
    if (pageNum <= 0)
      {pageNum = n-4}
    this.setState({
      [`${changePage}`]: pageNum
    })
  }

  addToCart = (rec) => {
    let newCart = this.state.cart.concat(rec)
    this.setState({
      cart:newCart
    })

    fetch("http://localhost:3001/sell_records", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rec),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })

    
  }

  render(){ 
    return (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={() => <Cart cart={this.state.cart}/>} />
            <Route exact path="/users" component={() => <UserHome user = {this.state.users[0]} records={this.state.records} nums={this.state.records.length} content1={"Recently Bought"} content2={"Currently Selling"} size={200} page={this.state.page} handleTabClick={this.handleTabClick} handleRightClick = {this.handleRightClick} handleLeftClick = {this.handleLeftClick} user1Page={this.state.user1Page} user2Page={this.state.user2Page} /> }/>


            <Route path="/users/:slug" render={(routerProps) =>{
            let user = this.state.users.find(user => user.id == routerProps.match.params.slug)
            return user? <UserHome user={user} records={this.state.records} nums={this.state.records.length} content1={"Recently Bought"} content2={"Currently Selling"} size={200} page={this.state.page} handleTabClick={this.handleTabClick} handleRightClick = {this.handleRightClick} handleLeftClick = {this.handleLeftClick} user1Page={this.state.user1Page} user2Page={this.state.user2Page} /> :null
          }}
          />

            <Route path="/records/:slug" render={(routerProps) =>{
            let record = this.state.records.find(record => record.id == routerProps.match.params.slug)
            return record? <RecordPage record={record} records={this.state.records} handleClick = {this.handleClick} cover = {this.state.cover} handleRightClick = {this.handleRightClick} handleLeftClick = {this.handleLeftClick} sell_records = {this.state.sell_records} addToCart = {this.addToCart} recordPage={this.state.recordPage} />:null}}/>

            <Route exact path="/friends" component={Friends}/>
            <Route component={NotFound} />
        </Switch>
        <Footer/>
    </div>
  );}
}

export default MainContainer









