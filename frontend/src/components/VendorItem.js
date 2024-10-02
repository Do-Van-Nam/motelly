import React, { useContext, useState } from 'react';
import api from '../api';
import { AppContext } from '../AppContext';


export default function VendorItem({ props }) {

  return (

    <div className='m-2  bg-body-tertiary  position-relative'
  style={{ height: '478px', width: '300px' }}>
  
  <button className='btn rounded-circle position-absolute top-0 end-0 d-flex justify-content-center align-items-center me-1 mt-1'
    style={{ backgroundColor: 'white', zIndex: '999', height: '30px', width: '30px' }}>
    <i className="bi bi-heart"></i>
  </button>

  <div id="photoCarousel" className="carousel slide preview-image-box rounded position-relative" data-bs-ride="carousel"
    style={{ height: '50%', width: '100%' }}>
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner rounded" style={{ height: '100%', width: '100%' }}>
      <div className="carousel-item active" style={{ height: '100%' }}>
        <img src="https://via.placeholder.com/800x400?text=Image+1" className="d-block w-100 h-100" alt="Image 1"
          style={{ objectFit: 'cover' }} />
      </div>
      <div className="carousel-item" style={{ height: '100%' }}>
        <img src="https://via.placeholder.com/800x400?text=Image+2" className="d-block w-100 h-100" alt="Image 2"
          style={{ objectFit: 'cover' }} />
      </div>
      <div className="carousel-item" style={{ height: '100%' }}>
        <img src="https://via.placeholder.com/800x400?text=Image+3" className="d-block w-100 h-100" alt="Image 3"
          style={{ objectFit: 'cover' }} />
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <div className='d-flex justify-content-between p-1'>
    <p style={{ fontSize: '14px', margin: '0' }}>{props.subinfo}</p>
    <p style={{ fontSize: '14px', margin: '0' }}>
      <i className="bi bi-star-fill" style={{ color: '#fbaf00' }}> </i>
      {props.rating} ({props.noReviews})
    </p>
  </div>

  <div className='ms-2' style={{ fontSize: '18px', fontWeight: '600' }}>{props.name}</div>
  <div className='ms-2' style={{ fontSize: '14px', color: '#6c757d' }}>{props.noGuests} khách - {props.price} đ</div>

  <div className='ms-2'
    style={{
      width: '95%',
      height: '80px',
      wordWrap: 'break-word',
      whiteSpace: 'normal',
      overflow: 'hidden',
      position: 'relative',
      fontSize: '14px',  
      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
    }}>
    {props.description}
  </div>

  <button type="button" className="btn btn-lg rounded-pill position-absolute bottom-0"
    style={{
      backgroundColor: '#ff44cb',
      color: 'white',
      fontWeight: '500',
      fontSize: '16px', 
      padding: '10px 20px',
      width: '100%'
    }}>
    Liên hệ báo giá
  </button>
</div>

  )
}
