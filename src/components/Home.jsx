

import { NavLink } from "react-router-dom";
function Home() {
    return (<div className='w-screen h-[calc(100vh-5rem)]'>
<div className="bg-cover  bg-center bg-no-repeat h-full w-full" >
    <div className="container mx-auto flex flex-col my-auto align-middle h-full" >
        <div className='my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5'>
            <h1 className="text-7xl mb-4"><span className='text-violet-500'>Let’s talk</span> with AI!</h1>
            <p className="text-2xl mb-8">And Generate Social Media Bio Using AI!</p>
            <nav className='flex items-center'>
                {/* <a href="Chat"><button className='rounded px-20 py-3 text-white bg-violet-500 hover:bg-violet-600 mx-44 font-extrabold'>AI CHAT BOT</button></a> */}
                {/* <button className='rounded px-20 py-3 text-white bg-violet-500 hover:bg-violet-600 mx-44 font-extrabold'>AI CHAT BOT</button>
                <button className='rounded px-20 py-3 text-white bg-violet-500 hover:bg-violet-600 mx-44 font-extrabold'> AI BIO GENERATOR</button> */}
              <NavLink className={(e)=>{return e.isActive?"red":""}} to="/bio"><li className="list-none"><button className='rounded px-20 py-3 text-white bg-violet-500 hover:bg-violet-600 mx-44 font-extrabold'> AI BIO GENERATOR</button></li></NavLink>
              <NavLink className={(e)=>{return e.isActive?"red":""}} to="/chat"><li className="list-none"><button className='rounded px-20 py-3 text-white bg-violet-500 hover:bg-violet-600 mx-44 font-extrabold'> CHAT AI</button></li></NavLink>
           
            </nav>


        </div>
    </div >
</div >
</div>
    )}
    export default Home;