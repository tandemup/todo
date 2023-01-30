import { useState, useEffect, createContext } from "react";
import { UserContextTypes } from "./UserContext.type";

export const UserContext = createContext<UserContextTypes.Context>({
    username: "",
    avatar: "",
    onChangeUsername: () => {},
    onChangeAvatar: () => {},
});

export function UserProvider(props: UserContextTypes.Props) {
    const { children } = props;
    const valueContext: UserContextTypes.Context = {
        username: "",
        avatar: "",
        onChangeUsername: () => {},
        onChangeAvatar: () => {},
    };

  return (
    <UserContext.Provider value={valueContext}>
        {children}
    </UserContext.Provider>
  )
}
