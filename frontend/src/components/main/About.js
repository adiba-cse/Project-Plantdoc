import React from 'react'

const About = () => {
  return (
    <div>
    <div className='home-page' style={{backgroundImage:'url("https://wallpapercave.com/wp/wp7419293.jpg")',backgroundSize:"cover" ,backgroundPosition:'no-repeat'}}>
      <h1 style={{textAlign:"center"  ,color:"green"}}> 
    <b><i>About Us..</i></b>   
      </h1>  



      <center>
    <div
      style={{
        backgroundColor: "aliceblue",
        width: 620,
        height: 650,
        borderRadius: "0.5cm",
        borderRadius: "0.5cm",
        paddingTop:50,
        paddingRight:10,
        paddingLeft:10,
   
   borderStyle:'solid',
   borderWidth:'2px'
      }}
    >
      <h3><i>
      PlantDoc provides the user to identify the diseases that the plants have and provides a proper guidance to as to how to tackle the same with caring tips handy to the general user to gain knowledge and insights for the control and treatment of the same. PlantDoc utilizes Computer Vision and Convolutional Neural Network algorithm of Deep Learning on Artificial Intelligence Model. The model is trained by datasets of various plant leaf disease images. PlantDoc is built on MERN Stack framework. We can click the images of plant leaves from the camera and upload them and check for type of plant disease they correspond to plant is suffering from and how to manage and treat the same and other related caring tips. 
      </i>
      </h3>
    </div>
  </center>
</div>







    </div>





















  )
}

export default About