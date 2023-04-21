import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

function Form() {
  let[data,setData]=useState({name:"",comment:""})
let[input,setInput]=useState([])
let[comment,setComment]=useState('')

  let change=(e)=>{
    const name = e.target.name;
    const value = e.target.value
    setData({...data,[name]:value})
  }

  let submit=(e)=>{
    e.preventDefault()
    console.log(data)
    setInput(data.name)
    setComment(data.comment)
   
  }
    return (
        <div>
            <SimpleGrid minChildWidth='120px' spacing='40px'>
                <Box bg='black' padding={"20px"}>
                    <form onSubmit={submit}>
                        <input type="text" placeholder='Enter your name'value={data.name} name='name'onChange={change} required/>
                        <input type="number" placeholder='Enter your Number' required/>
                        <input type="email" placeholder='Enter your Email' required />
                        <input type="password" placeholder='Enter your Password'  required/>
                        <input type="text" placeholder='Comment' value={data.comment} name='comment' onChange={change} required/><br/>
                       <input type="submit" className='button'/>
                    </form>
                </Box>
                <Box bg="black" color={"white"} textAlign={"left"} padding={"20px"}>
                  <form onSubmit={submit}>
                  <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="" />
                    <h1>title : iPhone X</h1>
                    <h1>price : 899</h1>
                    <h1>discountPercentage : 17.94</h1>
                    <h1>rating : 4.44</h1>
                    <h1>stock : 34</h1>
                    {input.length>0 ? <h1>Name : {input}</h1> :null }
                    {comment.length>0 ? <h1>comment : {comment}</h1> :null }
                   </form>
                    
                </Box>
                
            </SimpleGrid>
        </div>
    )
}

export default Form