"use client";
import { useEffect, useState } from "react";
import Button from "../components/Button/button";
import FriendList from "../components/List/friend-list";
import Icon from "../components/Icon";
import friendList from "./friendsData.json";
import Loader from "../components/Loader/loader";
import styles from "./page.module.css";

interface Person {
    name: string;
    email: string;
    phoneNumber: string;
    status?: string; 
}

const fetchFriends = () => {
    return new Promise<Person[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(friendList);
        }, 1000);
    });
};

export default function Home() {
    const [allFriends, setAllFriends] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredFriends, setFilteredFriends] = useState<Person[]>([]);
    const [closeFriendCheck, setCloseFriendCheck] = useState<boolean>(false);
    const [superCloseFriendCheck, setSuperCloseFriendCheck] =
        useState<boolean>(false);
    const [dropDownVisible, setdropDownVisible] = useState<boolean>(false);
    const [hasActveFilters, setHasActiveFilters] = useState<boolean>(true);
    const [numOfSelectedFilters, setNumOfSelectedFilters] = useState<number>(0);

    const disableClearButton_Main = hasActveFilters;
    const disableClearButton_Filter = !(closeFriendCheck || superCloseFriendCheck);

    const showDropdown = () => {
        setdropDownVisible(true);
    };

    const hideDropdown = () => {
        setdropDownVisible(false);
    };

    const clearAllFilters = () => {
        setCloseFriendCheck(false);
        setSuperCloseFriendCheck(false);
        clearFilterNumber();
    };

    const clearAllFiltersAndApply = () => {
        clearAllFilters();
        setFilteredFriends(allFriends);
        setHasActiveFilters(true);
        clearFilterNumber();
    };

    const clearFilterNumber = () => {
        setNumOfSelectedFilters(0);
    }

    const onApplyFilters = () => {
        let newlyFilteredFriends = allFriends;

        if (closeFriendCheck || superCloseFriendCheck) {
            newlyFilteredFriends = allFriends.filter((friend) => {
                if (
                    closeFriendCheck &&
                    friend.status === "Close Friends"
                ) {
                    return true;
                }
                if (
                    superCloseFriendCheck &&
                    friend.status === "Super Close Friends"
                ) {
                    return true;
                }
                return false;
            });
        }

        setFilteredFriends(newlyFilteredFriends);
        setdropDownVisible(false);
        setHasActiveFilters(false);
    };

    useEffect(() => {
        const numberOfFilters = [
            closeFriendCheck,
            superCloseFriendCheck,
        ].filter(Boolean).length;
        setNumOfSelectedFilters(numberOfFilters);
    }, [closeFriendCheck, superCloseFriendCheck]);

    useEffect(() => {
        const fetchFriendsData = async () => {
            const friends: Person[] = await fetchFriends();
            setAllFriends(friends);
            setFilteredFriends(friends);
            setIsLoading(false);
        };

        fetchFriendsData();
    }, []);
    
    return (
        <div className={styles.friendPageMainDiv}>
            <div className={styles.friendHeader}>
                {dropDownVisible && (
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownHeader}>
                            <Button
                                onClick={clearAllFilters}
                                content={"Clear All"}
                                disabled={disableClearButton_Filter}
                            />

                            <div className={styles.dropdownTextBold}>
                                Filter
                            </div>
                            <button
                                className={styles.cancelButton}
                                onClick={hideDropdown}
                            >
                                <Icon
                                    title="Cancel"
                                    dimensions={17}
                                    spaced={false}
                                ></Icon>
                            </button>
                        </div>
                        <div className={styles.dropdownSeparator}></div>
                        <div className={styles.dropdownContent}>
                            <div className={styles.dropdownStatus}>
                                Friend Status
                            </div>
                            <div className={styles.dropdownCheckBoxGroup}>
                                <div className={styles.dropdownTextBold}>
                                    Close Friends
                                </div>
                                <input
                                    className={styles.dropdownCheckBox}
                                    type="checkbox"
                                    checked={closeFriendCheck}
                                    onChange={(e) =>
                                        setCloseFriendCheck(e.target.checked)
                                    }
                                />
                            </div>
                            <div className={styles.dropdownCheckBoxGroup}>
                                <div className={styles.dropdownTextBold}>
                                    Super Close Friends{" "}
                                </div>
                                <input
                                    className={styles.dropdownCheckBox}
                                    type="checkbox"
                                    checked={superCloseFriendCheck}
                                    onChange={(e) =>
                                        setSuperCloseFriendCheck(
                                            e.target.checked
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <button
                            className={styles.dropdownApplyButton}
                            onClick={onApplyFilters}
                        >
                            Apply
                        </button>
                    </div>
                )}
                <button
                    className={`${styles.dropdownMenuButton}  ${
                        dropDownVisible || numOfSelectedFilters > 0 ? styles.activeDropDownMenuButton : ""
                    }`}
                    onClick={showDropdown}
                >
                    {dropDownVisible || numOfSelectedFilters > 0 ? (
                        <>
                            <Icon
                                title="OpenFilter"
                                dimensions={20}
                                spaced={true}
                            />
                            {numOfSelectedFilters > 0 ? <span className={styles.filterNumber}>{numOfSelectedFilters}</span> : ""}
                        </>
                    ) : (
                        <Icon
                            title="CloseFilter"
                            dimensions={20}
                            spaced={true} 
                        />
                    )}
                </button>
                <div className={styles.friendDivider}></div>
                <div className={styles.friendClear}>
                    <Button
                        content="Clear All"
                        onClick={clearAllFiltersAndApply}
                        disabled={disableClearButton_Main}
                    />
                </div>
            </div>
            {isLoading ? <Loader count={6} /> : <FriendList friends={filteredFriends} />}
        </div>
    );
}