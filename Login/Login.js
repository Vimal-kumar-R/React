// import React, {useState} from 'react';

// export default function Login() {
//   // document.querySelector('.img__btn').addEventListener('click', function() {
//   //   document.querySelector('.cont').classList.toggle('s--signup');
//   const [isSignupVisible, setSignupVisible] = useState(false);

//   const handleButtonClick = () => {
//     setSignupVisible(!isSignupVisible);
//   }  
//   return (
//     <div>
      
//       <div className={`cont ${isSignupVisible ? 's--signup' : 'sign-in'}`}>
//       {/* Other content */}
//       <button className="img__btn" onClick={handleButtonClick}>
//         {isSignupVisible?'Sign up':'Sign in'}
//         {/* Toggle Signup */}
//       </button>
//     </div>

          
//     <div class="cont">
//       <div class="form sign-in">
//         <h2>Welcome back,</h2>
//         <label>
//           <span>Email</span>
//           <input type="email" />
//         </label>
//         <label>
//           <span>Password</span>
//           <input type="password" />
//         </label>
//         <p class="forgot-pass">Forgot password?</p>
//         <button type="button" class="submit">Sign In</button>
//         <button type="button" class="fb-btn">Connect with <span>facebook</span></button>
//       </div>
//       <div class="sub-cont">
//         <div class="img">
//           <div class="img__text m--up">
//             <h2>New here?</h2>
//             <p>Sign up and discover great amount of new opportunities!</p>
//           </div>
//           <div class="img__text m--in">
//             <h2>One of us?</h2>
//             <p>If you already has an account, just sign in. We've missed you!</p>
//           </div>
//           <div class="img__btn">
//             <span class="m--up">Sign Up</span>
//             <span class="m--in">Sign In</span>
//           </div>
//         </div>
//         <div class="form sign-up">
//           <h2>Time to feel like home,</h2>
//           <label>
//             <span>Name</span>
//             <input type="text" />
//           </label>
//           <label>
//             <span>Email</span>
//             <input type="email" />
//           </label>
//           <label>
//             <span>Password</span>
//             <input type="password" />
//           </label>
//           <button type="button" class="submit">Sign Up</button>
//           <button type="button" class="fb-btn">Join with <span>facebook</span></button>
//         </div>
//       </div>
//     </div>

//     </div>
//   )
// }

import React, { useState } from 'react';
import './Login.css'; // Make sure to import your CSS file

export default function Login() {
  const [isSignupVisible, setSignupVisible] = useState(false);

  const handleButtonClick = () => {
    setSignupVisible(!isSignupVisible);
  };

  return (
    <div className={`cont ${isSignupVisible ? 's--signup' : ''}`}>
      <div className="form sign-in">
        <h2>Welcome back,</h2>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit">Sign In</button>
        <button type="button" className="fb-btn">Connect with <span>Facebook</span></button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover a great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>If you already have an account, just sign in. We've missed you!</p>
          </div>
          <div className="img__btn" onClick={handleButtonClick}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Time to feel like home,</h2>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <button type="button" className="submit">Sign Up</button>
          <button type="button" className="fb-btn">Join with <span>Facebook</span></button>
        </div>
      </div>
    </div>
  );
}

