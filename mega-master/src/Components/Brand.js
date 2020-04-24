import React from 'react' ;
import "../Components/Brand.css";
import {Container} from 'react-bootstrap';
import brand_db from "../Db/brand.js";

// OwlCarousel
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
//--------------------------------------

const options = {
    items: 7,
    nav: true,
    navText : ['<img src="https://img.icons8.com/small/16/000000/double-left.png"/>','<img src="https://img.icons8.com/small/16/000000/double-right.png"/>'],
    dots: false,
    rewind: false,
    autoplay: true
};

class BrandCarousel extends React.Component {
    constructor(){
        super();

        this.state = {
            brand: brand_db
        }
    }
    render() {
        return (
            <Container className="brand--carousel">
                <OwlCarousel options={options} >
                    {
                        this.state.brand.map(function(brand) {
                            return (
                                <a href={brand.link} key={brand.id}><img src={brand.src} alt={brand.name}/></a>
                            );
                        })
                    }
                </OwlCarousel>
            </Container>
        )
    }
}


class Brand extends React.Component {
    render() {
        return (
            <Container fluid className="brand">
                <BrandCarousel />
            </Container>   
            );
    }
}

export default Brand;