import React from "react";
import "./style/Newsletter.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import  { Component } from "react";
import { render } from "react-dom";
import GithubCorner from "react-github-corner";



import {
  Container,
  Logos,
  NavbarM,
  Options,
  Item,
  H1,
  GradientButton,
  Gradient,
  Button,
  GradientBorder,
  GradientSpan,
} from "./style/Home";


  const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        flexWrap:"wrap"
      }}
    >
      {status === "sending" && <div style={{ color: "red" }}>Sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#90EE90" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ width:"100%" }}
        ref={(node) => (name = node)}
        type="text"
        placeholder="Your name"
        class="form__email"
      />
      <br />
      <input
        style={{ width:"100%"}}
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
        class="form__email"
      />
      <br />
      <GradientButton style={{  }} onClick={submit}>
        Submit
      </GradientButton>
    </div>
  );
};

class Demo extends Component {
  render() {
    const url =
      "https://createprotocol.us20.list-manage.com/subscribe/post?u=d6b2d0267ff4af5f6f784edc2&amp;id=f3a79bcd16";
    return (
      <div>
        {/* <h1>react-mailchimp-subscribe Demo</h1> */}
        {/* <GithubCorner href="https://github.com/revolunet/react-mailchimp-subscribe" /> */}
        {/* <h2>Default Form</h2> */}
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default Demo;


    {/* <p class="subscribe__copy" style={{ color: "white",marginBottom:"1rem" }}>
          Subscribe to keep up with fresh news and exciting updates. We promise
          not to spam you!
        </p>
        <div
          class="form"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width:"60%"
          }}
        >
          <input
            type="email"
            class="form__email"
            placeholder="Enter your email address"
            style={{ height: "1rem" }}
          />
          <GradientButton class="form__button" style={{ marginTop: "5px" }}>
            Send
          </GradientButton>
        </div> */}
  

// export default Newsletter;
