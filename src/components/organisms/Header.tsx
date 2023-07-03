import Link from "next/link";
import { useRouter } from "next/router";

import { StyledButtonArea, StyledHeader } from "./styled";

export default function Header({
    cartsInfoCount,
    recentlyViewCount,
}: {
    cartsInfoCount: number;
    recentlyViewCount: number;
}) {
    const router = useRouter();

    return (
        <StyledHeader>
            <StyledButtonArea>
                <Link href={`/`}>홈</Link>
                <Link href={`/cosmetics`}>화장품</Link>
                <Link href={`/cart`}>
                    <a>
                        장바구니<span>({cartsInfoCount})</span>
                    </a>
                </Link>
                <Link href={`/recentlyView`}>
                    <a>
                        최근 본 상품<span>({recentlyViewCount})</span>
                    </a>
                </Link>
            </StyledButtonArea>
        </StyledHeader>
    );
}
