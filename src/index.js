import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import RickApi from './routes/RickApi'
import Contacto from './routes/Contacto'
import Blog from './routes/Blog'
import Inicio from './routes/Inicio';
import NoEncontrado from './routes/NoEncontrado'
import Post from './routes/Post'
import EmpleadosR from  './routes/EmpleadosR'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes > 
         <Route path='/' element={<App/>}>
         
            <Route index  element = { <Inicio />}/>
            <Route path = "RickApi" element = { <RickApi />}/>
            <Route path = "Contacto" element = { <Contacto />}/>
            <Route path = "Blog" element = { <Blog />}/>
            <Route path = "EmpleadosR" element = { <EmpleadosR />}/>
            <Route path = "blog/:id" element = { <Post />}/>
            
            <Route path = "*" element = { <NoEncontrado/>}/>
            
        </Route>
       </Routes>
        
  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
