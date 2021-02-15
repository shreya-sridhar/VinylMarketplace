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
import Search from "../pages/search/Search";
const API = "http://localhost:3001/"

class MainContainer extends React.Component{
   
  state = {
    records:[{}],
    users:[{}],
    sellers:[{}],
    cover:true,
    page:1,
    recordPage:0,
    user1Page:0,
    user2Page:0
  }

  componentDidMount(){
    fetch(API+`/records`)
    .then(resp => resp.json())
    .then(data => this.setState({records: data}))

    fetch(API+`/users`)
    .then(resp => resp.json())
    .then(data => this.setState({users: data}))


  }

  handleTabClick = (tab) => {
    let newPage
    if (tab === "friends")
    {
     newPage = 2
    }
    else if (tab === "favorites")
    {
      newPage = 3
    }
    else 
    {
      newPage = 1
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

  render(){
    return (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/record" component={() => <RecordPage record={this.state.records[0]} records={this.state.records} handleClick = {this.handleClick} cover = {this.state.cover} handleRightClick = {this.handleRightClick} handleLeftClick = {this.handleLeftClick} users = {this.state.users} recordPage={this.state.recordPage} />  } />
            <Route exact path="/" component={Main} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/user" component={() => <UserHome records={this.state.records} nums={this.state.records.length} content1={"Recently Bought"} content2={"Currently Selling"} size={200} page={this.state.page} handleTabClick={this.handleTabClick} handleRightClick = {this.handleRightClick} handleLeftClick = {this.handleLeftClick} user1Page={this.state.user1Page} user2Page={this.state.user2Page} /> }/>
            <Route exact path="/friends" component={Friends}/>
            <Route component={NotFound} />
        </Switch>
        <Footer/>
    </div>
  );}
}

export default MainContainer;









