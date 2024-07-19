import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { deleteCategory, getcategories, getSpecificCategory, updateCategory } from '../Services/allApis'
import { toast } from 'react-toastify'


function Categorylist(addcat) {
  const[categories,setCategories]=useState([])

  useEffect(()=>{
    getData()
  
  },[addcat])
  const getData=async()=>{
  const cat =await getcategories()
  setCategories(cat.data)
}

  const deleteCat = async (id) => {
    const rep = await deleteCategory(id)
    if (rep.status === 200) {
        getcategories()
        toast.success('category deleted successfully')
        getData()
    } else {
        toast.info('something went wrong')
        console.log(rep)
    }
}
const DragOver=(ev)=>{
  ev.preventDefault()
  console.log("dragging over");
}
const handleDrop=async(ev,val)=>{
  ev.preventDefault()
  console.log("dropping")
const catId=val

  const data=JSON.parse(ev.dataTransfer.getData("video"))
  console.log(data);
  const res=await getSpecificCategory(catId)
  const category=res.data
  category.catVideos.push(data)
  console.log(category);
  const resp=await updateCategory(catId,category)
  console.log(resp);
  if(resp.status==200){
    toast.success("category added")
  }
  else{
    toast.error("something went wrong")
  }
}
 


  return (
    <div>
      <div className='w-100'>

      
      {categories.length > 0?
      <div className='border d-flex justify-content-between mt-2'> 
        {categories.map(item=>(
         <div className=' w-100 d-flex justify-content-between' onDragOver={(e)=>{DragOver(e)}} onDrop={(e)=>handleDrop(e,item.id)}>
           <h4>{item.catName}</h4>
           <Button variant="danger" className='' onClick={() => { deleteCat(item.id) }} >🗑</Button>
           div
         </div>
        ))}
        
      </div>
      :
      <h2>No categories Available</h2>
}
</div>
    </div>
  )
}

export default Categorylist
