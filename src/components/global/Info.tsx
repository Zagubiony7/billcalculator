import { type InfoProps } from "../../data";

export const Info = ({ price, children }: InfoProps) => {
  return (
    <section className="info">
      <div className="info-value">
        <p className="child">{children}</p>
        <p className="person">/ person</p>
      </div>
      <p className="price">${price}</p>
    </section>
  );
};
