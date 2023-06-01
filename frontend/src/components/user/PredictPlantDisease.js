import React, { useEffect, useState } from 'react'
import app_config from '../../config';
import Swal from 'sweetalert2';

const PredictPlantDisease = () => {

    const { apiUrl, modelPath } = app_config;

    const [model, setModel] = useState(null);
    const [maxPredictions, setMaxPredictions] = useState(null);

    const [selImage, setSelImage] = useState('');

    const [predictionLoading, setPredictionLoading] = useState(false);

    const [loadedImage, setLoadedImage] = useState(null);

    const [result, setResult] = useState(null);

    let webcam, labelContainer;

    const predictionResultExtractor = (prediction) => {

        return prediction.find((pred) => pred.probability === Math.max(...prediction.map((pred) => pred.probability)));
        let result = [];
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            result.push(classPrediction);
        }
        return result;
    }

    async function init() {
        const modelURL = modelPath + "/model.json";
        const metadataURL = modelPath + "/metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        let modelT = await window.tmImage.load(modelURL, metadataURL);
        setMaxPredictions(modelT.getTotalClasses());
        setModel(modelT);

        // Convenience function to setup a webcam
        // const flip = true; // whether to flip the webcam
        // webcam = new window.tmImage.Webcam(200, 200, flip); // width, height, flip
        // await webcam.setup(); // request access to the webcam
        // await webcam.play();
        // window.requestAnimationFrame(loop);

        // append elements to the DOM
        // document.getElementById("webcam-container").appendChild(webcam.canvas);
        // labelContainer = document.getElementById("label-container");
        // for (let i = 0; i < maxPredictions; i++) { // and class labels
        //     labelContainer.appendChild(document.createElement("div"));
        // }
    }

    // async function predict() {
    //     // predict can take in an image, video or canvas html element
    //     let img = new Image();
    //     img.src = 'leaf2.jpg';
    //     console.log(img);
    //     // console.log(webcam.canvas);
    //     // console.log(webcam.canvas.value);
    //     // const prediction = await model.predict(webcam.canvas);
    //     const prediction = await model.predict(img);
    //     for (let i = 0; i < maxPredictions; i++) {
    //         const classPrediction =
    //             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    //         labelContainer.childNodes[i].innerHTML = classPrediction;
    //     }
    // }
    
    const predictFromImage =  async () => {
        // predict can take in an image, video or canvas html element
        // let img = new Image();
        // img.src = '/leaf2.jpg';
        // console.log(img);
        // console.log(webcam.canvas);
        // console.log(webcam.canvas.value);
        // const prediction = await model.predict(webcam.canvas);
        // console.log(model);
        const prediction = await model.predict(loadedImage);
        console.log(prediction);
        console.log(predictionResultExtractor(prediction));
        setResult(predictionResultExtractor(prediction));
        Swal.fire({
            title: 'Success',
            icon : 'success',
            text : 'Prediction Completed'
        });
        // for (let i = 0; i < maxPredictions; i++) {
        //     const classPrediction =
        //         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        //         // labelContainer.childNodes[i].innerHTML = classPrediction;
        //         console.log(classPrediction);
        //     }
    }

    // async function loop() {
    //     webcam.update(); // update the webcam frame
    //     await predict();
    //     window.requestAnimationFrame(loop);
    // }

    useEffect(() => {
      init();
    }, []);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const img = new Image();

    // Validate if a file is selected
    if (file) {
      // Create a FileReader to read the file
      const reader = new FileReader();
      console.log();
      // Set up the FileReader onload event
      reader.onload = function(loadedEvent) {
        // Set the image source to the uploaded image data
        console.log('loaded');
        img.src = loadedEvent.target.result;
        setSelImage(loadedEvent.target.result);
        setLoadedImage(img);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
}

  return (
    <div style={{minHeight: '100vh', backgroundImage: "url('https://wallpapercave.com/wp/wp2139158.jpg')"}}>
        <header className='bg-plant'>
        {/* <div className="container py-5 "  >
            <p className="display-4 text-center fw-bold text-white">Plant Doc</p>
          <h1 class="text-center text-white ">What's Wrong With My Plant?</h1>

        </div> */
        <center>
  <div style={{ backgroundColor: "whitesmoke", height: "auto" }}>
    <b>
      <h1 style={{ backgroundColor: "#f1f7f1f8", height: "max-content" }}>
        🌱PlantDoc
      </h1>
      <b>
        {" "}
        <h2 style={{ backgroundColor: "#f1f7f1f8", height: "max-content" }}>
          PLANT DISEASE DETECTION
        </h2>
      </b>
    </b>
  </div>
  <b>
    <br />
  </b>
</center>





        
        
        
        }











      </header>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <center>
              <div className="card" style={{
    backgroundColor: "white",
    height: 600,
    width: 550,
    borderRadius: "1.0cm",
   

  }}
            //   style={{height: '70vh', backgroundSize: 'cover', backgroundImage: `url('https://images.unsplash.com/photo-1538438253612-287c9fc9217e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`}}
              >
                <div className="card-body">
                  {/* <img src="" /> */}


                  
                  {/* <h4 className='text-center'>Upload Leaf Image</h4> */}
                  <br />
                 
                 
                  <h3 style={{ color: "black" }}>
    <i>Plant suffering from a plant disease?? Check it out now!!.. </i>
  </h3>
  <br />
                  
                  
                  
                  
                  <label className='d-block btn btn-primary px-5 py-3' htmlFor="leaf-image" style= {{ backgroundColor: "rgb(78, 78, 138)" }}>
                    {/* <i class="fas fa-upload fa-2x"></i>&nbsp;&nbsp; */}
                    
                    <center>
    <h3 style={{ color: "white" }}>⤒ Upload image</h3>
  </center>

</label>
                  <input hidden type='file' onChange={handleImageUpload} id="leaf-image" />

                  {
                    selImage ? <img style={{height: '400px'}} className='d-block m-auto mt-4' src={selImage} alt="" /> : 
                    <i>
                       <br />
  <h3 style={{ color: "green" }}>
    Upload your plant leaf image by clicking the upload icon above!!..
  </h3>
</i>

                    }

                  {
                    result && (
                        result.className.endsWith('healthy') ? 
                        <p className='display-4 fw-bold text-success text-center'>Congratulations!! Your plant is Healthy</p> :
                        (
                            <>
                        <p className='h1 fw-bold text-danger text-center'>OOps!! Your plant has been detected with disease : {result.className}</p>
                            <button className='btn btn-success mt-3 w-100'> Find Cure for Your Disease <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </>
                        )
                    )
                  }

                  {
                    loadedImage && (
                      <button className='btn btn-primary' onClick={predictFromImage}>Predict Disease</button>
                    )
                  }
                </div>
              </div>
              </center>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PredictPlantDisease;