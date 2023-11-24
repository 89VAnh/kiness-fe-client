import { OrganizationGraph } from "@ant-design/graphs";
import { motion } from "framer-motion";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/organ.module.scss";

export default function Organ(): JSX.Element {
  const data = {
    id: "primary",
    value: {
      name: "Trụ sở chính",
    },
    children: [
      {
        id: "c1",
        value: {
          name: "Kinh doanh mới",
        },
      },
      {
        id: "c2",
        value: {
          name: "Trụ sở quản lý",
        },
        children: [
          {
            id: "c2-1",
            value: {
              name: "Công việc chung",
            },
            children: [
              {
                id: "c2-1-1",
                value: {
                  name: "Tài chính",
                },
                children: [
                  {
                    id: "c2-1-1-1",
                    value: {
                      name: "Kế toán",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "c3",
        value: {
          name: "Trụ sở kế hoạch",
        },
        children: [
          {
            id: "c3-1",
            value: {
              name: "Kế hoạch",
            },
            children: [
              {
                id: "c3-1-1",
                value: {
                  name: "Thiết kế",
                },
                children: [
                  {
                    id: "c3-1-1-1",
                    value: {
                      name: "Tiếp thị",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "c4",
        value: {
          name: "Trụ sở dịch vụ",
        },
        children: [
          {
            id: "c4-1",
            value: {
              name: "Quản lý tổ chức",
            },
            children: [
              {
                id: "c4-1-1",
                value: {
                  name: "Giáo dục",
                },
                children: [
                  {
                    id: "c4-1-1-1",
                    value: {
                      name: "C/S",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={styles.contentWrap}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.box}
          >
            <OrganizationGraph
              data={data}
              autoFit
              behaviors={[]}
              nodeCfg={{
                style: (node: any) => {
                  return node.id === "primary"
                    ? {
                        fill: "#ffba53",
                        stroke: "#ffba53",
                      }
                    : node.id.length === 2
                    ? { fill: "#0bc9bd", stroke: "#0bc9bd" }
                    : { stroke: "#0bc9bd" };
                },
                label: {
                  style: (node: any, _, type) => {
                    const styles = {
                      icon: {
                        width: 16,
                        height: 16,
                      },
                      title: {
                        fill: "#fff",
                      },
                      name: {
                        fill: "#fff",
                      },
                    };
                    return node.id === "primary"
                      ? styles[type as keyof typeof styles]
                      : node.id.length === 2
                      ? styles[type as keyof typeof styles]
                      : {};
                  },
                },
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
