import Head from "next/head";
import dynamic from "next/dynamic";
import { Body, GlobalStyle, Main } from "../styles/global";
import Table from "../components/table";
import Header from "../components/header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/muiStyles";
import Footer from "../components/footer";
const Logo = dynamic(() => import("../components/logo"), {
    ssr: false,
});
// import Logo from "../components/logo";

export default function Home() {
    return (
        <>
            <Head>
                <title>Puppy SPA</title>
                <meta
                    name="description"
                    content="Waiting List App, Puppy Spa a local puppy grooming store is looking for your help in building a waiting list management app. The purpose of this app is to help their receptionist manage the daily list of clients that bring their puppies to the spa each day."
                />
                <link rel="icon" href="/puppyIcon.ico" />
            </Head>
            <Main>
                <ThemeProvider theme={theme}>
                    <Header />
                    <Body>
                        <GlobalStyle />
                        <Logo />
                        <Table />
                    </Body>
                    <Footer />
                </ThemeProvider>
            </Main>
        </>
    );
}
