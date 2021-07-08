import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import './styles/main.css';

function App () {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// const routes = [
//   { path: '/', name: 'Home', Component: Home },
//   { path: '/about', name: 'About', Component: About },
//   { path: '/contact', name: 'Contact', Component: Contact },
// ];

// function App () {
//   return (
//     <>
//       <Router>
//         <>
//           <Navbar bg="light">
//             <Nav className="mx-auto">
//               {routes.map(route => (
//                 <Nav.Link
//                   key={route.path}
//                   as={NavLink}
//                   to={route.path}
//                   activeClassName="active"
//                   exact
//                 >
//                   {route.name}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Navbar>
//           <Container className="container">
//             {routes.map(({ path, Component }) => (
//               <Route key={path} exact path={path}>
//                 {({ match }) => (
//                   <CSSTransition
//                     in={match != null}
//                     timeout={300}
//                     classNames="page"
//                     unmountOnExit
//                   >
//                     <div className="page">
//                       <Component />
//                     </div>
//                   </CSSTransition>
//                 )}
//               </Route>
//             ))}
//           </Container>
//         </>
//       </Router>
//     </>
//   );
// }

// export default App;