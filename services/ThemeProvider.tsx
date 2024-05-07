'use client';
import { FC, ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

type TProps = {
 children: ReactNode;
} & ThemeProviderProps;

const ThemeProvider: FC<TProps> = ({ children, ...props }) => {
 return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
