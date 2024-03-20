import React, { useState, useEffect } from "react";
import axios from "axios";

const IPAddress = () => {
  const [ipAddress, setIPAddress] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const ipAddress = ipResponse.data.ip;
        setIPAddress(ipAddress);

        const countryResponse = await axios.get(
          `http://ip-api.com/json/${ipAddress}`
        );
        const country = countryResponse.data.country;
        setCountry(country);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchIPAddress();

    // Cleanup function to prevent memory leaks
    return () => {
      // cleanup code
    };
  }, []);

  return (
    <div>
      {/* <p>Your IP Address: {ipAddress}</p> */}
      <p> {country}</p>
    </div>
  );
};

export default IPAddress;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductComponent = () => {
//   const [ipInfo, setIpInfo] = useState(null);
//   const [defaultPrice, setDefaultPrice] = useState(null);
//   const [adjustedPrice, setAdjustedPrice] = useState(null);

//   useEffect(() => {
//     // Fetch IP address and user's country
//     const fetchIpInfo = async () => {
//       try {
//         const response = await axios.get('https://api.ipify.org/?format=json');
//         const ipAddress = response.data.ip;
//         const countryResponse = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
//         const country = countryResponse.data.country_name;
//         setIpInfo({ ipAddress, country });
//       } catch (error) {
//         console.error('Error fetching IP information:', error);
//       }
//     };

//     fetchIpInfo();
//   }, []);

//   useEffect(() => {
//     // Fetch default product price
//     const fetchDefaultPrice = async () => {
//       try {
//         const response = await axios.get('your_default_product_price_endpoint');
//         setDefaultPrice(response.data.price);
//       } catch (error) {
//         console.error('Error fetching default product price:', error);
//       }
//     };

//     fetchDefaultPrice();
//   }, []);

//   useEffect(() => {
//     // Adjust price based on country
//     if (defaultPrice && ipInfo) {
//       // You can define your own logic here to adjust price based on country
//       let adjustedPriceValue = defaultPrice; // Default to defaultPrice if no adjustment needed
//       if (ipInfo.country === 'United States') {
//         adjustedPriceValue = defaultPrice * 1.1; // Increase price by 10% for US
//       } else if (ipInfo.country === 'United Kingdom') {
//         adjustedPriceValue = defaultPrice * 1.2; // Increase price by 20% for UK
//       }
//       setAdjustedPrice(adjustedPriceValue);
//     }
//   }, [defaultPrice, ipInfo]);

//   return (
//     <div>
//       {ipInfo && (
//         <div>
//           <p>IP Address: {ipInfo.ipAddress}</p>
//           <p>User's Country: {ipInfo.country}</p>
//         </div>
//       )}
//       {defaultPrice && (
//         <div>
//           <p>Default Product Price: {defaultPrice}</p>
//           {adjustedPrice && <p>Adjusted Price: {adjustedPrice}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductComponent;
