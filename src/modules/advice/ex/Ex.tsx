import { Card, Col, Row } from "antd";
import { motion } from "framer-motion";

import Breadcrumb from "@/modules/shared/breadcrumb/Breadcrumb";
import Title from "@/modules/shared/title/Title";

import styles from "./scss/ex.module.scss";

export default function Ex(): JSX.Element {
  return (
    <>
      <Title />

      <Breadcrumb />

      <div className={styles.contentWrap}>
        <div className="inner">
          <Row gutter={16}>
            <Col span={24} md={12} lg={8}>
              <motion.div
                initial={{ y: -50, opacity: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div></div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
