import React from 'react';
import '../styles/Competences.css';

function Competences() {
	return (
		<div className = 'competences'>
			<div className='titre'>
				<h1>Competences</h1>
			</div>
			<div className= 'bodyy'>
				<div className= 'technique1'>
					<div className='titre'>
					<h3>Web</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Javascript</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">React</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Node</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Express</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">PHP</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">MYSQL</div>
					</div>
				</div>
				<div className='technique2'>
					<div className='titre'><h3>Autres</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Photoshop</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Language C</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Administration Reseaux</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '65%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Docker</div>
					</div>
					<div className='titre'><h3>Langues</h3></div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Anglais</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Espagnol</div>
					</div>
					<div className="progress" style={{height: "20px"}}>
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Arable</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Competences
