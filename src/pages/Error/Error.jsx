import VerticalNav from '../../components/VerticalNav/VerticalNav'
import HorizontalNav from '../../components/HorizontalNav/HorizontalNav'

// Je crée une page d'erreur qui s'affiche si la page n'existe pas
const Error = () => {
	return (
		<div className="errorPage-container">
			<HorizontalNav />
			<VerticalNav />

			<section className="errorPage">
				<span className="errorPage__title">Oups...</span>
				<span className="errorPage__text">La page que vous demandez n'existe pas.</span>
			</section>
		</div>
	)
}

export default Error
