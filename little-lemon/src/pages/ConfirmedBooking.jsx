import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../components/commons/Text';
import Title from '../components/commons/Title';
import { logo } from '../utilities/images';
import { devices } from '../utilities/constantes';

const ComfirmedBookingContainer = styled.div`
    background: #edefee;
    padding: 10rem 15rem 5rem 15rem;
    margin: 10rem;
    display: block;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 0 0.5rem #fff;
    border-radius: 2%;

    @media only screen and (${devices.mobileP}) {
        padding: 25rem 3rem 25rem 3rem !important;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 25rem 3rem 25rem 3rem !important;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 25rem 3rem 25rem 3rem !important;
    }
`;

const ContainerImg = styled.div`
    display: flex;
`;

const Img = styled.img`
    width: 800px;
    height: 200px;
`;

function ConfirmedBooking() {
    
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, [navigate]); 

     return (
         <>
             <ComfirmedBookingContainer>
                 <ContainerImg className="container-img">
                     <Img
                         src={logo}
                         alt="img-responsive"
                     />
                 </ContainerImg>
                 <Title
                     title="Your Revervation was confirmed."
                     lineHeight="13rem"
                     color="#495E57"
                     fontSize="30px"
                     letterSpace="0.3rem"
                 />{' '}
                 <Text
                     text="NOTE: Please Check if you receive arrival instructions on your mobile. We waiting and excited to serve you!!"
                     sizeText="53rem"
                     color="#495E57"
                     lineHeight="4rem"
                 />
                 <Title
                     title="Thank you for your preference."
                     lineHeight="10rem"
                     color="#495E57"
                     fontSize="28px"
                     letterSpace="0.3rem"
                 />
             </ComfirmedBookingContainer>
         </>
     );
}


export default ConfirmedBooking