export type FooterGroupItemBean = {
  label: string;
  link: string;
  targetBlank?: boolean;
};

export type FooterGroupBean = {
  title: string;
  items: FooterGroupItemBean[];
};

export type MyzLinkBean = {
  descr: string;
  link: string;
};

export type FooterSocialBean = {
  icon: string;
  link: string;
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
