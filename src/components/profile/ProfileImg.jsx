import { useRef } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";
import { actions } from "../../actions/actions";

const ProfileImg = () => {
  const { api } = useAxios();
  const { state, dispatch } = useProfile();
  const updateImageRef = useRef();
  const handelUpdateImg = (e) => {
    e.preventDefault();
    updateImageRef.current.addEventListener("change", updateImgDisplay);
    updateImageRef.current.click();
  };

  const updateImgDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of updateImageRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );
      if (response.status === 200) {
        console.log(response.data);
        dispatch({
          type: actions.profile.IMAGE_UPDATE,
          data: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state.user?.avatar}`}
        alt="sumit saha"
      />
      <form>
        <button
          onClick={handelUpdateImg}
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input
          name="file"
          type="file"
          ref={updateImageRef}
          className="hidden"
        />
      </form>
    </div>
  );
};

export default ProfileImg;
