import React from "react";
import "./Payments.scss";

const Payments = ({ payments, selectPayment, history }) => {
  const handlePurchase = (pymnt) => () => {
    selectPayment(pymnt);
    history.push("/checkout");
  };

  return payments.map((pymnt) => (
    <div className="payment" key={pymnt.id}>
      <section>
        <h2>{pymnt.name}</h2>
        <h3>{"$" + pymnt.price}</h3>
        <button type="button" onClick={handlePurchase(pymnt)}>
          PURCHASE
        </button>
      </section>
    </div>
  ));
};

export default Payments;
