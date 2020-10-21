import React, { useContext, useState, useEffect }  from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Alerts from '../layout/Alerts';
import AuthContext from '../../context/auth/AuthContext'
import AlertContext from '../../context/alert/AlertContext'
import '../styles/Forms.css';

function ContactForm(props) {
	const authContext = useContext(AuthContext)
	const alertContext = useContext(AlertContext)

	const {sendForm, formSent, error, clearErrors,} = authContext

	useEffect(() => {
		if(error) {
			alertContext.createAlert(error, 'danger')
			clearErrors()
		}
		//eslint-disable-next-line
	},[error, props.history])

	const [form, setForm] = useState({
		companie: '',
		email: '',
		message: '',
	})
	const {companie, email, message} = form

	const onChange = (e) => setForm({ ...form, [e.target.name]:e.target.value})

	const onSubmit = (e) => {
		e.preventDefault()
		if ( email === '' || companie === '' || message === ''){
				alertContext.createAlert(`Oops, il semblerais que vous n'ayez pas tout remplie` , 'danger')
		}

		else {
			sendForm(form)
		}
	}

	return(
	<>
	{
	formSent === '' ?
	<Form className = 'form-container' onSubmit={onSubmit}>
	<Alerts />
	<h1>Say Hi!</h1>
		<Col>
			<Row>
			<Col md={6}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control type="text" placeholder="Entreprise" required
					name='companie' value={companie} onChange={onChange}/>
				</Form.Group>
			</Col>
			<Col md={6}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Email" required
					name='email' value={email} onChange={onChange}/>
				</Form.Group>
			</Col>
			</Row>
		</Col>
		<Form.Group controlId="exampleForm.ControlTextarea1">
			<Form.Control as="textarea" rows="10" required maxLength="200"
			name='message' placeholder="Message" value={message} onChange={onChange}/>
		</Form.Group>
		<Button variant="success" type="submit" value='envoyer'>
			Envoyer
		</Button>
	</Form>
	:
	<div className = 'form-container'>
		<h1>Merci pour votre interet !</h1>
		<p>Je reviendrai vers vous des que possible</p>
		<p>A bientôt!</p>
		<Link to='/' className='links'> Retour à la page d'accueil</Link>
	</div>
	}
	</>

	);
}

export default ContactForm;
