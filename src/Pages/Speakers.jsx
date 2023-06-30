import "./Pages.scss"
import React from "react";
class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          productName: "Bose Soundlink Color Bluetooth Speaker",
          productPrice: "8,999",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/krs40i80/speaker/mobile-tablet-speaker/r/u/y/soundlink-color-ii-bose-original-imag5gf6qznkbxgc.jpeg?q=70",
        },

        {
          id: 2,
          productName: "Bose Soundbar With Wi-Fi",
          productPrice: "40,999",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/kjx6tu80/speaker/soundbar/n/a/c/smart-soundbar-300-bose-original-imafzdp7fxfg6fnf.jpeg?q=70",
        },

        {
          id: 3,
          productName: "Bose Soundlink Flex With Ipx67 ",
          productPrice: "15,900",
          Currency: "$",

          productImg:"https://rukminim1.flixcart.com/image/612/612/l44hyfk0/speaker/party-speaker/y/l/w/soundlink-flex-bose-original-imagf39wtauphfhw.jpeg?q=70",
        },

        {
          id: 4,
          productName: "Bose Soundlink Flex With Ipx67",
          productPrice: "15,900",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/l44hyfk0/speaker/party-speaker/l/m/k/soundlink-flex-bose-original-imagf39wwe7ddeuz.jpeg?q=70",
        },

        {
          id: 5,
          productName: "Bose TV/KR/IN Bluetooth Soundbar",
          productPrice: "25,499",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/kar44280/speaker/soundbar/g/l/c/tv-kr-in-th-bose-original-imafs95tujfehrgc.jpeg?q=70",
        },

        {
          id: 6,
          productName: "Bose SoundLink Revolve",
          productPrice: "24,499",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/krs40i80/speaker/mobile-tablet-speaker/0/f/q/soundlink-revolve-ii-bose-original-imag5gf6mpfqftx5.jpeg?q=70",
        },
      ],
    };
  }

  render() {
    return (
      <>

        <div className="container-product">
          {this.state.productList.map((list) => (
            <div key={list.id} className="productlist">
              <div className="img"><img src={list.productImg} alt="bose-item" /></div>
              <div className="card-header">
                <h2>{list.productName}</h2>
                <p className="price">{list.productPrice}<span>{list.Currency}</span></p>
                <div className="button">Add to Cart</div>
              </div>
            
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Speakers