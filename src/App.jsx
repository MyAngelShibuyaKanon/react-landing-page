import { useState } from 'react'
import './App.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div>
      <div>
        <NavBar />
        <Hero/>
      </div>
      <Posts>
        <Post/>
        <Post/>
        <Post/>
      </Posts>
      <ContentList />
      <Footer />
    </div>
  )
}

function Hero(){
  return(
  <div className='flex flex-row-reverse wrap mx-[10vw] min-h-screen items-center max-lg:flex-col py-[5rem] justify-betweem gap-[1rem]'>
    <img className='rounded-full self-center max-h-[50vw]' src='Ikuyo_Kita_Character_Design_2_square.webp'/>
    <div className='flex flex-col wrap max-lg:text-center gap-[1rem]'>
        <div className='text-7xl font-bold '>
          <h1>Hello! My name is</h1>
          <h1>Skibidi Sigma Ohio Tax</h1>
        </div>
        <div className='text-2xl'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatibus ipsam nisi eius, architecto, odit nihil voluptates facere perspiciatis quis eum. Dolor debitis enim quas excepturi impedit eligendi soluta veritatis!</p>
        </div>
        <button className='bg-orange-600 hover:border-orange-600 border-solid border-2 hover:bg-white hover:text-orange-600 text-white text-xl self-start max-lg:self-center py-[.7rem] px-[1.5rem]'>Be a Skibidi</button>
    </div>
  </div>
  )
}

function Posts({children}){
  return(
    <div className='flex flex-row min-h-[60vh] bg-blue-300 '>
      <div className='w-[80vw] mx-[10vw]  pt-[1rem] text-xl'>
        <div className='flex justify-between'>
          <p>Bussin Posts</p>
          <a className='text-blue-700'>View all</a>
        </div>
        <div className='flex flex-row items-stretch my-[1rem] gap-[2rem] max-lg:flex-col max-lg:max-h-[70vh] overflow-scroll flex-nowrap'>
          {children}
        </div>  
      </div>
      
    </div>
  )
}

function Post(){
  return(
    <div className='flex flex-col bg-white min-w-[35vw] max-lg:max-w-[100vw] h-full p-[1rem] pb-[4rem] gap-[.6rem] '>
      <h2 className='text-2xl font-bold'>Test</h2>
      <p>June 69 2023 | Skibidi,Sigma</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint, quos soluta unde quis quas velit, cumque consectetur nam sit earum maxime voluptate quibusdam atque magni recusandae itaque aperiam adipisci?</p>
    </div>
  )
}

function NavBar(){
  return(
    <nav className='right-0 sticky top-0 py-[1rem] justify-left  bg-white'>
      <NavMobile />
      <NavDesktop />
    </nav>
  )
}

function Footer(){
  return(
      <div className='flex flex-col items-center justify-end gap-[.5rem]  py-[1rem]'>
      <div className='flex flex-row gap-[1rem]'>
        <FaFacebookSquare size='2rem'/>
        <FaInstagram size='2rem'/>
        <FaTwitter size='2rem'/>
        <FaLinkedin size='2rem'/>
      </div>
      <p>
        Copyright ©2025 All rights reserved
      </p>
    </div>
  )
}

function Content() {
    return(
      <div className='flex max-lg:flex-col w-full min-lg:min-h-[30vh]  gap-[2rem] p-[1rem] flex-nowrap'>
        <img src='kita.webp' className='max-w-[20vw] max-lg:max-w-[80vw] object-cover '/>
        <div className='flex flex-col gap-[1rem]'>
          <h1 className='text-2xl font-bold'>Skibidi Ohio</h1>
          <p>Feb 14, 2911</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate itaque omnis doloribus perferendis corrupti aspernatur, ratione sint tenetur distinctio quae, quod consectetur ducimus recusandae magni qui culpa facilis in illum.</p>
        </div>
      </div>
    )
}

function ContentList() {
  return (
    <div className='py-[2rem]'>
      <div className='flex flex-col w-[80vw] mx-[10vw]  max-h-[85vh] flex-nowrap overflow-scroll'>
        <Content/>
        <Content/>
        <Content/>
      </div>
    </div>
  )
}

function NavDesktop() {
  return(
    <nav className='right-0  top-0  justify-left bg-white max-lg:hidden visible'>
      <div className='flex flex-row  text-xl font-bold justify-end gap-[2rem] w-[90vw] mx-[5vw]'> 
        <a>Skibdi</a>
        <a>Skibdi</a>
        <a>Skibdi</a>
      </div>
    </nav>
  )
}

function NavMobile() {
  const [isOpen, setOpen] = useState(false);

  function handleMouseEnter(){
    setOpen(true);
  }

  function handleMouseLeave(){
    setOpen(false);
  }

  console.log(isOpen)
  if (isOpen){
    return (
      <div className='flex-col p-0 max-lg:flex hidden' onMouseLeave={handleMouseLeave} >
        <div className='flex w-[90vw] mx-[5vw] justify-end' >
          <button className='inline-block h-[4.5vh] w-[4.5vh] m-[.5vh] ' onClick={handleMouseLeave}>
            <div className='h-1 m-1 w-full bg-black translate-y-[8px] rotate-45'></div>
            <div className='h-1 m-1 w-full none'></div>
            <div className='h-1 m-1 w-full bg-black -translate-y-[8px] -rotate-45'></div>
          </button>
        </div>
        <div className=' flex-col p-0 '>
          <a className='w-full text-2xl p-[1rem] text-center hover:bg-gray-300 hover:text-white'>Skibdi</a>
          <a className='w-full text-2xl p-[1rem] text-center hover:bg-gray-300 hover:text-white'>Skibdi</a>
          <a className='w-full text-2xl p-[1rem] text-center hover:bg-gray-300 hover:text-white'>Skibdi</a>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className=' w-[90vw] mx-[5vw] justify-end max-lg:flex hidden' >
        <button className='inline-block h-[4.5vh] w-[4.5vh] m-[.5vh] ' onClick={handleMouseEnter}>
          <div className='h-1 m-1 w-full bg-black '></div>
          <div className='h-1 m-1 w-full bg-black'></div>
          <div className='h-1 m-1 w-full bg-black'></div>
        </button>
      </div>
    )
  }
  
}