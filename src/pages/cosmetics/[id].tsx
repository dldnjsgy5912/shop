import { useCosmeticQuery } from "@/hooks/apis/cosmeticQuery";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";

export interface IParams extends ParsedUrlQuery {
    id: string;
}

export default function ItemDetail({ id }: { id: string }) {
    const router = useRouter();

    const { status, data, error, refetch } = useCosmeticQuery({ id });

    if (status === "loading") return <h2>Loading...!!</h2>;
    if (status === "error") return <h2>{error.message}</h2>;
    return (
        <>
            {data ? (
                <div>
                    <span>{data.data.name}</span>
                    <Image width={200} height={200} src={data.data.image_link} alt="" priority />
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as IParams;

    return {
        props: {
            id,
        },
    };
};
