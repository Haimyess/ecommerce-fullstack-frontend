/** @format */

// /** @format */

import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

import { useForm } from "react-hook-form";

import logo from "../media/images/Shopy-logo.png";

import "../styles/checkout.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function Checkout() {
  const {
    cart,
    setCart,
    shipping,
    taxInterest,
    subTotalPrice,
    taxes,
    totalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // getValues,
    watch,
    formState: { errors },
  } = useForm();

  const [orderData, setOrderData] = useState([]);
  const [
    firstname,
    lastname,
    address,
    email,
    phone,
    cardnumber,
    expmonth,
    expyear,
    cvv,
  ] = watch([
    "firstname",
    "lastname",
    "address",
    "email",
    "phone",
    "cardnumber",
    "expmonth",
    "expyear",
    "cvv",
  ]);

  // console.log(firstName === "");

  // const dateOfPurchase = new Date();
  // console.log(dateOfPurchase);

  const [disable, setDisable] = useState(false);

  // const multipleValues = getValues("firstName");

  // const name = getValues("firstName");

  return (
    <div className='container'>
      <header className='checkout-header '>
        <Link to='/'>
          <div>
            <img className='logo-home' src={logo} alt='' />
          </div>
        </Link>
        <p>
          <Link className='return-cart' to='/cart'>
            Return To Cart
          </Link>
        </p>
      </header>

      <h4 className='title'>Contact info</h4>
      <section className='checkout-wrapper'>
        <main className='form-wrapper'>
          <form
            id='checkout-form'
            className='form-container'
            onSubmit={handleSubmit((order) => {
              console.log(order);

              fetch("/api/order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
              })
                .then((res) => res.json())
                .then((data) => {
                  setOrderData(data);
                })
                .catch((err) => {
                  // setErrorMsg(err);
                  console.log(err);
                });

              navigate("/thanks");
              // setShow(true); // show modal
            })}>
            <div className='join-container'>
              <div className='grow-container'>
                <label> First Name:</label>
                <input
                  type='text'
                  placeholder='First name'
                  {...register("firstname", {
                    required: "This is required",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Only letters allowed",
                    },
                    minLength: {
                      value: 2,
                      message: "Min 2 characters",
                    },
                  })}
                />
                <p className='err-val-msg'>{errors.firstname?.message}</p>
              </div>

              <div className='grow-container'>
                <label> Last Name</label>
                <input
                  className='join-margin'
                  type='text'
                  placeholder='Last name'
                  {...register("lastname", {
                    required: "This is required",
                    pattern: /^[A-Za-z]+$/i,
                    minLength: {
                      value: 2,
                      message: "Min 2 characters",
                    },
                  })}
                />
                <p className='err-val-msg'> {errors.lastname?.message}</p>
              </div>
            </div>

            <div className='grow-container margin-bot'>
              <label> Address: </label>
              <input
                type='text'
                placeholder='Address'
                {...register("address", {
                  required: "This is required",
                })}
              />
              <p className='err-val-msg'> {errors.address?.message}</p>
            </div>

            <div className='join-container'>
              <div className='grow-container'>
                <label> Email: </label>
                <input
                  type='email'
                  placeholder='Email'
                  {...register("email", {
                    required: "This is required",
                    minLength: {
                      value: 2,
                      message: "Min 2 characters",
                    },
                  })}
                />
                <p className='err-val-msg'> {errors.email?.message}</p>
              </div>
              <div className='grow-container'>
                <label> Phone: </label>
                <input
                  className='join-margin'
                  type='number'
                  placeholder='Phone'
                  {...register("phone", {
                    required: " * This is required",
                    minLength: {
                      value: 2,
                      message: " * Min 2 characters",
                    },
                  })}
                />
                <p className='err-val-msg'> {errors.phone?.message}</p>
              </div>
            </div>

            <h5 className='title'>Payment</h5>
            {/* <label>Card number</label> */}
            <div className='payment-container'>
              <div className='grow-container cardnumber-container'>
                <label> Card Number: </label>
                <input
                  type='text'
                  maxLength={16}
                  placeholder='1234 1234 1234 1234'
                  {...register("cardnumber", {
                    required: "This is required",
                    maxLength: {
                      value: 16,
                      message: "Max 16 characters",
                    },
                  })}
                />
                <p className='err-val-msg'> {errors.cardnumber?.message}</p>
              </div>
              <div className='card-container'>
                <div className='grow-container'>
                  <label> Month: </label>
                  <input
                    type='number'
                    maxLength={2}
                    placeholder='MM'
                    {...register("expmonth", {
                      required: "This is required",
                      maxLength: {
                        value: 2,
                      },
                    })}
                  />
                  <p className='err-val-msg'>{errors.expmonth?.message}</p>
                </div>
                <div className='grow-container'>
                  <label>Year: </label>
                  <input
                    type='number'
                    placeholder='YY'
                    {...register("expyear", {
                      required: " * This is required",
                      max: {
                        value: 2,
                        message: "* Max 2 numbers",
                      },
                    })}
                  />
                  <p className='err-val-msg'> {errors.expyear?.message}</p>
                </div>
                <div className='grow-container'>
                  <label> CVV: </label>
                  <input
                    type='password'
                    placeholder='123'
                    {...register("cvv", {
                      required: " * This is required",
                      maxLength: {
                        value: 3,
                      },
                    })}
                  />
                  <p className='err-val-msg'>{errors.cvv?.message}</p>
                </div>
              </div>
            </div>
          </form>
        </main>

        {/* ASIDE */}
        <aside className='summary-wrapper'>
          <div className='summary-container'>
            {/* <MDBCol md='4' className='mb-4'>
            <MDBCard className='mb-4'> */}
            <MDBCardHeader className='py-3'>
              <h5 className='summary-title'>Summary</h5>
            </MDBCardHeader>

            <MDBCardBody>
              <MDBListGroup flush>
                {cart.map((product) => {
                  return (
                    <div className='checkout-products' key={product.product_id}>
                      <p>{product.product_name}</p>
                      <p>Qty {product.quantity} </p>
                      <p>$ {product.product_price}</p>
                      {/* <p>{product.product_name}</p> */}
                    </div>
                  );
                })}
                <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                  Subtotal
                  <span>${subTotalPrice}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                  Shipping
                  <span>${shipping}</span>
                </MDBListGroupItem>
                <hr className='my-2'></hr>
                <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className='mb-0'>(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>${totalPrice}</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <div className='checkout-btn-container'>
              <input
                // className={`${!disable ? "input-disabled" : "checkout-btn"}`}
                className='checkout-btn'
                type='submit'
                form='checkout-form'
                value='Place order'
                disabled={
                  (firstname &&
                    lastname &&
                    address &&
                    email &&
                    phone &&
                    cardnumber &&
                    expmonth &&
                    expyear &&
                    cvv) === ""
                    ? !disable
                    : disable
                  // firstName === ""
                }
              />
            </div>
          </div>
        </aside>
      </section>

      {/* Email */}
      {/* Phone */}
      {/* name on card */}
      {/* card number */}
      {/* card exp */}
      {/* card code */}
    </div>
  );
}

