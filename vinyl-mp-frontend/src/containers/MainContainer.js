import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer.js'
import RecordPage from './RecordPage.js'
import NavBar from "./NavBar"
import NotFound from "../components/NotFound"
import Main from "../pages/main/Main"
import Messages from "../pages/main/Messages"
import Login from "./Login"
import History from "./History"
import Cart from "./Cart"
import UserHome from "../containers/UserHome"
import Friends from "./ChatFriends"
import AllRecords from "../pages/all-records/AllRecords";
import {Route, Switch, Redirect, Link} from "react-router-dom";
import {withRouter} from 'react-router'
const API = "http://localhost:3001/"

class MainContainer extends React.Component {

  state = {
    records:[],
    users:[],
    sell_records:[],
    cover:true,
    page:1,
    recordPage:0,
    user1Page:0,
    user2Page:0,
    user: {},
    error: false,
    orders:[],
    order_records:[],
    redirect:false
  }

  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      this.persistUser(token);
    }

    fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data1 => fetch("http://localhost:3001/records")
    .then(res => res.json())
    .then(data2 => fetch("http://localhost:3001/sell_records")
    .then(res => res.json())
    .then(data5 => fetch("http://localhost:3001/order_records")
    .then(res => res.json())
    .then(data3 => fetch("http://localhost:3001/orders")
    .then(res => res.json())
    .then(data4 => {
      this.setState(
        {sell_records:data3,
        records:data2,
        users:data1,
        orders:data4,
        order_records:data5
      })
      }
      )
      ))))
    }

persistUser = (token) => {
  
  fetch(API +  `profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.user) {
        const { username, id } = data.user;
        this.setState({
          user: {
            username,
            id,
          },
        });
      }
    });
};


handleTabClick = (tab) => {
  let newPage
  if (tab === "friends") {
      newPage = 2
  } else if (tab === "favorites") {
      newPage = 3
  } else {
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

setRedirect = () => {
  this.setState({
    redirect: true
  })
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/login' />
  }
}

 addToCart = (rec) => {
  if (!localStorage.token)
  {
   alert('Please login before adding to cart');
  }
else
{

   alert(rec.name + ' has been added to your cart!');
   let user_find = this.state.orders.filter((order) => order.user.id === this.state.user.id  && order.status === 'pending')
   // change to single element later
   if (user_find.length === 0)
   {


     fetch("http://localhost:3001/orders", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({user_id:this.state.user.id,status:'pending',total_sum:0.0}),
     })
       .then((resp) => resp.json())
       .then((data) => {

         // let newOrders = this.state.order.concat(data)
         // this.setState({orders:newOrders})
         this.createOrderRecord(data);
       })
   }
   else
   {

     this.createOrderRecord(rec);
   }}
 }


    createOrderRecord = (rec) => {
        let currOrder = this.state.orders.filter((order) => order.user.id === this.state.user.id && order.status === 'pending')[0]
        // change to single element later
        fetch("http://localhost:3001/order_records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({order_id: currOrder.id, record_id: rec.id}),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }


 handleAuthResponse = (data) => {
   if (data.message === "Invalid username or password")
   {
    this.props.history.push("/signup");
   }
   else
   {
   if (data.user) {
     const { username, id} = data.user;
     const token = data.jwt
     this.setState({
       user: {
         username,
         id,
       },
       error: null,
     });

     localStorage.setItem("token", token);
     this.props.history.push("/records");
   } else if (data.error) {
     this.setState({
       error: data.error,
     });
   }}
 };

 handleLogin = (e, user) => {
   e.preventDefault();
   fetch(API + `login`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({username:user.username,password:user.password,bio:""}),
   })
     .then((resp) => resp.json())
     .then((data) => {
       this.handleAuthResponse(data);
     })
     .catch(console.log);
 };

 handleSignup = (e, user) => {
   e.preventDefault();

   fetch(API + `/signup`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ user: user }),
   })
     .then((resp) => resp.json())
     .then((data) => {
       this.handleAuthResponse(data);
     })
     .catch(console.log);
 };

 handleLogout = () => {
   localStorage.clear();
   this.setState({ user: {} });
 };

 sendMessage = (e,state) => {

  fetch("http://localhost:3002/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify({content:state.message}),
  })
    .then((resp) => resp.json())
    .then((data) => {

      console.log(data)
    })
 }

 renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} act="login" />;
 renderSignUpPage = () => <Login handleLoginOrSignup={this.handleSignup} act="signup"/>;
 renderMessages = () => <Messages sendMessage={this.sendMessage} user = {this.state.user}/>
 renderHistory = () => <History order_records={this.state.order_records}/>

 changeCartStatus = () => {
   let order_find = this.state.orders.find((order) => order.user.id === this.state.user.id  && order.status === 'pending').id
   // change to single element later
  
   fetch(`http://localhost:3001/orders/${order_find}`, {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({status:"complete"}),
   })
     .then((resp) => resp.json())
     .then((data) => 
     console.log)
 }

 deleteRecord = (order_rec) => {
   fetch(`http://localhost:3001/order_records/${order_rec.id}`, {
     method: 'DELETE',
   })
   .then(res => res.json()) 
   .then(res => {console.log(res)})
   }


   render(){ 
    return (
    <div>
        <NavBar user={this.state.user}
                handleLogout={this.handleLogout}
        />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/messages" render={this.renderMessages} />
            <Route exact path="/records" component = {AllRecords} />

            <Route path="/login" render={this.renderLoginPage} />
            <Route path="/signup" render={this.renderSignUpPage} />
            {/*<Route path="/history" render={this.renderHistory} />*/}

            <Route path="/users/:slug" render={(routerProps) =>{
            let user = this.state.users.find(user => user.id == routerProps.match.params.slug)
            return user? <UserHome user={user} users={this.state.users} records={this.state.records} nums={this.state.records.length} content1={"Recently Bought"} content2={"Currently Selling"} size={200} page={this.state.page} handleTabClick={this.handleTabClick} handleRightClick = {this.handleRightClick} handleLeftClick = {this.handleLeftClick} user1Page={this.state.user1Page} sell_records={this.state.sell_records} user2Page={this.state.user2Page} /> :null
          }}
          />


            <Route path="/records/:slug" render={(routerProps) => {
                        return <RecordPage record_id={routerProps.match.params.slug} records={this.state.records}
                                           handleClick={this.handleClick}
                                           cover={this.state.cover} handleRightClick={this.handleRightClick}
                                           handleLeftClick={this.handleLeftClick} sell_records={this.state.sell_records} user={this.state.user} deleteRecord={this.deleteRecord} changeCartStatus={this.changeCartStatus}
                                           addToCart={this.addToCart} recordPage={this.state.recordPage}/>
                    }}/>  


            {/* {!this.state.user.id && <Redirect to="/login" />} */}

            <Route path="/cart/:slug" render={(routerProps) =>{
            let user = this.state.users.find(u => u.id == routerProps.match.params.slug)
            return user? <Cart user={user} deleteRecord={this.deleteRecord} changeCartStatus={this.changeCartStatus} />:null}}/>
            
            <Route exact path="/friends" component={Friends}/>
            <Route component={NotFound} />
            
        </Switch>
        <Footer/>
    </div>
  );}

}

export default withRouter(MainContainer);

