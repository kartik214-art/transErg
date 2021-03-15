import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import * as emailjs from "emailjs-com";
import Input from '../elements/Input';
import Button from '../elements/Button';

const SERVICE_ID = "service_7tz09os";
const TEMPLATE_ID = "template_jhvh59y";
const USER_ID = "user_7Oez3GA17TRaKWxrDW2D6";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  
  
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [msg, setMsg] = React.useState("");

  function handleClick() {
    console.log(email)
    console.log(name)
    console.log(msg)
    var data = {
      to_name: name,
      message: msg,
      to_email:email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      function (response) {
        console.log(response.status, response.text);
        alert('Sent!');
      },
      function (err) {
        console.log(err);
        alert('Oops! Something went wrong');
      }
    );
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <h3 className="m-0 center-content" id="Contact">
                Contact Us
      </h3>
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0 center-content">
                Name
                </h3>
              <Input type="name" placeholder="John Paul" onChange={event => setName(event.target.value)}>
              </Input>
            </div>
            <div className="cta-slogan">
            <h3 className="m-0 center-content">
                Email
                </h3>
              <Input type="email" placeholder="Your best email" onChange={event => setEmail(event.target.value)}>
              </Input>
            </div>
            <div className="cta-slogan">
            <h3 className="m-0 center-content">
                Message
                </h3>
              <Input type="message" placeholder="Hey, can we chat?" onChange={event => setMsg(event.target.value)}>
              </Input>
            </div>
              <Button tag="a" color="dark" wideMobile onClick={handleClick}>
                send
              </Button>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;