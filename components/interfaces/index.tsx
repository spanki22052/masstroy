export interface MaterialsI {
   title: string;
   img: string;
}

export interface SvgTextInterface {
   svgTag: JSX.Element | JSX.Element[];
   title: string;
   description: string;
}

export interface InstInfoInterface {
   hashtag: string;
   img: string;
   isAttached: boolean;
}

export interface BannersListInterface {
   img: string;
   title: string;
   description: string;
}
