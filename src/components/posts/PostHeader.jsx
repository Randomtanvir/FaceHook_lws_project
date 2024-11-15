/* eslint-disable react/prop-types */
import TimeIcon from "../../assets/icons/time.svg";
import ThreeDot from "../../assets/icons/3dots.svg";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import { getDateDifferenceFromNow } from "../../utils";
import useAvater from "../../hooks/useAvater";
import { useState } from "react";

const PostHeader = ({ post }) => {
  const { avaterURL } = useAvater(post);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avaterURL}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={TimeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {`${getDateDifferenceFromNow(post.createAt)}`}
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <button onClick={() => setToggle(!toggle)}>
          <img src={ThreeDot} alt="3dots of Action" />
        </button>

        <div className={`action-modal-container ${!toggle && "hidden"}`}>
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={EditIcon} alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={DeleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
