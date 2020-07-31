import React from 'react'
import {Container, Heading, Label, SocialMediaContainer} from './contact.styles'
import FacebookLogo from '../../assets/facebook.svg'
import InstagramLogo from '../../assets/instagram.svg'
import TwitterLogo from '../../assets/twitter.png'
const Contact = props => {
    return (
        <Container>
            <Heading>Need help? Contact us!</Heading>
            <p><Label>Email:</Label> casthrdclothing@gmail.com</p>
            <p><Label>Phone:</Label> 702-250-0000</p>
            <p><Label>Address:</Label> 123 Any St Las Vegas, NV 89101</p>
            <div><Label>Social media:</Label>
                <SocialMediaContainer>
                    <img src={FacebookLogo} alt="Facebook logo" />
                    <img src={InstagramLogo} alt="Instagram logo" />
                    <img src={TwitterLogo} alt="Twitter logo" />
                </SocialMediaContainer>
            </div>
        </Container>
    )
}

export default Contact