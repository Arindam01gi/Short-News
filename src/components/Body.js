import React from 'react'
import Card from './Card'

const Body = ({body}) => {
  return (
     <>
     <div className='flex text-left justify-center'>
     <Card key={body.title} props= {body}/>
     </div>
        
     </>
  )
}

export default Body
