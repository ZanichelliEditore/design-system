export type FooterGroupItemBean = { label: string; link: string };

export type FooterGroupBean = {
  id: string;
  title: string;
  items: FooterGroupItemBean[];
};

export type CardBean = {
  id: string;
  titolo: string;
  img: string;
  tags: string[];
  autori: string[];
  anno: number;
  actions: string[];
};
