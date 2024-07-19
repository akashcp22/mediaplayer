import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideos } from '../Services/allApis'
import { Col, Row } from 'react-bootstrap'



function Videolist(addres) {
  const[deleteres,setDeleteRes]=useState("")
  const [videoData, setVideoData] = useState([])
  useEffect(() => {
    getData()

  }, [addres,deleteres])
  const getData = async () => {
    const videos = await getVideos()
   
    setVideoData(videos.data)
  }
  return (
    <>
      {videoData.length > 0 ?
        <div className=''>
          <Row>
          {videoData.map((item) => (
            <Col>
            <Videocard  deletevid={setDeleteRes} key={item.id} video={item} />
            </Col>
          ))}
          </Row>
        </div>
        :
        <h1>No videos available</h1>
      }


    </>
  )
}

export default Videolist
