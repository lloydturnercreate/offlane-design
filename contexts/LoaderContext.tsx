"use client";

import { createContext, useContext } from "react";

interface LoaderContextType {
  isLoaded: boolean;
}

export const LoaderContext = createContext<LoaderContextType>({
  isLoaded: false,
});

export const useLoader = () => useContext(LoaderContext);
