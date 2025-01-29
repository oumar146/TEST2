import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { extendTheme } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import type { Navigation } from '@toolpad/core/AppProvider';
import LinearProgress from '@mui/material/LinearProgress';
import theme from '../theme';

const NAVIGATION: Navigation = [
  { kind: "header", title: "Main Items" },
  { segment: "/dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { kind: "divider" },
  { segment: "/dashboard/orders", title: "Commandes", icon: <ShoppingCartIcon /> },
  { kind: "divider" },
  { segment: "/dashboard/clients", title: "Clients", icon: <AssignmentIndIcon /> },
  { kind: "divider" },
  { segment: "/dashboard/categories", title: "Catégories", icon: <ShoppingCartIcon /> },
  { kind: "divider" },
  {
    segment: "/dashboard/products",
    title: "Produits",
    icon: <ViewInArIcon />,
    children: [
      { segment: "info", title: "Liste des produits", icon: <ViewInArIcon /> },
      { segment: "stock", title: "Gestion du stock", icon: <DescriptionIcon /> },
    ],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider theme={theme} navigation={NAVIGATION}>
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