// import React, { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../contexts/CartContext";
// import { useLocation } from "react-router";

// import { useForm, Controller } from "react-hook-form";
// // import { validFirstName, validEmail } from "../Regex";

// import "../pages/styles/checkout.css";

// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardHeader,
//   MDBCheckbox,
//   MDBCol,
//   MDBContainer,
//   MDBInput,
//   MDBRow,
//   MDBRadio,
//   MDBBtn,
//   MDBListGroup,
//   MDBListGroupItem,
// } from "mdb-react-ui-kit";

// // Product
// // Qty product
// // Shipping cost
// // total

// export default function Checkout(props) {
//   const {
//     cart,
//     setCart,
//     shipping,
//     taxInterest,
//     subTotalPrice,
//     taxes,
//     totalPrice,
//   } = useContext(CartContext);

//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const Controller = ({ control, name, rules, register, render }) => {
//     const props = register(name);
//     return render();
//   };

//   // useEffect(() => {
//   //   const products = JSON.parse(localStorage.getItem("product"));
//   //   if (products) {
//   //     setCart(products);
//   //   }
//   // }, []);

//   // console.log(cart);

//   // const data = useLocation();

//   // console.log(data);

//   // const shipping = 20;
//   // const [details, setDetails] = useState({
//   //   firstName: "",
//   // lastName: '',
//   // });
//   // Personal details
//   // console.log(firstName);

