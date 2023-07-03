import { UserType } from "@/hooks/apis/cosmeticsQuery";
import { useRecentlyViewedStore } from "@/store/recentlyViewed";
import { useEffect, useState } from "react";
import { StyledAddCartBtn, StyledCosmeticsCard, StyledCosmeticsLayout } from "../cosmetics/styled";
import Image from "next/image";
export default function RecentlyView() {
    const { recentlyView, removeRecentlyViewe } = useRecentlyViewedStore();

    // 장바구니
    const [carts, setCarts] = useState<UserType[]>([]);

    // useEffect 를 사용하여 ssr hydrate 에러 보완
    useEffect(() => {
        setCarts(recentlyView);
    }, [recentlyView]);
    return (
        <>
            <h1>최근 본 상품</h1>

            {carts?.length ? (
                <StyledCosmeticsLayout>
                    {carts.map((cart) => {
                        return (
                            <StyledCosmeticsCard key={cart.id}>
                                <span>{cart.name}</span>
                                <Image
                                    width={200}
                                    height={200}
                                    src={cart.image_link}
                                    alt=""
                                    priority
                                    // layout="fill"
                                    objectFit="contain"
                                />
                                <StyledAddCartBtn
                                    onClick={() => {
                                        removeRecentlyViewe(cart);
                                    }}
                                    style={{ zIndex: 99 }}
                                >
                                    삭제
                                </StyledAddCartBtn>
                            </StyledCosmeticsCard>
                        );
                    })}
                </StyledCosmeticsLayout>
            ) : (
                <div>현재 상품이 존재하지 않습니다.</div>
            )}
        </>
    );
}
