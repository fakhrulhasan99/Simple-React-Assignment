import React from 'react';
import Auctions from '../Auctions/Auctions';

const ActiveAuctions = () => {


    return (
        <div>
            <div className="px-6 pt-6 mb-6">
                <h2 className="text-3xl font-bold mb-6">Active Auctions</h2>
                <p>Discover and bid on extraordinary items</p>
            </div>
            <div>
                <Auctions></Auctions>
            </div>
        </div>
    );
};

export default ActiveAuctions;