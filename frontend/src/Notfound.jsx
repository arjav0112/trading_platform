import React from "react";
import Navbar from "./utils/navbar";
import Footer from "./utils/footer";

export default function NotFound() {
  return (
    <>
    <Navbar />
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}

