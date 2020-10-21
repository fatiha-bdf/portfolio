import React, { useContext }  from 'react';
import { Container } from 'react-bootstrap'
import Spinners from '../layout/Spinners'
import ContactForm from './ContactForm'
import video from '../../videos/video5.mp4'
import AuthContext from '../../context/auth/AuthContext'
import '../../App.css';
import '../styles/Forms.css';

function Contact(props) {
	const authContext = useContext(AuthContext)
	const { loading } = authContext

	return (
	  <div>
		<Container className = 'container' >
			<video className ='mainvideos' src={video} autoPlay loop muted />
			{loading ? <Spinners /> : <ContactForm />}
		</Container>
	</div>

  );
}

export default Contact;
