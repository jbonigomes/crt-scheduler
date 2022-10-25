import { useState } from 'react'

export default () => {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState(0)
  const [day, setDay] = useState()
  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [endHour, setEndHour] = useState()
  const [endMinute, setEndMinute] = useState()
  const [startHour, setStartHour] = useState()
  const [startMinute, setStartMinute] = useState()

  const onSelect = (id) => () => {
    setStep(2)
    setSelected(id)
  }

  const onReSelect = () => {
    setStep(1)
  }

  const onDay = ({ target }) => {
    setDay(target.value)
  }

  const onMonth = ({ target }) => {
    setMonth(target.value)
  }

  const onYear = ({ target }) => {
    setYear(target.value)
  }

  const onEndHour = ({ target }) => {
    setEndHour(target.value)
  }

  const onEndMinute = ({ target }) => {
    setEndMinute(target.value)
  }

  const onStartHour = ({ target }) => {
    setStartHour(target.value)
  }

  const onStartMinute = ({ target }) => {
    setStartMinute(target.value)
  }

  return {
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
    setStartHour,
    setStartMinute,
    setEndHour,
    setEndMinute,
  }
}
