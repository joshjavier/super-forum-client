import React, { FC } from 'react';
import Thread from '../../../models/Thread'
import './ThreadCard.css'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import ThreadPointsInline from '../../points/ThreadPointsInline';
import ThreadPointsBar from '../../points/ThreadPointsBar';

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  const { width } = useWindowDimensions()
  const navigate = useNavigate()

  const onClickShowThread = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate('/thread/' + thread.id)
  }

  const getResponses = (thread: Thread) => {
    if (width <= 768) {
      return (
        <label style={{ marginRight: '.5em' }}>
          {thread && thread.threadItems && thread.threadItems.length}
          <FontAwesomeIcon
            icon={faReplyAll}
            className='points-icon'
            style={{
              marginLeft: '.25em',
              marginTop: '-.25em',
            }}
          />
        </label>
      )
    }
    return null
  }

  return (
    <section className="panel threadcard-container">
      <div className="threadcard-txt-container">
        <div className="content-header">
          <Link
            to={`/category/${thread.category.id}`}
            className='link-txt'
          >
            <strong>{thread.category.name}</strong>
          </Link>
          <span className="username-header" style={{ marginLeft: '.5em' }}>
            {thread.userName}
          </span>
        </div>
        <div className="question">
          <div
            onClick={onClickShowThread}
            data-thread-id={thread.id}
            style={{ marginBottom: '.4em' }}
          >
            <strong>{thread.title}</strong>
          </div>
          <div
            className="threadcard-body"
            onClick={onClickShowThread}
            data-thread-id={thread.id}
          >
            <div>{thread.body}</div>
          </div>
          <div className="threadcard-footer">
            <span style={{ marginRight: '.5em' }}>
              <label>
                {thread.views}
                <FontAwesomeIcon icon={faEye} className='icon-lg' />
              </label>
            </span>
            <span>
              {width <= 768 ? (
                <ThreadPointsInline points={thread.points || 0} />
              ) : null}
              {getResponses(thread)}
            </span>
          </div>
        </div>
      </div>
      <ThreadPointsBar
        points={thread.points || 0}
        responseCount={thread && thread.threadItems && thread.threadItems.length}
      />
    </section>
  )
}

export default ThreadCard
