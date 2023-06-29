import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (evt) => setText(evt.target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(text === '') {
      alert('Please enter smth')
    } else {
      searchUsers(text);
      setText('');
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">CLEAR</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
