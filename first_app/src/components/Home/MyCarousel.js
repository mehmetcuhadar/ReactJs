import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

class MyCarousel extends React.Component{
    render() {
        return(
         <Carousel>
            <Carousel.Item interval={1500}>
                <Card>
                    <Card.Img variant="top" src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?resize=681,383" />
                    <Carousel.Caption>
                        <h3>Netflix</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Card>              
                
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Card>
                    <Card.Img variant="top" src="https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg" />
                    <Carousel.Caption>
                        <h3>Amazon</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Card>
                    <Card.Img variant="top" src="https://cdn.webrazzi.com/uploads/2019/03/blu_hd.jpg" />
                    <Carousel.Caption>
                        <h3>BluTv</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Card>
                    <Card.Img variant="top" src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/66/59/f9/6659f97f-42a4-2da9-39a2-2001492689ca/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.jpg" />
                    <Carousel.Caption>
                        <h3>Bein Connect</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Card>
                    <Card.Img variant="top" src="https://www.webtekno.com/images/editor/default/0002/58/61cd2d52f287186334b93f98881d6424a7de2af1.png" />
                    <Carousel.Caption>
                        <h3>HBO MaX</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Card>
            </Carousel.Item>
        </Carousel>
        )
    }
}


export default MyCarousel ;