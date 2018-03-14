import * as React from "react";
import {render} from "react-dom";
import { Hello } from "./components/Hello";

const rootEl = document.getElementById("root");

render(
    <Hello compiler="TypeScript" framework="React" />,
    rootEl
);