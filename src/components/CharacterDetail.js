import { Link } from 'react-router-dom';

import NotFound from './NotFound';
import '../styles/characterdetail.scss';
import '../styles/variables.scss';
const CharacterDetail = (props) => {
	const iconStatus = () => {
		if (props.character.status === 'Dead') {
			return <i className="fas fa-skull"></i>;
		} else if (props.character.status === 'Alive') {
			return <i className="fas  fa-heartbeat"></i>;
		} else {
			return <i class="fas fa-question-circle"></i>;
		}
	};

	if (props.character !== undefined) {
		return (
			<section className="characterDetail">
				<ul className="listDetail">
					<li>
						<img
							className="img__detail"
							src={props.character.image}
							alt={props.character.name}
						/>
					</li>
					<li>
						<strong className="listDetail__name">Nombre:</strong>{' '}
						{props.character.name}
					</li>
					<li>
						<strong className="listDetail__name">Especie:</strong>{' '}
						{props.character.specie}
					</li>
					<li>
						<strong className="listDetail__name">
							Planeta de origen:{' '}
						</strong>
						{props.character.planet}
					</li>
					<li>
						<strong className="listDetail__name">
							Número de episodios en los que aparece:{' '}
						</strong>
						{props.character.episodes}
					</li>
					<li>
						<strong className="listDetail__name">
							¿Está vivo?:{' '}
						</strong>
						{iconStatus()}
					</li>
					<li>
						<Link to="/">
							<button className="btn__back">Volver atrás</button>
						</Link>
					</li>
				</ul>
			</section>
		);
	} else {
		return <NotFound />;
	}
};

export default CharacterDetail;
