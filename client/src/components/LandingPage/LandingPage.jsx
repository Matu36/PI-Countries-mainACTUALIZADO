import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import "../fonts.css";
import video from "../../img/Designer.mp4";

export default function LandingPage() {
  return (
    <div class="video-container">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <Link to={"/Home"}>
        <button className="Ingresar">Ingresar</button>
      </Link>
    </div>
  );
}
