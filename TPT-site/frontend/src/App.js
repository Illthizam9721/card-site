import './App.css';
import React from 'react'
import axios from 'axios'

function App() {

    const [form, setForm] = React.useState({
        email: '',
        name: '',
        message: ''
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const sendMessageHandler = () => {
        async function fetchData() {
            const data = await axios.post('http://localhost:8000/api/send/message', {...form})
            alert('Message sent.')
        }
        fetchData()
    }

  return (
      <div>
     <section id="hero" className="text-white tm-font-big tm-parallax">

       {/* Navigation */}
       <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">
         <div className="container">
           <div className="tm-next">
             <a href="#hero" className="navbar-brand">TPT</a>
           </div>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <i className="fas fa-bars navbar-toggler-icon" />
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <a className="nav-link tm-nav-link" href="#introduction">Introduction</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link tm-nav-link" href="#work">Our Work</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link tm-nav-link" href="#contact">Contact Us</a>
               </li>
             </ul>
           </div>
         </div>
       </nav>
       <div className="text-center tm-hero-text-container">
         <div className="tm-hero-text-container-inner">
           <h3 className="tm-hero-title">The progers team</h3>
                Maybe you should start now and move towards your dream despite the difficulties
         </div>
       </div>
       <div className="tm-next tm-intro-next">
         <a href="#introduction" className="text-center tm-down-arrow-link">
           <i className="fas fa-3x fa-caret-down tm-down-arrow" />
         </a>
       </div>
     </section>
     <section id="introduction" className="tm-section-pad-top">
       <div className="container">
         <div className="row">
           <div className="col-lg-6">
            <img src="img/p3.jpg" alt="Image" class="img-fluid tm-intro-img" />
           </div>
           <div className="col-lg-6">
             <div className="tm-intro-text-container">
               <h2 className="tm-text-primary mb-4 tm-section-title">Introduction</h2>
               <p className="mb-4 tm-intro-text">
                 We are a team of programmers and designers from Russia. We are engaged in the development of sites, web applications, bots for Telegram and VKontakte, and writing scripts for various tasks. We are always developing, learning something new and interesting in order to always serve our clients with excellent work.
               </p>
               <div className="tm-next">
                 <a href="#work" className="tm-intro-text tm-btn-primary">Read More</a>
               </div>
             </div>
           </div>
         </div>
         <div className="row tm-section-pad-top">
           <div className="col-lg-4">
             <i className="fas fa-4x fa-bus text-center tm-icon" />
             <h4 className="text-center tm-text-primary mb-4">Quality</h4>
             <p>
                We are good experts in web development to create beautiful websites and delight our clients. We like what we do.
             </p>
           </div>
           <div className="col-lg-4 mt-5 mt-lg-0">
             <i className="fas fa-4x fa-bicycle text-center tm-icon" />
             <h4 className="text-center tm-text-primary mb-4">Support</h4>
             <p>
                Our managers are always ready to answer your questions. You can write to us at the contacts below and get an answer within 10 minutes.
             </p>
           </div>
           <div className="col-lg-4 mt-5 mt-lg-0">
             <i className="fas fa-4x fa-city text-center tm-icon" />
             <h4 className="text-center tm-text-primary mb-4">Prices</h4>
             <p>
               We have fixed prices for some goods and services, and we also offer discounts and great deals to our regular customers.
             </p>
           </div>
         </div>
       </div></section>
     <section id="work" className="tm-section-pad-top">
       <div className="container tm-container-gallery">
         <div className="row">
           <div className="text-center col-12">
             <h2 className="tm-text-primary tm-section-title mb-4">Tools</h2>
             <p className="mx-auto tm-work-description">
               We use many different tools to develop projects for our users
             </p>
           </div>
         </div>
         <div className="row">
           <div className="col-12">
             <div className="mx-auto tm-gallery-container">
               <div className="grid tm-gallery">
                 <a href="https://reactjs.org/">
                   <figure className="effect-honey tm-gallery-item">
                     <img src="img/react.png" style = {{width: '330px'}} alt="Image" className="img-fluid" />
                     <figcaption>
                       <h2><i>React</i></h2>
                     </figcaption>
                   </figure>
                 </a>
                 <a href="https://redux.js.org/">
                   <figure className="effect-honey tm-gallery-item">
                     <img src="img/reduxp.png" alt="Image" style = {{width: '330px', height: '220px'}} className="img-fluid" />
                     <figcaption>
                       <h2><i>Redux</i></h2>
                     </figcaption>
                   </figure>
                 </a>
                 <a href="https://nodejs.org/en/">
                   <figure className="effect-honey tm-gallery-item">
                     <img src="img/node-js.png" style = {{width: '330px'}} alt="Image" className="img-fluid" />
                     <figcaption>
                       <h2><i>Node</i></h2>
                     </figcaption>
                   </figure>
                 </a>
                 <a href="https://en.wikipedia.org/wiki/JavaScript">
                   <figure className="effect-honey tm-gallery-item">
                     <img src="img/javascript.png" style = {{width: '330px'}}  alt="Image" className="img-fluid" />
                     <figcaption>
                       <h2><i>JS</i></h2>
                     </figcaption>
                   </figure>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     {/* Contact */}
     <section id="contact" className="tm-section-pad-top tm-parallax-2">
       <div className="container tm-container-contact">
         <div className="row">
           <div className="col-12">
             <h2 className="mb-4 tm-section-title">Contact Us</h2>
             <div className="mb-5 tm-underline">
               <div className="tm-underline-inner" />
             </div>
             <p className="mb-5">
             Please fill in
                 your details below & we will be in contact shortly
             </p>
           </div>
           <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
             <a href="tel:0100200340" className="tm-contact-item-link">
               <i className="fas fa-3x fa-phone mr-4" />
               <span className="mb-0">8 800 382 32 28</span>
             </a>
           </div>
           <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
             <a href="mailto:info@company.co" className="tm-contact-item-link">
               <i className="fas fa-3x fa-envelope mr-4" />
               <span className="mb-0">TPT.support@gmail.com</span>
             </a>
           </div>
           <div className="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
             <form action method="get">
               <input name="email" type="email" onChange = {changeHandler} placeholder="Subscribe your email" className="tm-input" required />
               <button type="submit" onClick = {sendMessageHandler} className="btn tm-btn-submit">Submit</button>
             </form>
           </div>
         </div>
       </div>
       <footer className="text-center small tm-footer">
         <p className="mb-0">
           Copyright © 2019 Company Name

         </p>
       </footer>
     </section>
   </div>
  );
}

export default App;
