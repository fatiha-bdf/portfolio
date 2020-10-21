import React from 'react';
import '../styles/Projets.css';
import { Carousel } from 'react-bootstrap'
import photo1 from '../../photos/match1.png'
import photo2 from '../../photos/match2.png'
import photo3 from '../../photos/match3.png'
import photo4 from '../../photos/match4.png'
import photo5 from '../../photos/match5.png'
import record from '../../videos/record.mp4'

function Projets() {
	return (
		<div className = 'projets'>
			<div className = 'title'>
				<h1>Projets Web</h1>
				<h3>Site de rencontre: ReactJS, nodeJS, Express, MySQL, HTML/CSS.</h3>
			</div>
			<div className = 'body'>
				<div className = 'caroussel'>
					<Carousel >
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={photo1} alt= ''/>
							<figcaption>Page de connection</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
								<img className="d-block w-100" src={photo2} alt= ''/>
								<figcaption>Recherche avancée + liste des profils</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={photo3} alt= ''/>
							<figcaption>Personalisation du profil + ajouts de photos</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={photo4}  alt= ''/>
							<figcaption>Messagerie instantanée</figcaption>
						</figure>
						</Carousel.Item>
						<Carousel.Item>
						<figure>
							<img className="d-block w-100" src={photo5} alt= ''/>
							<figcaption>Notifications</figcaption>
						</figure>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className = 'ref'>
				<ul>
					<li><p>L'utilisateur peut s'inscrire, se connecter, Reinitialiser ses identifiants, mot de passe, completer et modifier son profil</p></li>
					<li><p>L'utilisateur peut faire une recherche avancée, consulter, liker, bloquer, contacter un autre utilisateur</p></li>
					<li><p>L'utilisateur reçois des notifications lorceque son profil a été visité, liké.</p></li>
					<li><p>L’utilisateur est géolocalisé, à l’arrondissement près.</p></li>
					<li><p>Les profils sont mélés intelligement selon des critères definis.</p></li>
				</ul>
				</div>
			</div>
			<div className = 'title'>
				<h3>Snapchat vs Instagram: PHP, JavaScript, Ajax, MySQL, HTML/CSS.</h3>
			</div>
			<div className = 'body'>
				<div className = 'caroussel'>
					<video className='record' src ={record} autoPlay loop muted />
				</div>
				<div className = 'ref'>
					<ul>
						<li><p>Pas de Framework ni de library externe. PHP et JavaScript uniquement.</p></li>
						<li><p>Interface utilisateur: Inscription, (dé)connection, changement/oublie de mot de passe.</p></li>
						<li><p>Gallery Photo: Ajouter, supprimer ses photos, liker, commenter</p></li>
						<li><p>Prendre des photos avec la webcam</p></li>
						<li><p>Montage photos: ajouter filtres, stickers. etc</p></li>
					</ul>
				</div>
			</div>
			<div className = 'title'>
				<h3>Voir tous mes projets: lien vers mon github</h3>
			</div>
		</div>
	)
}

export default Projets
