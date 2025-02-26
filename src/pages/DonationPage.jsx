import React, { useState } from "react";
import { motion } from "framer-motion";

const DonationPage = () => {
  const [amount, setAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleDonate = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_live_9ae04f65d419dcdaef56cd78ff8b757957ae31c9",
      email: "nessacandlelightfoundation@gmail.com",
      amount: amount * 100,
      currency: "GHS",
      ref: "donation-" + Math.floor(Math.random() * 1000000),
      metadata: {
        donationType: isRecurring ? "Recurring" : "One-time",
      },
      callback: function (response) {
        if (response.status === "success") {
          setThankYouMessage("Thank you for your donation!");
        } else {
          setThankYouMessage("Donation failed. Please try again.");
        }
      },
      onClose: function () {
        alert("Payment window closed!");
      },
    });

    handler.openIframe();
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-40 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Make a Donation
        </h1>
        <motion.div
          className="w-[120px] mx-auto rounded border-b-4 border-purple-600 mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your donations help us continue our mission to support those in need.
        </motion.p>

        <motion.div
          className="max-w-lg mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount (GHS)"
            className="p-3 rounded border border-gray-300 w-full mb-4"
          />

          <div className="flex items-center justify-center mb-4">
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={() => setIsRecurring(!isRecurring)}
              className="mr-2"
            />
            <label className="text-lg text-gray-600">
              Set up recurring donation
            </label>
          </div>
        </motion.div>

       
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            How Your Donation Helps
          </h3>
          <ul className="text-lg text-gray-600">
            <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
              GHS 50 provides food for a family for one month.
            </motion.li>
            <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
              GHS 100 funds the education of a child for one term.
            </motion.li>
            <motion.li className="mb-2" whileHover={{ scale: 1.1 }}>
              GHS 500 helps build infrastructure in a rural community.
            </motion.li>
          </ul>
        </motion.div>

    
        <motion.button
          onClick={handleDonate}
          className="bg-purple-600 text-white p-3 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Donate Now
        </motion.button>

   
        {thankYouMessage && (
          <motion.div
            className="mt-8 text-xl font-semibold text-green-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {thankYouMessage}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DonationPage;
