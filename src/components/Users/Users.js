import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import User from "./User/User";
import { getAllUsersOfServer } from "../../redux/user/userActions";
import { Spin } from "antd";

export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const isFetching = useSelector((state) => state.common.isFetching);

  useEffect(() => {
    dispatch(getAllUsersOfServer());
  }, [dispatch]);

  return (
    <>
      {isFetching ? (
        <Spin />
      ) : (
        <div className="all-users">
          {users.map((u) => (
            <User
              user={u}
              key={uuidv4()}
              email={u.email}
              dateCreated={u.dateCreated}
              _id={u._id}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </>
  );
};
