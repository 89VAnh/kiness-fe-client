import dayjs from "dayjs";

export const getKeyFromPath = (path: string) => {
  if (!path) return;

  const texts = path.split("/");
  const len = texts.length;

  return texts[len - 1];
};

export const formatToDate = (strDate: string) => {
  return dayjs(strDate).isValid() ? dayjs(strDate).format(formatDateShow) : "";
};

export const getLastPath = (path: string) => {
  return path.split("/")?.[path.split("/").length - 1];
};

export const formatDateShow = "DD/MM/YYYY";
export const formatDatePost = "YYYY-MM-DD";

export const getUrlToDetail = (url: string, id: string | number): string => {
  return url.replace(":id", id + "");
};

export const encodedData = (data: any): string => {
  const d = JSON.stringify(data);
  return btoa(d);
};

export const decodedData = (data: string): any => {
  return atob(data);
};
