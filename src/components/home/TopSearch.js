import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form} from 'react-bootstrap';
import Select2 from 'react-select2-wrapper';
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel3';
import ProductBox from './ProductBox';

import CategoriesCarousel from '../common/CategoriesCarousel';

class TopSearch extends React.Component {

	render() {
    	return (
	      <section className="pt-5 pb-5 homepage-search-block position-relative">
	         <div className="banner-overlay"></div>
	         <Container>
	            <Row className="d-flex align-items-center">
	               <Col md={8}>
	                  <div className="homepage-search-title">
	                     <h1 className="mb-2 font-weight-normal"><span className="font-weight-bold">Temukan tempat favorit makanmu</span> di sekitarmu</h1>
	                     <h5 className="mb-5 text-secondary font-weight-normal">Pesan makanmu sekarang !</h5>
	                  </div>
	                  <div className="homepage-search-form">
	                     <Form className="form-noborder">
	                        <div className="form-row">
	                           <Form.Group className='col-lg-3 col-md-3 col-sm-12'>
	                              <div className="location-dropdown">
	                              	 <Icofont icon='location-arrow'/>
	                                 <Select2 className="custom-select"
		                                 data={[
										    { text: 'Sarapan', id: 1 },
										    { text: 'Makan Siang', id: 2 },
										    { text: 'Makan Malam', id: 3 },
										    { text: 'Pesan Antar', id: 4 }
										  ]}
										  options={{
										    placeholder: 'Pencarian',
										  }}
	                                 />
	                              </div>
	                           </Form.Group>
	                           <Form.Group className='col-lg-7 col-md-7 col-sm-12'>
	                              <Form.Control type="text" placeholder="Masukkan Alamat Tujuan" size='lg' />
	                              <Link className="locate-me" to="#"><Icofont icon='ui-pointer'/> Cek Lokasi</Link>
	                           </Form.Group>
	                           <Form.Group className='col-lg-2 col-md-2 col-sm-12'>
	                              <Link to="listing" className="btn btn-primary btn-block btn-lg btn-gradient">Cari</Link>
	                           </Form.Group>
	                        </div>
	                     </Form>
	                  </div>
	                  <h6 className="mt-4 text-shadow font-weight-normal">E.g. Beverages, Pizzas, Chinese, Bakery, Indian...</h6>
	                  <CategoriesCarousel />
	               </Col>
	               <Col md={4}>
	                  <div className="osahan-slider pl-4 pt-3">
	                     <OwlCarousel nav loop {...options2} className="homepage-ad owl-theme">
	                        <div className="item">
								<ProductBox 
							   		image='img/promo1.png'
							   		imageClass='img-fluid rounded'
							   		imageAlt='carousel'
							   		linkUrl='listing'
							   	/>
	                        </div>
	                        <div className="item">
								<ProductBox 
							   		image='img/promo2.png'
							   		imageClass='img-fluid rounded'
							   		imageAlt='carousel'
							   		linkUrl='listing'
							   	/>
	                        </div>
	                        <div className="item">
								<ProductBox 
							   		image='img/promo3.png'
							   		imageClass='img-fluid rounded'
							   		imageAlt='carousel'
							   		linkUrl='listing'
							   	/>
	                        </div>
	                     </OwlCarousel>
	                  </div>
	               </Col>
	            </Row>
	         </Container>
	      </section>
	    );
	}
}

const options2={
	responsive: {
        0:{
            items:2,
        },
        764:{
            items:2,
        },
        765: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
      lazyLoad: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      autoplayTimeout: 2000,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoplayHoverPause: true,
}

export default TopSearch;