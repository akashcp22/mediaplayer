import React from 'react'

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteVideo } from '../Services/allApis';
import { toast } from 'react-toastify';
import { addHistory } from '../Services/allApis';



function Videocard({video,deletevid}) {
    const [show, setShow] = useState(false);
    const removeVideo=async(id)=>{
      const result=await deleteVideo(id)
      console.log(result);
      if(result.status==200){
        deletevid(result)
        toast.info("video deleted successfully")
      }
      else{
        toast.error("something went wrong!!")
      }
    }
    console.log(video.image);

    const handleClose = () =>{
      setShow(false)
    } 
    const handleShow = async() =>{
      const dt=new Date()
      const data={videoId:video.id,videoUrl:video.videoUrl,datetime:dt}
      const res=await addHistory(data)
      console.log(res)
    
      setShow(true)

    } ;
  const handleDrag=(ev,val)=>{
    console.log("dragging..");
    console.log(val);
    ev.dataTransfer.setData('video',JSON.stringify(val))
  }
  return (
    <div className='mb-5'>
       <Card style={{ width: '18rem' }} draggable="true" onDragStart={(e)=>{handleDrag(e,video)}}>
      <Card.Img  variant="top" onClick={handleShow} src={video?.image} />
      <Card.Body>
        <Card.Title>{video.caption}</Card.Title>
        <Card.Text>
       <Button variant='info' onClick={()=> {removeVideo(video.id)}}>Delete</Button>
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Videocard
