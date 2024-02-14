import React from "react";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const title = error.status === 500 ? "Data fetching failed" : error.status === 404 ? "Page not found" : "Error Encountered"; 
    // const message = error.status === 500 ? JSON.parse(error.data).message : error.status === 404 ? "The page entered does not exist. Please check your link and try again" : "Something went wrong";
    const message = error.status === 500 ? error.data.message : error.status === 404 ? "The page entered does not exist. Please check your link and try again" : "Something went wrong";
    return (
        <main>
            <MainNavigation />
            <h1>{title}</h1>
            <p>{message}</p>
        </main>
    )
}