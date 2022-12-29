// import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

import { ProductProps } from '../store/modules/cart/types'
import { CatalogItem } from './CatalogItem'

export function Catalog() {
	/* utiliza useSelector para evitar o que o useStre traz a mais do que o necessario */
	// const catalog = useSelector((state) => state)

	const [catalog, setCatalog] = useState<ProductProps[]>([])

	useEffect(() => {
		/* desse modo nao precisa usar o await, apenas o THEN */
		api.get('/products').then((response) => {
			setCatalog(response.data)
		})
	}, [])

	return (
		<>
			<main>
				{catalog.map((product) => (
					<CatalogItem key={product.id} product={product} />
				))}
			</main>
		</>
	)
}
