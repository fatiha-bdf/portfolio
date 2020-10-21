import React from 'react'
import { Link } from 'react-router-dom'
import PhoneNumber from 'react-phone-number';
import EmailShare from 'react-email-share-link'
import { MDBIcon } from "mdbreact"
import '../styles/Coordonees.css';


export const Coordonees = () => {
	return (
		<div className='contact'>
			<div className='mailnumsocial'>
				<div className='mail1'>
					<MDBIcon icon="envelope-open" />
					<EmailShare email="fatiha.boudyaf@gmail.com" subject="Your subject" >
						{link => (<a href={link} data-rel="external"> fatiha.boudyaf@gmail.com</a>)}
					</EmailShare>
				</div>
				<div className='mail1'>
					<MDBIcon icon="phone-alt" />
					<PhoneNumber  number="+33649636775" isLinked={true} />
				</div>
			</div>
			<div className='mailnumsocial'>
				<div className='mail2'>
					<Link to='/' target='_blank' aria-label='LinkedIn'>
						LinkedIn <i className ='fab fa-linkedin' />
					</Link>
				</div>
				<div className='mail2'>
					<Link to='/' target='_blank' aria-label='Github'>
						Github <i className ='fab fa-github' />
					</Link>
				</div>
			</div>
		</div>
	)
}




