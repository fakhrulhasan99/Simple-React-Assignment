import React from 'react';
import { useEffect, useState } from "react";


const Auctions = () => {

    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("bid.json")
            .then((res) => res.json())
            .then((data) => {
                setAuctions(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to load auctions:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    return (
        <div className="p-6">
      

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Items</th>
              <th></th>
              <th>Current Bid ($)</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>

          <tbody>
            {auctions.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.currentBidPrice}</td>
                <td>{item.timeLeft}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Auctions;