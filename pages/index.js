import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'
import FullCalendar from '@fullcalendar/react'
import locale from '@fullcalendar/core/locales/pt-br'
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'

import { useRouter } from 'next/router'

import Layout from '/components/layout'

export default ({ events }) => {
  const router = useRouter()

  const onDateClick = ({ date }) => {
    const dateQuery = window.btoa(dayjs(date).format())
    router.push({ pathname: 'consulta', query: { date: dateQuery } })
  }

  const onEventClick = ({ event }) => {
    router.push(event.toPlainObject().id)
  }

  const dayHeaderContent = ({ view, text, date }) =>
    view.type === 'dayGridMonth'
      ? `${text.slice(0, 1).toUpperCase()}${text.slice(1, 3)}`
      : dayjs(date).locale('pt-br').format('dd - DD/MM')

  return (
    <Layout active="agenda">
      <FullCalendar
        editable
        selectable
        height="100%"
        events={events}
        locale={locale}
        weekends={false}
        allDaySlot={false}
        slotMinTime="08:00"
        slotMaxTime="20:00"
        initialView="oneDay"
        dateClick={onDateClick}
        eventClick={onEventClick}
        dayHeaderContent={dayHeaderContent}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: 'oneDay,timeGridWeek,dayGridMonth',
          center: '',
          end: 'prev,next'
        }}
        views={{
          oneDay: {
            type: 'timeGrid',
            buttonText: 'Dia',
            duration: { days: 1 },
          },
        }}
      />
    </Layout>
  )
}

export const getServerSideProps = async () => ({
  props: {
    events: await (await fetch('http://localhost:3000/api/events')).json(),
  },
})
