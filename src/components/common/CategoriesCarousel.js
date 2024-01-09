import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import ProductBox from '../home/ProductBox';

class CategoriesCarousel extends React.Component {

	render() {
    	return (
	      <OwlCarousel nav loop {...options} className="owl-carousel-category owl-theme">
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Ayam Bakar'
	         		counting='156'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Sehat'
	         		counting='120'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Vegetarian'
	         		counting='130'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Bakso'
	         		counting='120'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Siomay'
	         		counting='111'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Sushi'
	         		counting='958'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Kebab'
	         		counting='56'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Ayam'
	         		counting='40'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	         <div className="item">
	         	<ProductBox 
	         		boxClass='osahan-category-item'
	         		title='Soto'
	         		counting='156'
			   		image='img/list/food1.jpg'
			   		imageClass='img-fluid'
			   		imageAlt='carousel'
			   		linkUrl='#'
			   	/>
	         </div>
	      </OwlCarousel>
	    );
	}
}

const options={
	responsive: {
        0:{
            items:3,
        },
        600:{
            items:4,
        },
        1000: {
          items: 6,
        },
        1200: {
          items: 8,
        },
      },
      loop: true,
      lazyLoad: true,
      autoplay: true,
      dots: false,
      autoplaySpeed: 1000,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}

export default CategoriesCarousel;