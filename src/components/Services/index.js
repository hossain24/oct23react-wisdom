import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-6.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Explore</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Think Wise</ServicesH2>
                    <ServicesP>There is no ending of knowing.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Think Wise</ServicesH2>
                    <ServicesP>There is no ending of knowing.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Think Wise</ServicesH2>
                    <ServicesP>There is no ending of knowing.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;
