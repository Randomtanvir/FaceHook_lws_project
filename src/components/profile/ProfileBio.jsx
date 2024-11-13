import { useState } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import CheckedIcon from "../../assets/icons/checked.svg";
import useProfile from "../../hooks/useProfile";
import { actions } from "../../actions/actions";
import useAxios from "../../hooks/useAxios";
const ProfileBio = () => {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [isEdit, setIsEdit] = useState(false);
  const { api } = useAxios();

  const handelBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );
      const data = response.data;
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data,
        });
      }
      setIsEdit(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!isEdit ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            className="leading-[188%] bg-zinc-600 text-gray-200 lg:text-lg p-2"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            cols={55}
          ></textarea>
        )}
      </div>

      {!isEdit ? (
        <button
          onClick={() => setIsEdit(true)}
          className="flex-center h-7 w-7 rounded-full"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          onClick={handelBioEdit}
          className="flex-center h-7 w-7 rounded-full"
        >
          <img src={CheckedIcon} alt="Checked" />
        </button>
      )}
    </div>
  );
};

export default ProfileBio;
