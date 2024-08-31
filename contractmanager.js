import React, { useState } from 'react';
import './ContractManager.css';

const ContractManager = () => {
    const [contractData, setContractData] = useState({
        farmerName: '',
        farmerAddress: '',
        farmerContact: '',
        buyerName: '',
        buyerAddress: '',
        buyerContact: '',
        product: '',
        quantity: '',
        quality: '',
        deliveryDate: '',
        landLocation: '',
        landOwnership: '',
        seeds: '',
        technicalSupport: '',
        pricing: '',
        paymentTerms: '',
        advancePayment: '',
        deliveryLocation: '',
        arbitrationRules: '',
        governingLaw: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContractData({
            ...contractData,
            [name]: value,
        });
    };

    const handleContractSubmit = (e) => {
        e.preventDefault();
        console.log("Contract Data: ", contractData);
    };

    return (
        <div className="contract-manager">
            <h2>Fill Details for Contracts</h2>
            <form onSubmit={handleContractSubmit}>
                <h3>Party 1: The Farmer</h3>
                <input
                    type="text"
                    name="farmerName"
                    placeholder="Farmer's Full Name"
                    value={contractData.farmerName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="farmerAddress"
                    placeholder="Farmer's Address"
                    value={contractData.farmerAddress}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="farmerContact"
                    placeholder="Farmer's Contact Information"
                    value={contractData.farmerContact}
                    onChange={handleChange}
                    required
                />

                <h3>Party 2: The Buyer</h3>
                <input
                    type="text"
                    name="buyerName"
                    placeholder="Buyer's Full Name/Company Name"
                    value={contractData.buyerName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="buyerAddress"
                    placeholder="Buyer's Address"
                    value={contractData.buyerAddress}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="buyerContact"
                    placeholder="Buyer's Contact Information"
                    value={contractData.buyerContact}
                    onChange={handleChange}
                    required
                />

                <h3>1. Scope of Agreement</h3>
                <input
                    type="text"
                    name="product"
                    placeholder="Product (e.g., wheat, rice)"
                    value={contractData.product}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="quantity"
                    placeholder="Quantity (in kg/tons)"
                    value={contractData.quantity}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="quality"
                    placeholder="Quality Specifications"
                    value={contractData.quality}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="deliveryDate"
                    value={contractData.deliveryDate}
                    onChange={handleChange}
                    required
                />

                <h3>2. Land Details</h3>
                <input
                    type="text"
                    name="landLocation"
                    placeholder="Land Location"
                    value={contractData.landLocation}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="landOwnership"
                    placeholder="Land Ownership"
                    value={contractData.landOwnership}
                    onChange={handleChange}
                    required
                />

                <h3>3. Input and Support</h3>
                <input
                    type="text"
                    name="seeds"
                    placeholder="Seeds and Fertilizers Provided by Buyer"
                    value={contractData.seeds}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="technicalSupport"
                    placeholder="Technical Support Provided"
                    value={contractData.technicalSupport}
                    onChange={handleChange}
                    required
                />

                <h3>4. Pricing and Payment</h3>
                <input
                    type="text"
                    name="pricing"
                    placeholder="Pricing (Currency/Unit)"
                    value={contractData.pricing}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="paymentTerms"
                    placeholder="Payment Terms"
                    value={contractData.paymentTerms}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="advancePayment"
                    placeholder="Advance Payment (if any)"
                    value={contractData.advancePayment}
                    onChange={handleChange}
                />

                <h3>5. Delivery and Acceptance</h3>
                <input
                    type="text"
                    name="deliveryLocation"
                    placeholder="Delivery Location"
                    value={contractData.deliveryLocation}
                    onChange={handleChange}
                    required
                />

                <h3>7. Dispute Resolution</h3>
                <input
                    type="text"
                    name="arbitrationRules"
                    placeholder="Arbitration Rules"
                    value={contractData.arbitrationRules}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="governingLaw"
                    placeholder="Governing Law"
                    value={contractData.governingLaw}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit Contract</button>
            </form>
        </div>
    );
};

export default ContractManager;
