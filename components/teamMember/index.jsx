import css from "./index.module.scss";

export const TeamMember = ({ src, name, role }) => {
  return (
    <div className={css.container}>
      <img src={src} alt="name" />
      <p className={css.name}>{name}</p>
      <p className={css.role}>{role}</p>
    </div>
  );
};
