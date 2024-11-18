import { FC } from "react";
import { ThreadPointsBarProps } from "./ThreadPointsBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ThreadPointsInline: FC<ThreadPointsBarProps> = ({ points, responseCount }) => {
  return (
    <>
      <label
        style={{
          marginRight: '.75em',
          marginTop: '.25em',
        }}
      >
        {points || 0}
        <FontAwesomeIcon
          icon={faHeart}
          className="points-icon"
          style={{ marginLeft: '.2em' }}
        />
      </label>
    </>
  )
}

export default ThreadPointsInline