//   // name : show just letter and minimum char

//   const [firstName, setFirstName] = useState("");
//   const [errFirstName, setErrFirstName] = useState("");

//   // console.log(firstName);

//   const [lastName, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");

//   // email : check format
//   const [email, setEmail] = useState("");
//   const [errEmail, setErrEmail] = useState("");

//   // Card details
//   const [cardNumber, setCardNumber] = useState("");
//   const [nameOnCard, setNameOnCard] = useState("");
//   const [cardExpiration, setCardExpiration] = useState("");
//   const [cardSecret, setCardSecret] = useState("");

//   const [disable, setDisable] = useState(false);

//   // const [sum, setSum] = useState('')

//   // {sum && <p>Hello</p>}

//   // ---------------------
//   // ---Our validation----
//   // ---------------------

//   //  const validateFields = (e) => {
//   // setFirstName(e.target.value);
//   // console.log(firstName.length);
//   // console.log(typeof firstName);

//   //   if (firstName.length < 2) {
//   //     setErrFirstName("Min 3 characters");
//   //   } else if (!isNaN(firstName) || /[0-9]/.test(firstName)) {
//   //     setErrFirstName("Only letters allowed");
//   //   } else {
//   //     setErrFirstName("");
//   //   }
//   // };

//   // Error

//   // const [nameValid, setNameValid] = useState(false);

//   // lastname : show just letters
//   // const [errLastName, setErrLastName] = useState("");
//   // address : required
//   // const [errAddress, setErrAddress] = useState("");
//   // phone : min and numbers
//   // const [errPhone, setErrPhone] = useState("");

//   // cardnumber

//   // const [errCardNumber, setErrCardNumber] = useState("");
//   // namoncard
//   // const [errNameOnCard, setErrNameOnCard] = useState("");
//   // expiration
//   // const [errCardExpiration, setErrCardExpiration] = useState("");
//   // secret
//   // const [errCardSecret, setErrCardSecret] = useState("");

//   return (
//     <div>
//       <header>
//         <p>Logo</p>
//         <p>
//           <Link to='/cart'>Return To Cart</Link>
//         </p>
//       </header>

//       <MDBContainer className='py-5'>
//         <MDBRow>
//           <MDBCol md='8' className='mb-4'>
//             <form
//               id='checkout-form'
//               onSubmit={handleSubmit((data) => {
//                 console.log(data);
//               })}>
//               <MDBCard className='mb-4'>
//                 <MDBCardHeader className='py-3'>
//                   <h5 className='mb-0'>Biling details</h5>
//                 </MDBCardHeader>
//                 <MDBCardBody>
//                   <MDBRow className='mb-4'>
//                     <MDBCol>
//                       <Controller
//                         {...{
//                           control,
//                           register,
//                           name: "firstName",
//                           rules: {},
//                           render: () => {
//                             <MDBInput />;
//                           },
//                         }}
//                       />
//                       {/* <MDBInput /> */}
//                       {/* {errFirstName && "Your first name is invalid"} */}
//                     </MDBCol>

//                     <MDBCol>
//                       <MDBInput
//                         label='Last name'
//                         id='form2'
//                         type='text'
//                         // required
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                     </MDBCol>
//                   </MDBRow>

//                   <MDBInput
//                     wrapperClass='mb-4'
//                     label='Address'
//                     id='form3'
//                     type='text'
//                     // required
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                   <MDBInput
//                     wrapperClass='mb-4'
//                     label='Email'
//                     id='form4'
//                     type='email'
//                     // required
//                     value={email}
//                     // onChange={(e) => validateFields(e)}
//                     // onChange={(e) => setEmail(e.target.value)}
//                   />
//                   {errEmail && "Your email is invalid"}
//                   <MDBInput
//                     wrapperClass='mb-4'
//                     label='Phone'
//                     id='form5'
//                     type='number'
//                     // required
//                     onChange={(e) => setPhone(e.target.value)}
//                   />

//                   <hr className='my-4' />

//                   {/* <MDBCheckbox
//                   name="flexCheck"
//                   value=""
//                   id="checkoutForm1"
//                   label="Shipping address is the same as my billing address"
//                 />
//                 <MDBCheckbox
//                   name="flexCheck"
//                   value=""
//                   id="checkoutForm2"
//                   label=" Save this information for next time"
//                   defaultChecked
//                 /> */}

