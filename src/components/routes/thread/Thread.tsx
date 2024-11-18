import { useEffect, useState } from 'react'
import './Thread.css'
import ThreadModel from '../../../models/Thread'
import { useParams } from 'react-router-dom'
import { getThreadById } from '../../../services/DataService'

const Thread = () => {
  const [thread, setThread] = useState<ThreadModel | undefined>()
  const { id } = useParams()

  useEffect(() => {
    console.log('Thread id', id)
    if (id && Number(id) > 0) {
      getThreadById(id).then(th => {
        setThread(th)
      })
    }
  }, [id])

  return (
    <div>Thread</div>
  )
}

export default Thread
