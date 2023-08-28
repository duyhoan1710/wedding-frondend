import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Index");

  return (
    <div
      className={`absolute top-6 left-8 z-20 hidden w-[200px] font-sacra text-2xl leading-[1.2] text-white md:top-8 md:left-20 md:block md:text-[40px]`}
    >
      {t("invite")}
    </div>
  );
}
