import { useCosmeticsQuery, UserType } from "@/hooks/apis/cosmeticsQuery";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StyledAddCartBtn, StyledCosmeticsCard, StyledCosmeticsLayout } from "./styled";
import { useCartsStore } from "@/store/carts";
import { useRecentlyViewedStore } from "@/store/recentlyViewed";

export default function Best() {
    const { status, data, error, refetch } = useCosmeticsQuery();
    const { addCarts } = useCartsStore();
    const { addRecentlyViewe } = useRecentlyViewedStore();

    if (status === "loading") return <h2>Loading...!!</h2>;
    if (status === "error") return <h2>{error.message}</h2>;

    const add = (item: UserType) => {
        alert("성공적으로 장바구니에 추가되었습니다.");
        addCarts({ ...item, count: 1 });
    };

    return (
        <>
            <h1>화장품</h1>
            <StyledCosmeticsLayout>
                {data?.data?.map((item, i) => (
                    <StyledCosmeticsCard key={item.id}>
                        <Link href={`/cosmetics/${item.id}`}>
                            <a
                                onClick={() => {
                                    addRecentlyViewe({ ...item });
                                }}
                            >
                                <span>{item.name}</span>
                                <Image width={200} height={200} src={item.image_link} alt="" priority />
                            </a>
                        </Link>
                        <StyledAddCartBtn
                            onClick={() => {
                                alert("성공적으로 장바구니에 추가되었습니다.");
                                addCarts({ ...item, count: 1 });
                            }}
                            style={{ zIndex: 99 }}
                        >
                            장바구니
                        </StyledAddCartBtn>
                    </StyledCosmeticsCard>
                ))}
            </StyledCosmeticsLayout>
        </>
    );
}
