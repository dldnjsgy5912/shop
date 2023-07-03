import { useCartsStore } from "@/store/carts";
import { StyledAddCartBtn, StyledCosmeticsCard, StyledCosmeticsLayout } from "../cosmetics/styled";
import Image from "next/image";
import { useState, useEffect } from "react";
import { UserType } from "@/hooks/apis/cosmeticsQuery";
export default function Cart() {
    const { cartsInfo, removeCart } = useCartsStore();

    // 장바구니
    const [carts, setCarts] = useState<UserType[]>([]);

    // useEffect 를 사용하여 ssr hydrate 에러 보완
    useEffect(() => {
        setCarts(cartsInfo);
    }, [cartsInfo]);
    return (
        <>
            <h1>장바구니</h1>

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
                                        removeCart(cart);
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
