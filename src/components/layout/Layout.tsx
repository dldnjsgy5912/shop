import { UserType } from "@/hooks/apis/cosmeticsQuery";
import React, { useEffect, useState } from "react";
import Header from "../organisms/Header";
import { Container } from "./styled";

type Props = {
    children: React.ReactNode;
    recentlyViewCount: number;
    cartsInfoCount: number;
};

function Layout({ children, cartsInfoCount, recentlyViewCount }: Props) {
    // ----------- variables ---------------

    // ----------- functions ---------------

    return (
        <Container>
            <Header cartsInfoCount={cartsInfoCount} recentlyViewCount={recentlyViewCount} />
            <main>{children}</main>
        </Container>
    );
}

export default Layout;
