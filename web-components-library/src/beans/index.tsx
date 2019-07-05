export type FooterGroupItemBean = { label: string; link: string };

export type FooterGroupBean = {
  id: string;
  title: string;
  items: FooterGroupItemBean[];
};

export declare type ActionBean = {
  isLink: boolean;
  value: string;
  url?: string;
};

export type CardBean = {
  id: string;
  titolo: string;
  img: string;
  autori: string;
  anno: number;
  actions: ActionBean[];
};
export type ListItemBean = {
  text: string;
  link?: string;
  icon?: string;
};

export type FilterItem = {
  name: string;
  id: string;
  isActive: boolean;
};
