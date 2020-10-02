export type Theme = {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export type Make = {
  ID: number;
  Name: string;
};

export type Model = {
  MakeID: number;
  ID: number;
  Name: string;
};

export type Version = {
  ModelID: number;
  ID: number;
  Name: string;
};

export type Vehicle = {
  ID: number;
  Make: string;
  Model: string;
  Version: string;
  Image: string;
  KM: number;
  Price: string;
  YearModel: number;
  YearFab: number;
  Color: string;
};

export type DataResponseMakes = Make[];

export type DataResponseModels = Model[];

export type DataResponseVersions = Version[];

export type DataResponseVehicles = Vehicle[];

export type Filters = {
  make?: string;
  model?: string;
  version?: string;
  yearModel?: string;
  mileage?: string;
  priceRange?: string;
};
