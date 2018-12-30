import React from "react";
import { StyledAllContent } from "./styles";
import Form from "../form";
import ContentList from "../contentList";

const AllContent = () => {
  return (
    <StyledAllContent>
      <Form />
      <ContentList />
    </StyledAllContent>
  );
};

export default AllContent;
