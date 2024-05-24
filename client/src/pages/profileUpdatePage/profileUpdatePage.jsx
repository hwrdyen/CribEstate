import "./profileUpdatePage.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/uploadWidget";

function ProfileUpdatePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatarImg, setAvatarImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData); //different method than Login.jsx

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatarImg[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button disabled={isLoading}>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        {console.log(currentUser.avatar)}
        <img
          src={avatarImg[0] || currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "howiedev",
            uploadPreset: "CribEstate",
            multiple: false,
            folder: "avatars",
          }}
          setState={setAvatarImg}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
