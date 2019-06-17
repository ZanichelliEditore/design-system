export type FooterGroupItemBean = { label: string; link: string };

export type FooterGroupBean = {
  id: string;
  title: string;
  items: FooterGroupItemBean[];
};

export type ListItemBean = {
  text: String;
  link: string;
  icon?: String;
  innernode: ListItemBean[];
};
