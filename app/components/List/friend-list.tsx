import React, { FC } from "react";
import FriendCard from "../Card/friend-card";

interface Person {
    name: string;
    email: string;
    phoneNumber: string;
    status?: string; 
}

interface FriendListProps {
    friends: Person[];
}

const FriendList: FC<FriendListProps> = ({ friends }) => {
    return (
        <div className="friend-list">
            {friends.map((friend, index) => (
                <FriendCard
                    key={index}
                    name={friend.name}
                    status={friend.status}
                    email={friend.email}
                    phoneNumber={friend.phoneNumber}
                />
            ))}
        </div>
    );
};

export default FriendList;