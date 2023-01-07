import { Box } from "@mui/material";
import React from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises></SearchExercises>
      <Exercises></Exercises>
    </Box>
  );
};

export default Home;
