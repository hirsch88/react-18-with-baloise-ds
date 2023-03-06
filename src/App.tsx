import React from "react";
import {
  useBaloiseDesignSystem,
  BalApp,
  BalHeading,
  BalButton,
  BalFooter,
} from "@baloise/design-system-components-react";

function App() {
  useBaloiseDesignSystem();

  return (
    <BalApp className="has-sticky-footer">
      <header></header>
      <main className="container">
        <BalHeading>Hello World!</BalHeading>
        <BalButton>Button</BalButton>
      </main>
      <BalFooter></BalFooter>
    </BalApp>
  );
}

export default App;
