import { useState } from 'react'
import { useRouter } from 'next/router'

import Input from '/components/input'
import Layout from '/components/layout'
import Button from '/components/button'

export default () => {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  const onNome = ({ target }) => {
    setNome(target.value)
  }

  const onTelefone = ({ target }) => {
    setTelefone(target.value)
  }

  const onSave = async () => {
    const body = JSON.stringify({
      nome,
      telefone,
    })

    await fetch('/api/paciente', { method: 'post', body })

    router.push('/')
  }

  return (
    <Layout active="cadastro">
      <div className="max-w-lg mx-auto px-3">
        <Input placeholder="Nome" value={nome} onChange={onNome} />
        <Input placeholder="Telefone" value={telefone} onChange={onTelefone} />
        <Button onClick={onSave}>Salvar</Button>
      </div>
    </Layout>
  )
}
