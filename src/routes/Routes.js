import { START_SCREEN_ROUTE, QUIZ_SCREEN_ROUTE, END_SCREEN_ROUTE } from "./Constants";
import {StartScreenContainer,QuizScreenContainer,EndScreenContainer} from "../containers"

export const routesArr = [
  { Component: StartScreenContainer, path: START_SCREEN_ROUTE },
  { Component: QuizScreenContainer, path: QUIZ_SCREEN_ROUTE },
  { Component: EndScreenContainer, path: END_SCREEN_ROUTE },
];
