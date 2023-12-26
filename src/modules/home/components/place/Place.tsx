import { List, Space, Typography } from "antd";
import _ from "lodash";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ERROR_TIMEOUT } from "@/constant/config";
import { useSearchBranches } from "@/loader/branch.loader";
import { IBranch } from "@/models/branch";
import DivTransition from "@/modules/shared/transition/DivTransition";
import { MAP_DETAIL_URL } from "@/urls";
import { getUrlToDetail } from "@/utils/format-string";

import styles from "./scss/place.module.scss";

export default function Place(): JSX.Element {
  const [currentData, setCurrentData] = useState<any>({});
  const branchesQuery = useSearchBranches({
    params: {},
    config: {
      onSuccess: (data) => {
        if (data.message === ERROR_TIMEOUT) {
          branchesQuery.refetch();
          return;
        }

        if (data?.data) {
          const newData = _.groupBy(data.data, "city_name");

          setCurrentData(newData);
        }
      },
    },
  });

  return (
    <section className={styles.place}>
      <div className="inner">
        <div className={styles.titleWrap}>
          <DivTransition className={styles.mainTitle}>
            <Typography.Title level={2} className={styles.title}>
              <span>Tìm chi nhánh Kiness</span>
            </Typography.Title>
            <Typography.Paragraph>
              <span>Tìm kiếm Kiness gần bạn nhất</span>
            </Typography.Paragraph>
          </DivTransition>
        </div>

        <List className={styles.listPlace}>
          {_.keys(currentData).map((item, index) => (
            <List.Item key={index} className={styles.listItem}>
              <Space align="start">
                <Typography.Title level={5} className={styles.listTitle}>
                  Khu vực {item}
                </Typography.Title>

                <Space align="center" wrap>
                  {_.get(currentData, `${item}`)?.map(
                    (branch: IBranch, index: number) => (
                      <Link
                        key={branch.branch_id}
                        className={
                          index === _.get(currentData, `${item}`)?.length - 1
                            ? "last"
                            : ""
                        }
                        to={getUrlToDetail(MAP_DETAIL_URL, branch.branch_id)}
                        target="_blank"
                      >
                        {branch.branch_name}
                      </Link>
                    ),
                  )}
                  {/* <Link to={MAP_URL}>Chi nhánh Thanh Xuân</Link>
                  <Link to={MAP_URL} className="last">
                    Chi nhánh Thanh Xuân
                  </Link> */}
                </Space>
              </Space>
            </List.Item>
          ))}
        </List>
      </div>
    </section>
  );
}
