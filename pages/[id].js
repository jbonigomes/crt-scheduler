import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useSearch from '/hooks/useSearch'
import useConsult from '/hooks/useConsult'
import Button from '/components/button'
import Consulta from '/components/consulta'

export default ({ pacientes, agenda }) => {
  const { query, push } = useRouter()
  const { search, onSearch, searchFilter } = useSearch()

  const {
    step,
    selected,
    day,
    year,
    month,
    endHour,
    endMinute,
    startHour,
    startMinute,
    onSelect,
    onReSelect,
    onDay,
    onMonth,
    onYear,
    onEndHour,
    onEndMinute,
    onStartHour,
    onStartMinute,
    setStep,
    setSelected,
    setDay,
    setMonth,
    setYear,
    setEndHour,
    setEndMinute,
    setStartHour,
    setStartMinute,
  } = useConsult({ query })

  const onSave = async () => {
    const body = JSON.stringify({
      id: query.id,
      paciente_id: selected,
      to: `${year}-${month}-${day}T${endHour}:${endMinute}:00-03:00`,
      from: `${year}-${month}-${day}T${startHour}:${startMinute}:00-03:00`,
    })

    await fetch('/api/agenda-patch', { method: 'post', body })

    push('/')
  }

  const onCancel = async () => {
    if (confirm('Voce tem certeza?')) {
      await fetch(`/api/cancelar/${query.id}`)
      push('/')
    }
  }

  useEffect(() => {
    const queryDay = dayjs(agenda.from).format('DD')
    const queryMonth = dayjs(agenda.from).format('MM')
    const queryYear = dayjs(agenda.from).format('YYYY')
    const queryHour = dayjs(agenda.from).format('HH')
    const queryMinute = dayjs(agenda.from).format('mm')
    const queryEndHour = dayjs(agenda.to).format('HH')
    const queryEndMinute = dayjs(agenda.to).format('mm')

    setStep(2)
    setSelected(agenda.paciente_id)

    setDay(queryDay)
    setMonth(queryMonth)
    setYear(queryYear)
    setStartHour(queryHour === '00' ? '' : queryHour)
    setStartMinute(queryHour === '00' ? '' : queryMinute)
    setEndHour(queryEndHour === '00' ? '' : queryEndHour)
    setEndMinute(queryEndHour === '00' ? '' : queryEndMinute)
  }, [])

  return (
    <Consulta
      step={step}
      search={search}
      onSearch={onSearch}
      pacientes={pacientes}
      searchFilter={searchFilter}
      onSelect={onSelect}
      selected={selected}
      onReSelect={onReSelect}
      day={day}
      year={year}
      month={month}
      onDay={onDay}
      onYear={onYear}
      onMonth={onMonth}
      startHour={startHour}
      startMinute={startMinute}
      onStartHour={onStartHour}
      onStartMinute={onStartMinute}
      endHour={endHour}
      endMinute={endMinute}
      onEndHour={onEndHour}
      onEndMinute={onEndMinute}
    >
      <div className="flex">
        <div className="flex-1 pr-2">
          <Button onClick={onCancel} danger>Cancelar</Button>
        </div>
        <div className="flex-1 pl-2">
          <Button onClick={onSave}>Atualizar</Button>
        </div>
      </div>
    </Consulta>
  )
}

export const getServerSideProps = async ({ req, params }) => ({
  props: {
    pacientes: await (await fetch(`${req.headers.referer}api/pacientes`)).json(),
    agenda: await (await fetch(`${req.headers.referer}api/agenda/${params.id}`)).json(),
  },
})
