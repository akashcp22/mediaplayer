import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addCategory } from '../Services/allApis';
import Categorylist from './Categorylist';

function Category() {
  const[addCat,setAddCat]=useState("")
  const[category,setCategory]=useState({
    catId:"",
    catName:"",
    catVideos:[]
  })
  const submitForm=async()=>{
    const {catId,catName}=category
    console.log(category);
    if(! catId ||!catName){
      toast.info("invalid inputs")
    }
    else{
      const res=await addCategory(category)
      if(res.status==201){
        toast.success("category added!!")
        handleClose()
        setAddCat(addCat)
        setCategory({
          catId:"",catName:"",catVideos:[]
        })
      }
      else{
        toast.error("category not added!")
      }
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='d-grid'>
      <Button onClick={handleShow} className="btn btn success " >Add category</Button>
  
      </div>
      <Categorylist addcat={addCat}/>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="categoryID" label="Video ID" className="mb-3"
      >
        <Form.Control  onChange={(e)=>{setCategory({...category, catId:e.target.value})}} type="text" placeholder="ID" />
      </FloatingLabel>
      <FloatingLabel controlId="categoryNme" label="Category Name">
        <Form.Control  onChange={(e)=>{setCategory({...category,catName:e.target.value})}} type="text" placeholder="category" />
      </FloatingLabel>

     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={submitForm} variant="primary">submit</Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  )
}

export default Category
