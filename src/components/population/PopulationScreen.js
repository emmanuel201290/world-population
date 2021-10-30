import React from 'react';
import { BodyInformation } from '../body/BodyInformation';
import { FootInformation } from '../foot/FootInformation';

export const PopulationScreen = () => {
    return (
        <div className="population__main-content">
            <BodyInformation />
            <FootInformation />
        </div>
    );
};
