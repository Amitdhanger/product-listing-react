import "./Pages.scss"
import React from "react";
class Earphones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          productName: "Bose NoiseCancelling Headset",
          productPrice: " 200",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/headphone/0/a/m/quietcomfort-45-bose-original-imageuhx2zjj3yzw.jpeg?q=70",
        },

        {
          id: 2,
          productName: "Bose QuiteComfort 45",
          productPrice: " 200",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/headphone/o/l/3/quietcomfort-45-bose-original-imageuhwmwhh9cqn.jpeg?q=70",
        },

        {
          id: 3,
          productName: "Bose QuiteComfort 45 ",
          productPrice: " 200",
          Currency: "$",

          productImg:"https://rukminim1.flixcart.com/image/612/612/krs40i80/headphone/e/w/f/noise-cancelling-700-bose-original-imag5gf6fvuaggz4.jpeg?q=70",
        },

        {
          id: 4,
          productName: "Bose Noise Cancelling 700",
          productPrice: " 200",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/krs40i80/headphone/6/s/q/noise-cancelling-700-bose-original-imag5gf6uyakqjgg.jpeg?q=70",
        },

        {
          id: 5,
          productName: "Bose QuietComfort 35",
          productPrice: " 200",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/j9d3bm80/headphone/z/s/f/bose-quietcomfort-35-ii-original-imaeyzzctgygz4pf.jpeg?q=70",
        },

        {
          id: 6,
          productName: "Bose Wireless InEar NeckBand",
          productPrice: " 200",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/g/x/s/bluetooth5-0-24-hours-music-talk-time-60-hours-stand-by-time-original-imagh4szqvgvbhqc.jpeg?q=70",
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

export default Earphones