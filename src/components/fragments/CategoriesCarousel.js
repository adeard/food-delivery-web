import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import ProductBox from '../elements/ProductBox';
import { getAllCategory } from '../../api/category.service';

const CategoriesCarousel = () => {

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getAllCategory((status, result) => {
			if (status) {
				setCategories(result)
			} else {
				console.log(result)
			}
		})	
	})

	
    return (
		<OwlCarousel nav loop {...options} className="owl-carousel-category owl-theme">
			{categories.length > 0 && categories.map((category) => (
                <div className="item" key={category.id}>
					<ProductBox 
						key={category.id}
						boxClass='osahan-category-item'
						title={category.name}
						image={category.image}
						imageClass='img-fluid'
						imageAlt='carousel'
						linkUrl='#'
					/>
				</div>
            ))}  
		</OwlCarousel>
	);
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