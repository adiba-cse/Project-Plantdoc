import React from 'react'

const Home = () => {
  return (


    <div className='home-page' style={{backgroundImage:'url("https://wallpaper.dog/large/735464.jpg")',backgroundSize:"cover" ,backgroundPosition:'no-repeat'}}>
      <h1 style={{textAlign:"center"  ,color:"white"}}> 
    <b><i>PlantDoc-The Plant Disease Detection Platform</i></b>   
      </h1>
      <br/>
      <center>
      <div className='card'
       style={{ 
        backgroundColor: "white",
        height: 550,
        width: 650,
        borderRadius: "0.5cm",
     paddingTop:50,
     paddingRight:10,
     paddingLeft:10,

borderStyle:'solid',
borderWidth:'2px'
    
      }}
 
>

  

 
<i>
 <h4 style={{fontFamily:"mono"}}>

    Gardening has been a hobby of many and plants are there in the agricultural
    sector as well. Plant Diseases not only affect the garden plants but also
    the agricultural plants.This application helps in timely detection of plant
    diseases to help garderns in preserving garden plants and farmers to help
    them save their agricultural produce and thus increasing overall profits and
    productivity!!...
    <b><ul>PlantDoc-</ul></b>
    <li>
      Enables to upload plant leaf images as input and provides plant disease in
      as output with cure to the same.
    </li>
    <li>
      One can maintain the history of detection of plant diseases via this web
      application.
    </li>
    <li>
      It allows seperate account creation for different users.</li>
      </h4>
  </i>
 
</div>
</center>
   </div>






   
    



  )
}

export default Home;