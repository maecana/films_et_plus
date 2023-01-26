// Package / Dependency Import
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const ImageSlider = (props) => {
    let slider_config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
    }


    return (
        <Carousel {...slider_config}>
            <Wrapper>
                <a href="/">
                    <img src="images/slider-1.jpg" alt="Slider 01" />
                </a>
            </Wrapper>

            <Wrapper>
                <a href="/">
                    <img src="images/slider-2.jpg" alt="Slider 02" />
                </a>
            </Wrapper>

            <Wrapper>
                <a href="/">
                    <img src="images/slider-3.jpg" alt="Slider 03" />
                </a>
            </Wrapper>

            <Wrapper>
                <a href="/">
                    <img src="images/slider-4.jpg" alt="Slider 04" />
                </a>
            </Wrapper>
        </Carousel>
    );
};


const Carousel = styled(Slider)`
    margin: 2rem;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5wv;
        height: 100%;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: .8rem;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }
`;

const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 4px;
    
    a {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-radius: .4rem;
        display: block;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
            border-radius: .4rem;

            &:hover {
                padding: 0;
                border: 4px solid rgba(249, 249, 249, 0.8);
                transition-duration: 300ms;
            }
        }
        
    }
`;


export default ImageSlider;
