import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useSearch from '/hooks/useSearch'
import useConsult from '/hooks/useConsult'
import Button from '/components/button'
import Consulta from '/components/consulta'

export default ({ pacientes }) => {
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
    setDay,
    setMonth,
    setYear,
    setStartHour,
    setStartMinute,
  } = useConsult({ query })

  const onSave = async () => {
    const body = JSON.stringify({
      id: selected,
      to: `${year}-${month}-${day}T${endHour}:${endMinute}:00-03:00`,
      from: `${year}-${month}-${day}T${startHour}:${startMinute}:00-03:00`,
    })

    await fetch('/api/agendar', { method: 'post', body })

    push('/')
  }

  useEffect(() => {
    const queryDate = window.atob(query.date)
    const queryDay = dayjs(queryDate).format('DD')
    const queryMonth = dayjs(queryDate).format('MM')
    const queryYear = dayjs(queryDate).format('YYYY')
    const queryHour = dayjs(queryDate).format('HH')
    const queryMinute = dayjs(queryDate).format('mm')

    setDay(queryDay)
    setMonth(queryMonth)
    setYear(queryYear)
    setStartHour(queryHour === '00' ? '' : queryHour)
    setStartMinute(queryHour === '00' ? '' : queryMinute)
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
      <Button onClick={onSave}>Agendar</Button>
    </Consulta>
  )
}

export const getServerSideProps = async () => ({
  props: {
    pacientes: await (await fetch(`${process.env.BASE_URL}/api/pacientes`)).json(),
  },
})
