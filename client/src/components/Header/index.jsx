import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
import image1 from './images/1.webp'
import image2 from './images/2.webp'
import image3 from './images/3.webp'
import './Header.css'



const items=[
{image:image1, title:"25% OFF",paragraph:"Refresh Your Space Sale Now",button:"shop sale"},
{image:image2, title:"IB SHOP",paragraph:"Catch These Styles Before They're Gone !",button: "view more"},
{image:image3, title:"furniture",paragraph: "Get All The Good Stuff",button:"view more"},
]
const Header = () => {
  return(
  <Carousel fade>
    {items.map((item,i)=>
    
   <Carousel.Item key={i}>
    <img
      className="d-block w-100"
      src={item.image}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>{item.title}</h3>
      <p>{item.paragraph}</p>
      <Button className='btn-bold' variant="outline-primary">{item.button}</Button>
    </Carousel.Caption>
  </Carousel.Item>
    )}
  
</Carousel>)
};

export default Header;