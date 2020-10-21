import React, {useState} from 'react';
import '../styles/MonParcours.css';


function MonParcours() {
		const [visibility1, setVisibility1] = useState('hidden');
		const [visibility2, setVisibility2] = useState('hidden');

		const foxtons = (e) => {
			setVisibility1('visible')
		}
		const equal = (e) => {
			setVisibility2('visible')
		}
		const leave = (e) => {
			setVisibility1('hidden')
			setVisibility2('hidden')
		}

		return (
			<div className = 'parcours'>
					<h1>Mon Parcours</h1>
				<div className= 'all'>
					<div className= 'body-parcours'>
						<div className= 'part'>
							<h3>École 42</h3>
							<p>2018-Present</p>
						</div>
						<div className= 'part'>
							<h3>Licence Langues et Communications</h3>
							<p>2012-2015 | Université Paris X</p>
						</div>
						<div className= 'part'>
							<h3>Bac ES</h3>
							<p>2011</p>
						</div>
					</div>
					<div className= 'body-parcours'>
						<div className= 'part' onMouseEnter={equal} onMouseLeave={leave}>
							<h3>Responsable d'Unite Opérationnel</h3>
							<p>2016-2018 | Equal Esto | Villejuif, France</p>
						</div>
						<div className= 'part' onMouseEnter={foxtons} onMouseLeave={leave}>
							<h3>Agent Immobilier</h3>
							<p>2015-2016 | Foxtons | Londres, Royaume unis</p>
						</div>
					</div>
				</div>

				<div className='details' style={{visibility: visibility1}}>
					<p> - Prospection, acquisitions de nouveaux clients.</p>
					<p> - Réalisation d’études de marché et estimations de biens immobiliers</p>
					<p> - Organisation et réalisation de visites, et négociation des offres</p>
				</div>
				<div className='details' style={{visibility: visibility2}}>
					<p> - Analyse du positionnement stratégique multidimensionnel de l’entreprise</p>
					<p> - Definition et gestion de projets</p>
					<p> - Suivi budgétaire</p>
					<p> - Analyse de performance globale et rentabilité des activités et projets</p>
				</div>

			</div>
		)
}

export default MonParcours
