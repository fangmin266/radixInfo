import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "../styles/Main.css";
import ComponentLayout from "../components/ComponentLayout";
import styled from "styled-components";
import { Demos1, tabItems } from "../datas/DataBundle";

const StyledDemoTitle = styled.div`
  color: red;
  padding: 0 12px;
`;

const Main = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      {tabItems.map((item) => (
        <Tabs.Trigger
          key={item.value}
          className="TabsTrigger"
          value={item.value}
        >
          {item.label}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      {Demos1.map((child, index) => (
        <div key={index}>
          <StyledDemoTitle>{child.title}</StyledDemoTitle>
          <ComponentLayout key={index}>{child.comp}</ComponentLayout>
        </div>
      ))}
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2"></Tabs.Content>
  </Tabs.Root>
);

export default Main;
