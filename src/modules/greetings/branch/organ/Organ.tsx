import { OrganizationGraph } from "@ant-design/graphs";
import { motion } from "framer-motion";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import { dataOrgan, getOrganTree } from "./data/data-fake";
import styles from "./scss/organ.module.scss";

export default function Organ(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <section className={styles.contentWrap}>
        <div className="inner">
          <motion.div
            initial={{ y: -50, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.box}
          >
            <OrganizationGraph
              data={getOrganTree(dataOrgan)[0]}
              autoFit
              behaviors={[]}
              nodeCfg={{
                style: (node: any) => {
                  return node.id === "1"
                    ? {
                        fill: "#ffba53",
                        stroke: "#ffba53",
                      }
                    : node.parent_id === 1
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
                    return node.id === "1"
                      ? styles[type as keyof typeof styles]
                      : node.parent_id === 1
                      ? styles[type as keyof typeof styles]
                      : {};
                  },
                },
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
