import { useTranslation } from "react-i18next";

import Title from "@/modules/shared/title/Title";

import styles from "./scss/policy.module.scss";

export default function Policy(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title title={t("nav.policy.title")} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <span>{t("nav.policy.title")}</span>
        </div>
      </section>
    </>
  );
}