//                   {/* <hr className="my-4" /> */}

//                   <h5 className='mb-4'>Payment</h5>

//                   {/* <MDBRadio
//                   name="flexRadioDefault"
//                   id="flexRadioDefault1"
//                   label="Credit card"
//                   checked
//                 />
//                 <MDBRadio
//                   name="flexRadioDefault"
//                   id="flexRadioDefault2"
//                   label="Debit card"
//                 />
//                 <MDBRadio
//                   name="flexRadioDefault"
//                   id="flexRadioDefault2"
//                   label="Paypal"
//                   wrapperClass="mb-4"
//                 />  */}

//                   <MDBRow>
//                     <MDBCol>
//                       <MDBInput
//                         label='Name on card'
//                         id='form6'
//                         type='text'
//                         wrapperClass='mb-4'
//                         // required
//                         // onChange={(e) => handleInputs(e.target.value)}
//                         onChange={(e) => setNameOnCard(e.target.value)}
//                       />
//                     </MDBCol>
//                     <MDBCol>
//                       <MDBInput
//                         label='Credit card number'
//                         id='form7'
//                         type='text'
//                         wrapperClass='mb-4'
//                         // required
//                         // onChange={(e) => handleInputs(e.target.value)}
//                         onChange={(e) => setCardNumber(e.target.value)}
//                       />
//                     </MDBCol>
//                   </MDBRow>

//                   <MDBRow>
//                     <MDBCol md='3'>
//                       <MDBInput
//                         label='Expiration'
//                         id='form8'
//                         type='text'
//                         wrapperClass='mb-4'
//                         // required
//                         onChange={(e) => setCardExpiration(e.target.value)}
//                       />
//                     </MDBCol>
//                     <MDBCol md='3'>
//                       <MDBInput
//                         label='CVV'
//                         id='form8'
//                         type='text'
//                         wrapperClass='mb-4'
//                         // required
//                         onChange={(e) => setCardSecret(e.target.value)}
//                       />
//                     </MDBCol>
//                   </MDBRow>

//                   {/* <MDBBtn size="lg" block>
//                   Continue to checkout
//                 </MDBBtn> */}
//                 </MDBCardBody>
//               </MDBCard>

//               <input type='submit' />
//             </form>
//           </MDBCol>

//           {/* -------------------------------------- */}
//           {/* ---------------Summary---------------- */}
//           {/* -------------------------------------- */}

//           <MDBCol md='4' className='mb-4'>
//             <MDBCard className='mb-4'>
//               <MDBCardHeader className='py-3'>
//                 <h5 className='mb-0'>Summary</h5>
//               </MDBCardHeader>

//               <MDBCardBody>
//                 <MDBListGroup flush>
//                   {cart.map((product) => {
//                     return (
//                       <div
//                         className='checkout-products'
//                         key={product.product_id}>
//                         <p>{product.product_name}</p>
//                         <p>Qty {product.quantity} </p>
//                         <p>$ {product.product_price}</p>
//                         {/* <p>{product.product_name}</p> */}
//                       </div>
//                     );
//                   })}
//                   <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
//                     Subtotal
//                     <span>${subTotalPrice}</span>
//                   </MDBListGroupItem>
//                   <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
//                     Shipping
//                     <span>${shipping}</span>
//                   </MDBListGroupItem>
//                   <hr className='my-2'></hr>
//                   <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
//                     <div>
//                       <strong>Total amount</strong>
//                       <strong>
//                         <p className='mb-0'>(including VAT)</p>
//                       </strong>
//                     </div>
//                     <span>
//                       <strong>${totalPrice}</strong>
//                     </span>
//                   </MDBListGroupItem>
//                 </MDBListGroup>
//               </MDBCardBody>

//               {/* <button
//                 form='checkout-form'
//                 // onClick={validateFields}
//                 // When all of the inputs are not empty, we change the setDisable to false.
//                 disabled={
//                   firstName &&
//                   lastName &&
//                   address &&
//                   email &&
//                   phone &&
//                   nameOnCard &&
//                   cardNumber &&
//                   cardExpiration &&
//                   cardSecret
//                     ? !disable
//                     : disable
//                 }>
//                 Place Order
//               </button> */}
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }
