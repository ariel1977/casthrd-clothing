import styled from 'styled-components'


export const Container = styled.main`
    margin: 50px 20px
`
export const Heading = styled.h1`
@media screen and (max-width: 767px) {
    font-size: 24px;
}
`

export const Label = styled.label`
    font-weight: 600;
    @media screen and (max-width: 767px) {
        display: block;
        margin-bottom: 5px;
    }
`

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    & > * {
        margin-right: 20px;
        display: block;
        max-width: 100%;
        max-height: 100%;
    }
`