import React, { useEffect, useState } from 'react'
import app_config from '../../config'

const PredictionHistory = () => {

    const { apiUrl } = app_config;
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [predictionList, setPredictionList] = useState([]);

    const getUserHistory = async () => {
        const response = await fetch(`${apiUrl}/prediction/getbyuser/${currentUser._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        setPredictionList(data);
    };

    useEffect(() => {
        getUserHistory();
    }, [])

    const displayHistory = () => {
        return <table className='table mt-5'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Result</th>
                    <th>Confidence</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    predictionList.map((prediction) => (
                        <tr>
                            <td>
                            <img src={'http://localhost:5000/'+prediction.image} height={150} alt="" />

                            </td>
                            <td className='h5'>
                                {prediction.result.className}
                            </td>
                            <td className='h5'>
                                {prediction.result.probability.toFixed(2)*100 + "%"}
                            </td>
                            <td className='h5'>
                                {new Date(prediction.createdAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
        </table>
    }

  return (
    <div className='vh-100'>
        <header>

        <div className='container py-5'>
            <p className='display-3 fw-bold'>Prediction History</p>
        </div>
        </header>
        <main>
            <div className='container'>
                {
                    displayHistory()
                }
                </div>
        </main>
    </div>
  )
}

export default PredictionHistory