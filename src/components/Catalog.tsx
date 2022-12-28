import { useSelector } from 'react-redux'

export function Catalog() {
  /* utiliza useSelector para evitar o que o useStre traz a mais do que o necessario */
  const catalog = useSelector((state) => state)

  console.log(catalog)

  return <h1>Catalog</h1>
}
