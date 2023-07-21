import { Link } from 'react-router-dom'
import logo from '../../assets/big-logo.svg'

export default function Logo() {
	return (
		<>
			<div className="logo-container">
				{/* Je crée le composant Logo qui sera aussi un lien vers la page principale */}
				<Link to="/">
					<img src={logo} alt="logo de SportSee" className="logo" />
				</Link>
			</div>
		</>
	)
}
