import React, { useState } from "react";
import Signup from "../Modal/Signup";
function Home() {

  const [sgnup, setSgnup] = useState(false)

return ( 

  <div className=" bg-purple-200 h-full"> 
        {sgnup && <Signup closeSgnup={()=>{setSgnup(false)}}/>}
        {/* --- home screen code starts here --- */}

        <div className=" mx-auto md:justify-center px-10 py-8 container md:flex md:items-center">
            {/* Left item*/}
            <div className="space-y-5 mx-auto md:text-left md:mr-10 text-center flex-col mb-5"> 
              <p className="text-purple-900 text-lg font-semibold">#1 skincare app</p>
              <h1 className="text-purple-900 text-6xl font-bold">we CARE about you</h1>
              <p className="text-purple-900 text-2xl font-bold">Your Ultimate Destination for Glowing Skin</p>
              <p className="text-gray-600 text-lg font-semibold">Dive into expert tips, articles, and routines crafted to help you achieve radiant, healthy skin. Discover the secrets to perfect skincare and makeup prep with weCARE. Because your skin deserves the best.</p>
              <button onClick={()=>{setSgnup(true)}} className="rounded-3xl bg-purple-900 text-white text-lg p-3 hover:bg-purple-700"> Start Today </button>
            </div>
            {/* Right item*/}
            <div className="">
              <img className="rounded-md md:h-90 md:w-84 mx-auto" src="https://images.pexels.com/photos/4938450/pexels-photo-4938450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div>
        </div>
  
        {/* --- we guide you section here -- */}
  
    <div className="bg-purple-200 h-full">
  
       <div className="bg-purple-950 text-white text-center justify-center p-4 space-y-2">
          <h1 className="text-white text-4xl font-bold ">we GUIDE you</h1>
          <p className="text-white text-lg font-semibold">The world of skin care gets complicated pretty quickly. If you feel dizzy thinking about serums, lotions, cleansers, toners, and oils, you’ve come to the right place.</p>
          <button className="rounded-2xl bg-purple-500 text-white p-2 hover:bg-purple-700"> Click Here </button>
        </div>
  
        {/* --- Photo section here PART 1 --- */}
  
        <div className="mx-auto p-2 mt-3 justify-between md:flex md:mx-10">
  
          {/* Pic 1 here  --> */}
          <div className=" text-center mx-auto space-x-4 p-4 h-70 w-80 md:justify-between md:h-70 md:w-[60%] md:flex">
            <img className=" bg-black mx-auto p-1 rounded-lg object-cover object-top size-60 md:w-[340px]" src="https://images.pexels.com/photos/6543550/pexels-photo-6543550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic 1 facial" />
            <p className="md:hidden font-semibold items-center text-purple-900 hover:underline cursor-pointer">Everyday SkinCare Routines</p>
            <p className="hidden md:block md:p-4 md:rounded-lg md:bg-purple-300 md:text-2xl md:items-center md:text-purple-900 md:font-bold">What Does a Simple Morning and Night Skincare Routine Look Like? <button className="hidden md:block md:bg-purple-900 md:mt-4 md:mx-auto md:p-3 md:text-lg md:rounded-3xl md:items-center md:text-white md:font-bold hover:bg-purple-700"> Let's Find Out</button> </p>
            
          </div>
  
          {/* Pic 2 here  --> */}
          <div className=" text-center mx-auto space-x-4 p-4 h-70 w-80 md:justify-between md:h-70 md:w-[60%] md:flex">
            <img className=" bg-black mx-auto p-1 rounded-lg object-cover object-center size-60 md:w-80" src="https://images.pexels.com/photos/5069408/pexels-photo-5069408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="at home skincare" />
            <p className="md:hidden font-semibold items-center text-purple-900 hover:underline cursor-pointer">SkinCare out of your Kitchen</p>
            <p className="hidden md:block md:p-4 md:rounded-lg md:bg-purple-300 md:text-2xl md:items-center md:text-purple-900 md:font-bold">Homemade SkinCare Routines to get Glowing Skin Naturally <button className="hidden md:block md:bg-purple-900 md:mt-4 md:mx-auto md:p-3 md:text-lg md:rounded-3xl md:items-center md:text-white md:font-bold hover:bg-purple-700"> Let's Find Out</button> </p>
          </div>
  
        </div>
  
        {/* --- Photo section here PART 2 --- */}
  
        <div className="mx-auto pb-2 px-2 mt-3 justify-between md:flex md:mx-10">
  
          {/* Pic 3 here  --> */}
          <div className=" text-center mx-auto space-x-4 p-4 h-70 w-80 md:justify-between md:h-70 md:w-[60%] md:flex">
            <img className=" bg-black mx-auto p-1 rounded-lg object-cover object-top size-60" src="https://images.pexels.com/photos/8956115/pexels-photo-8956115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic 1 facial" />
            <p className="md:hidden font-semibold items-center text-purple-900 hover:underline cursor-pointer">MakeUp that your Skin Loves</p>
            <p className="hidden md:block md:p-4 md:rounded-lg md:bg-purple-300 md:text-2xl md:items-center md:text-purple-900 md:font-bold">SkinCare Routine to Prep your Skin for Makeup <button className="hidden md:block md:bg-purple-900 md:mt-4 md:mx-auto md:p-3 md:text-lg md:rounded-3xl md:items-center md:text-white md:font-bold hover:bg-purple-700"> Let's Find Out</button> </p>
            
          </div>
  
          {/* Pic 4 here  --> */}
          <div className=" text-center mx-auto space-x-4 p-4 h-70 w-80 md:justify-between md:h-70 md:w-[60%] md:flex">
            <img className=" bg-black mx-auto p-1 rounded-lg object-cover object-center size-60 md:w-[210px]" src="https://images.pexels.com/photos/2087954/pexels-photo-2087954.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="facewash" />
            <p className="md:hidden font-semibold items-center text-purple-900 hover:underline cursor-pointer">FaceWash Insights</p>
            <p className="hidden md:block md:p-4 md:rounded-lg md:bg-purple-300 md:text-2xl md:items-center md:text-purple-900 md:font-bold"> FaceWash for Clean and Glowing Skin <button className="hidden md:block md:bg-purple-900 md:mt-4 md:mx-auto md:p-3 md:text-lg md:rounded-3xl md:items-center md:text-white md:font-bold hover:bg-purple-700"> Let's Find Out</button> </p>
          </div>
  
        </div> 
  
        {/* --- Photo section ENDS here --- */}
  
        {/* --- Survey section STARTS here --- */}
  
        <div className="bg-purple-200 h-full">
  
         <div className="bg-purple-950 text-white text-center justify-center p-4 space-y-2">
            <h1 className="text-white text-4xl font-bold ">KNOW your SKIN TYPE</h1>
            <p className="text-white text-lg font-semibold">Based on skin types, skincare is different for different persons. Find out about your skin type first to be able to choose the Best Fitted SkinCare Routine. Take this survey to know about your skin type.</p>
            <button className="rounded-2xl bg-purple-500 text-white p-2 hover:bg-purple-700"> Skin Survey </button>
         </div>
         
          {/* --- Survey section ENDS here --- */}
  
          {/* --- Blog pages STARTS here --- */}
  
          <div className="md:flex mx-auto p-6">
            <div className=" text-white md:text-left p-4 space-y-2">
              <h1 className="text-purple-900 text-2xl font-bold underline">How to look Beauty-Sleep Perfect, even after an All-Nighter?</h1>
              <p className="text-purple-800 text-lg font-semibold">Having friends over means saying bye-bye to your sleep. It will be all about fun, food and gossips. Don't Worry! We've got you covered. Turn your dull and tired skin from meh to yeah in these 5 simple steps.</p>
              <div className="hidden md:block md:bg-purple-300 md:p-2 md:space-y-1 md:rounded-lg md:mt-4">
                <p className="text-purple-600 text-lg font-bold">1. Rise and Shine with a Refreshing Cleanse</p>
                <p className="text-purple-600 text-lg font-semibold">First things first, wake up your skin with a gentle cleanser. This will help remove any leftover makeup, sweat, or party grime from last night...</p>
                <p className="text-purple-600 text-lg font-bold">2. Hydrate Like a Boss</p>
                <p className="text-purple-600 text-lg font-semibold">After cleansing, it's time to drench your skin in hydration. Apply a hydrating toner or essence to prep your skin for the layers to come. Follow up with a rich moisturizer to lock in all that goodness... </p>
                <button className="text-purple-600 text-lg underline mt-2 hover:text-purple-900 font-bold"> Read On </button> 
              </div>
            </div>
            <img className="hidden md:block md:mx-auto md:rounded-lg md:object-cover md:object-center md:w-[380px] md:h-[350px]" src="https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="all nighter sleep" />
            <img className="md:hidden hover:opacity-60 mx-auto rounded-lg object-cover object-center size-96" src="https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="all nighter sleep" />
          </div>
  
          <div className=" md:flex md:flex-row-reverse mx-auto p-6">
            <div className=" text-white md:text-left p-4 space-y-2">
              <h1 className="text-purple-900 text-2xl font-bold underline">What to apply first: moisturizer, sunscreen or makeup?</h1>
              <p className="text-purple-800 text-lg font-semibold">Whether you're a makeup maven or a skincare newbie, the age-old question remains: What comes first—moisturizer, sunscreen, or makeup? Stay cool, we're here to make it easy! Let’s dive into this skincare sorcery and make sure you shine bright like a diamond! </p>
              <div className="hidden md:block md:bg-purple-300 md:p-2 md:space-y-2 md:rounded-lg md:mt-4">
                <p className="text-purple-600 text-lg font-bold">Step 1: Moisturizer - Your Skin’s BFF</p>
                <p className="text-purple-600 text-lg font-semibold">To begin with, moisture is key! Think of moisturizer as your skin’s bestie that never lets you down. Apply your moisturizer to keep your skin hydrated and happy...</p>
                <p className="text-purple-600 text-lg font-bold">Step 2: Sunscreen - The Ultimate Shield</p>
                <p className="text-purple-600 text-lg font-semibold">Next up, it’s time to suit up with sunscreen! Imagine your skin is a superhero, and sunscreen is its super shield. Protecting your face from harmful UV rays is a must, rain or shine... </p>
                <button className="text-purple-600 text-lg underline mt-2 hover:text-purple-900 font-bold"> Read On </button> 
              </div>
            </div>
            <img className="hidden md:block md:mx-auto md:rounded-lg md:object-cover md:object-center md:h-[360px] md:w-[640px]" src="https://images.pexels.com/photos/3736397/pexels-photo-3736397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="moisturizer sunscreen makeup"/>
            <img className="md:hidden hover:opacity-60 mx-auto rounded-lg object-cover object-center size-96" src="https://images.pexels.com/photos/3736397/pexels-photo-3736397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="moisturizer sunscreen makeup"/>
          </div>
  
          <div className=" md:flex mx-auto p-6">
            <div className=" text-white md:text-left p-4 space-y-2">
              <h1 className="text-purple-900 text-2xl font-bold underline">Damaged Skin due to Pollution: Anti-Pollution Products are your Saviour</h1>
              <p className="text-purple-800 text-lg font-semibold">Anti-pollution products are an emerging category of skincare products specifically designed to protect the skin from the harmful effects of environmental pollutants, such as fine particulate matter, heavy metals, and toxic chemicals.</p>
              <div className="hidden md:block md:bg-purple-300 md:p-2 md:space-y-2 md:rounded-lg md:mt-4">
                <p className="text-purple-600 text-lg font-semibold">Cleanse: Even sensitive skin needs to be gently cleansed twice a day. Your morning cleanse will help clear your complexion.</p>
                <p className="text-purple-600 text-lg font-semibold">Moisturize: Moisturizing will help maintain and/or restore your cutaneous barrier, preventing dehydration and inflammation, skin’s number one enemy and the major cause of premature aging and dullness.</p>
                <p className="text-purple-600 text-lg font-semibold">Use anti-pollution essentials: Use a 30+ SPF moisturizer when your skin is exposed to both UVs and pollution during the day. UVs, especially UVAs, increase the harmful effects of pollutants.</p>
                <button className="text-purple-600 text-lg underline mt-2 hover:text-purple-900 font-bold"> Read On </button> 
              </div>
            </div>
            <img className="hidden md:block md:mx-auto md:rounded-lg md:object-cover md:object-center md:size-96 md:h-[330px] md:w-[640px]" src="https://images.pexels.com/photos/3902882/pexels-photo-3902882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="anti pollution"/>
            <img className="md:hidden hover:opacity-60 mx-auto rounded-lg object-cover object-center size-96" src="https://images.pexels.com/photos/3902882/pexels-photo-3902882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="anti pollution"/>
          </div>
  
          {/* --- Blog Pages END here --- */}
  
        </div>
    </div>
    
  </div>
);
}

export default Home;