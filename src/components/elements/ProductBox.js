import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; 
import {Image} from 'react-bootstrap';

const ProductBox = (props) => {
    return (
        <div className={props.boxClass}>
            <Link to={props.linkUrl}>
                <Image src={props.image} className={props.imageClass} alt={props.imageAlt} />
                {props.title?<h6>{props.title}</h6>:""}
                {props.counting?<p>{props.counting}</p>:""}
            </Link>
        </div>
	);
}

ProductBox.propTypes = {
    linkUrl: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageClass: PropTypes.string,
    imageAlt: PropTypes.string,
    boxClass: PropTypes.string,
    title: PropTypes.string,
    counting: PropTypes.string,
};

ProductBox.defaultProps = {
  	imageAlt:'',
    image:'',
    imageClass:'',
    linkUrl: '',
    boxClass:'products-box',
    title:'',
    counting:'',
}

export default ProductBox;