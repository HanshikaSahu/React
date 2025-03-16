import styles from './ContactForm.module.css';
import Button from './Button';
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import service from '../assets/images/service.svg';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }

  return(
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button icon={<MdMessage fontSize="24px"/>} text="VIA SUPPORT CHAT" />
          <Button icon={<IoCallOutline fontSize="24px"/>} text="VIA CALL" />
        </div>
        <Button isThird={true} icon={<IoMail fontSize="24px"/>} text="VIA EMAIL FORM" />
        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" rows="8" />
          </div>
          <button className={styles.submitBtn}>SUBMIT</button>
          <div className={styles.submitAns}>{name + " " + email + " " + text}</div>

        </form>
      </div>  
      <div className={styles.contactImage}>
        <img src={service} alt="service" />
      </div>
    </section>
  )
}

export default ContactForm;