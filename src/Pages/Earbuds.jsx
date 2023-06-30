import "./Pages.scss"
import React from "react";
class Earbuds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          productName: "Boult Audio Airbass Earbuds",
          productPrice: "19,990",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/h/c/s/-original-imaga4m8sz5ymcf7.jpeg?q=70",
        },

        {
          id: 2,
          productName: "Boult Audio Z40",
          productPrice: "17,990",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/1/r/k/-original-imagpy8shtj9y3ff.jpeg?q=70",
        },

        {
          id: 3,
          productName: "Bose QuiteComfort Earbuds",
          productPrice: "17,990",
          Currency: "$",

          productImg:"https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/j/n/n/quietcomfort-earbuds-ii-bose-original-imaghgjqh6bryxe2.jpeg?q=70",
        },

        {
          id: 4,
          productName: "Bose Noise Cancelling Earbuds",
          productPrice: "999",
          Currency: "$",

          productImg:"https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/u/0/6/quietcomfort-earbuds-ii-bose-original-imaghgjqhn27eype.jpeg?q=70",
        },

        {
          id: 5,
          productName: "Bose QuietComfort || Earbuds",
          productPrice: " 19,990",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/krs40i80/headphone/s/b/j/quitecomfort-earbuds-bose-original-imag5gf6zspqzh5h.jpeg?q=70",
        },

        {
          id: 6,
          productName: "Bose Sports Workout Earbuds",
          productPrice: " 17,990",
          Currency: "$",

          productImg: "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/x/w/d/nb140-galaxy-50-hours-playtime-deep-bass-fast-charging-true-original-imagpxhhxpbv3m6p.jpeg?q=70",
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

export default Earbuds