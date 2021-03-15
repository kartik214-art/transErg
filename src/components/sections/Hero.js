import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <br/>
            <br/>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <Image
                  src={require('./../../assets/images/TransErg-logo.png')}
                  alt="TransErg LLP"
                  width={250}
                  height={250} />
            <Image
                  src={require('./../../assets/images/TransErg-name.png')}
                  alt="TransErg LLP"
                  width={400}
                  height={100} />
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                An <span className="text-color-primary">Embedded</span> and <span className="text-color-primary">IOT</span> solution company, <br/>
                We are connecting the bridge between hardware and software
              </p>
            </div>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;