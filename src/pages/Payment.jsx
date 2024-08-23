import react from "react";


const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:/", {
        method: "POST",
        body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export default paymentHandler;