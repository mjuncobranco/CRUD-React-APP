import classes from "./UserTable.module.css";
//VIEW: CONDITIONAL RENDERING, SHOWING BOTH EXISTING AND NEW USERS ON TABLE OR A "NO USERS" MESSAGE WHEN TABLE IS EMPTY
const UserTable = (props) => {
  return (
    <table className={classes["content-table"]}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th className={classes.center}>Actions</th>
        </tr>
      </thead>
      <tbody className={classes["striped-table"]}>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  type="button"
                  className={classes["table-button"]}
                  onClick={() => props.editRow(user)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className={classes["table-button"]}
                  onClick={() => {
                    {
                      props.deleteUser(user.id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No users available. Add one?</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
