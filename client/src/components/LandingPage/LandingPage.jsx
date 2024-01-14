import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import "../fonts.css";
import Landing from "../../img/landingNew.png";

export default function LandingPage() {
  return (
    <div class="Landingcontainer">
      <img src={Landing} alt="" className="LandingImage" />
      <Link to={"/Home"}>
        <button className="Ingresar">Ingresar</button>
      </Link>
    </div>
  );
}
