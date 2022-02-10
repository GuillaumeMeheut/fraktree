import css from "./index.module.scss";

export const Partner = ({ src, text, link }) => {
  return (
    <div className={css.container}>
      <img src={src} alt="association" />
      <p>{text}</p>
      <a href={link} target="_blank">
        Website
      </a>
    </div>
  );
};
