import React, { useEffect } from "react";

const RzpBtn = () => {
  useEffect(() => {
    // Function to dynamically load the Razorpay script
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.dataset.payment_button_id = "pl_Ot2CBJHibTGm5r"; // Replace with your actual payment button ID
      script.async = true;
      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    };

    loadRazorpayScript();
  }, []);

  return (
    <form>
      <script
        src="https://checkout.razorpay.com/v1/payment-button.js"
        data-payment_button_id="pl_Ot2CBJHibTGm5r" // Replace with your actual payment button ID
        async
      ></script>
    </form>
  );
};

export default RzpBtn;
