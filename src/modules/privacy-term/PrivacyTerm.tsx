import { useTranslation } from "react-i18next";

import Title from "@/modules/shared/title/Title";

import styles from "./scss/privacy-term.module.scss";

export default function PrivacyTerm(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title title={t("nav.privacy-term.title")} />

      <section className={styles.contentWrap}>
        <div className="inner">
          <span>{t("nav.privacy-term.title")}</span>
        </div>
      </section>
    </>
  );
}
