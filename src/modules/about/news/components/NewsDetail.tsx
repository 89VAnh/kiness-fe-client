import { Modal, Spin, Typography } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useGetNewsById } from "@/loader/news.loader";
import { formatToDate } from "@/utils/format-string";

interface Props {
  id: string | undefined;
  setNewsIdSelected: Dispatch<SetStateAction<string | undefined>>;
}

export default function NewsDetail({
  id,
  setNewsIdSelected,
}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (id) setOpen(true);
  }, [id]);

  const news = useGetNewsById({
    id: id!,
    config: {
      enabled: open && !!id,
    },
  });

  return (
    <Modal
      title={
        <Typography.Title level={3}>
          {news.isLoading ? <Spin /> : news.data?.news_title}
        </Typography.Title>
      }
      open={open}
      style={{ top: 120, borderRadius: "10px", padding: 0 }}
      width={"90vw"}
      onCancel={() => {
        setOpen(false);
        setNewsIdSelected(undefined);
      }}
      footer={null}
    >
      {news.isLoading ? (
        <Spin />
      ) : (
        <div
          style={{
            height: "calc(100vh - 205px)",
            overflow: "auto",
            paddingRight: 20,
          }}
        >
          <div style={{ textAlign: "right" }}>
            Đăng bởi: Le Minh - {formatToDate(news.data?.created_date_time)}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: news.data?.content_html }}
          ></div>
        </div>
      )}
    </Modal>
  );
}
