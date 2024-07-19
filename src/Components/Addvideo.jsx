import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideo } from '../Services/allApis'


function Addvideo({setAdd}) {
    const [show, setShow] = useState(false);
    const [video,setVideo]=useState({
      videoId:"",
      caption:"",
      image:"",
      videoUrl:""
    })
    const submitForm=async()=>{
      const {videoId,caption,image,videoUrl}=video
      if(!videoId||!caption||!image||!videoUrl){
       toast.info("Enter valid inputs")

      }
      else{
        //changing watch url to embed before storing
        const code=videoUrl.split("v=")[1]
        const embedUrl=`https://www.youtube.com/embed/${code}?si=RbR4TH07-O8zvay4&autoplay=1`
        video.videoUrl=embedUrl
        const result=await addVideo(video)
        console.log(result);
        if(result.status===201){
          setAdd(result)
          handleClose()
          setVideo({ videoId:"",
            caption:"",
            image:"",
            videoUrl:""})
      toast.success("video uploaded successfully")}
      }
    }
    // console.log(video);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" style={{borderRadius:20}} onClick={handleShow}>
        Upload Video
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{backgroundColor:'lightblue'}}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
        <FloatingLabel controlId="floatingID" label="VideoID" className="mb-3">
        <Form.Control type="text" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}} placeholder="VideoID2" className="mb-3"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video title">
        <Form.Control type="text"  onChange={(e)=>{setVideo({...video,caption:e.target.value})}} placeholder="Videoname" className="mb-3" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingUrl" label="Thumbnail url">
        <Form.Control type="text"  onChange={(e)=>{setVideo({...video,image:e.target.value})}} placeholder="imageurl" className="mb-3"/>
      </FloatingLabel>  
      <FloatingLabel controlId="floatingvideourl" label="Youtube url">
        <Form.Control type="text"  onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} placeholder="Youtube url" className="mb-3"/>
      </FloatingLabel>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitForm}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addvideo