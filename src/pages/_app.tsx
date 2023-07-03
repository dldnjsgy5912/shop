import Layout from "@/components/layout/Layout";
import { GlobalStyle } from "@/styles/globals-style";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRecentlyViewedStore } from "@/store/recentlyViewed";
import { useEffect, useState } from "react";
import { UserType } from "@/hooks/apis/cosmeticsQuery";
import { useCartsStore } from "@/store/carts";

const reactQueryOption = {
    queries: {
        retry: 0, // 실패한 쿼리의 재시도 횟수. 0이면 재시도하지 않음.
        staleTime: 60 * 1000, // 데이터가 stale 상태로 간주되기 전까지의 시간(밀리초). 이 시간 동안은 캐시된 데이터를 사용하고, 네트워크 리퀘스트를 보내지 않음.
        cacheTime: 5 * 60 * 1000, // 데이터를 캐시하는 기간(밀리초). 이 기간 동안은 캐시된 데이터를 사용하고, 네트워크 리퀘스트를 보내지 않음.
        // refetchOnMount: false, // 컴포넌트가 마운트될 때마다 쿼리를 리페치할지 여부를 나타내는 플래그.
        refetchOnWindowFocus: false, // 윈도우가 포커스를 받을 때마다 쿼리를 리페치할지 여부를 나타내는 플래그.
        // refetchInterval: 5 * 60 * 1000, // 주기적으로 쿼리를 리페치하는 간격(밀리초).
    },
};

const client = new QueryClient({
    defaultOptions: reactQueryOption,
});

function MyApp({ Component, pageProps }: AppProps) {
    const { recentlyView } = useRecentlyViewedStore();
    const { cartsInfo } = useCartsStore();
    // 장바구니
    const [cartsInfoCount, setCartsInfoCount] = useState(0);
    const [recentlyViewCount, setRecentlyViewCount] = useState(0);

    // useEffect 를 사용하여 ssr hydrate 에러 보완
    useEffect(() => {
        setCartsInfoCount(cartsInfo.length);
        setRecentlyViewCount(recentlyView.length);
    }, [cartsInfo, recentlyView]);
    return (
        <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout cartsInfoCount={cartsInfoCount} recentlyViewCount={recentlyViewCount}>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default MyApp;
