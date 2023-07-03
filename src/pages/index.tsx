import { useRecentlyViewedStore } from "@/store/recentlyViewed";
import { useCountStore } from "@/store/store";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const { counts, increaseCount } = useRecentlyViewedStore();
    const [session, setSession] = useState(0);

    useEffect(() => {
        setSession(counts);
    }, [counts]);

    return (
        <div>
            인덱스 페이지
            <div onClick={increaseCount}>persist : {session}</div>
        </div>
    );
};

export default Home;
