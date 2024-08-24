import React from 'react'

const Body = () => {
  return (
    <div className='px-[125px] py-5 '>
      <div className='flex justify-between  '>
        <img src='./src/assets/logo.svg' className='' alt='logo'></img>
        <button className='bg-slate-100 rounded-3xl'>
          <ul className='flex text-black gap-8 px-4 py-2'>
          <li><a href="#" className='hover:text-green-500 font-semibold' > Into</a></li>
          <li><a href="#" className='hover:text-green-500 font-semibold'>Pricing</a></li>
          <li><a href="#" className='hover:text-green-500 font-semibold'>Features</a></li>
          <li><a href="#" className='hover:text-green-500 font-semibold'>Termenologies</a></li>
        </ul>
        </button>
        
        
        <div className='flex'> 
          <button className='bg-black hover:bg-blue-500 rounded-xl px-3 py-2 text-white font-bold'>Join Community</button>
        </div>
      </div>

      <div className='flex pt-20 '>
        <div className='flex-col space-y-6 pt-10 pr-10'>
          <h1 className='text-7xl font-semibold '><span className='text-green-500 '>ATTEND LIVE</span> CLASSES EVERY WEEK</h1>
          <p className='text-black'>Join founders, Freelebcers, designers, FAANG engineers, Indie hackers, and more in our 24/7 Whatsapp Group for less than a cup of coffee</p>
          <button className='bg-green-500 rounded-[100px] px-4 py-2'>Join 24/7 discord for $5/month</button>
        
        </div>
        <img className='h-[470px] w-[350px]' src='./src/assets/poster.jpg'></img>
      </div>

      <div className='flex py-14 gap-6 justify-center '>
          <button className='flex gap-2 '>
            <img src='.\src\assets\icon-guides.svg'></img>
            <a href='#'>5+ guides for Free</a>
          </button>
          <button className='flex gap-2'>
            <img src='.\src\assets\icon-courses.svg'></img>
            <a href='#'>Exclusive courses and project</a>
          </button>
          <button className='flex gap-2'>
            <img src='.\src\assets\icon-whatsapp.svg'></img>
            <a href='#'>24/7 Whatsapp Support Group</a>
          </button>
          <button className='flex gap-2 '>
            <img src='.\src\assets\icon-sessions.svg'></img>
            <a href='#'>1:1 free session</a>
          </button>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Body
