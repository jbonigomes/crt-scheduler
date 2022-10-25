import { useState } from 'react'

export default () => {
  const [search, setSearch] = useState('')

  const onSearch = ({ target }) => {
    setSearch(target.value)
  }

  const searchFilter = ({ nome }) =>
    !search || nome.toLowerCase().includes(search.toLowerCase())

  return {
    search,
    onSearch,
    searchFilter,
  }
}
