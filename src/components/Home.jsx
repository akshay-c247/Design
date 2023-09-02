import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import'./home.css'
import bgImage from '../assets/group.png';
import inner from '../assets/inner.png'


const Home = () => {
  return (
   
    <div>
     <Header/>
    <Navbar/>
    <div className='main'>
     <img className='bgImage' src={bgImage} alt="" />
        <div className='inner'>
            <div className='content'>
                <h1>OFFERED BY ANALYSTPREP</h1><br /><br />
                <p className='cont1'>Study Material for CFA@,FRM@,and SOA@ Exams</p><br /><br />
                <h1>QUESTION BANK,MOCK EXAMS,<br />STUDY NOTES,VIDEO LESSONS</h1><br /><br />
                <button className='btn1'>Access our Study Plateform</button>
            </div>
            <img src={inner} alt="" className='image' />
        </div>
    </div>
    </div>
  )
}

export default Home;